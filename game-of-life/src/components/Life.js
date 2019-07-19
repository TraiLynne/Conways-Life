import React, { Component } from 'react';

// Game Play Logic is in here
export default class Life extends Component {
    constructor() {
        super();

        this.grid = [];
    }

    oneGen = (board) => {
        let newBoard = [];

        for (let i = 0; i < board.length; i++) {
            newBoard.push([]);

            for (let j = 0; j < board.length; j++) {
                const neighbors = this.getCellNeighbors(board, i, j);

                if (neighbors === 3 && !board[i][j]) {

                    newBoard[i][j] = 1;

                } else if ((neighbors === 2 || neighbors === 3) && board[i][j]) {

                    newBoard[i][j] = 1;

                } else {

                    newBoard[i][j] = 0;

                }
            }
        }
        this.grid = newBoard;
    };

    getCellNeighbors = (board, i, j) => {
        let count = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (!x && !y) {
                    continue;
                }

                const ix = i + x;

                const jy = j + y;

                if (ix >= 0 && ix < board.length && jy >= 0 && jy < board.length) {
                    if (board[ix][jy]) {
                        count++;
                    }
                }
            }
        }
        return count;
    };

    drawBlankGrid() {
        this.grid = [];

        for (let i = 0; i < 25; i++) {
            this.grid[i] = [];

            for (let j = 0; j < 25; j++) {
                this.grid[i].push(0);
            }
        }
    };
    
    drawRandomizedGrid() {
        this.grid = [];

        for (let i = 0; i < 25; i++) {
            this.grid[i] = [];

            for (let j = 0; j < 25; j++) {
                this.grid[i].push(Math.round(Math.random()));
            }
        }
    };

    drawGlider() {
        // Clear Grid
        this.drawBlankGrid();

        // Draw Shape
        this.grid[1][0] = 1;
        this.grid[2][1] = 1;
        this.grid[2][2] = 1;
        this.grid[1][2] = 1;
        this.grid[0][2] = 1;
    };

    drawSmallExploder() {
        // Clear Grid
        this.drawBlankGrid();

        // Draw Shape
        this.grid[11][10] = 1;
        this.grid[11][11] = 1;
        this.grid[10][11] = 1;
        this.grid[12][11] = 1;
        this.grid[10][12] = 1;
        this.grid[12][12] = 1;
        this.grid[11][13] = 1;
    };

    drawExploder() {
        // Clear Grid
        this.drawBlankGrid();

        // Draw Shape
        this.grid[10][9] = 1;
        this.grid[10][10] = 1;
        this.grid[10][11] = 1;
        this.grid[10][12] = 1;
        this.grid[10][13] = 1;
        this.grid[12][9] = 1;
        this.grid[12][13] = 1;
        this.grid[14][9] = 1;
        this.grid[14][10] = 1;
        this.grid[14][11] = 1;
        this.grid[14][12] = 1;
        this.grid[14][13] = 1;
    };

    draw10CellRow() {
        // Clear Grid
        this.drawBlankGrid();

        // Draw Shape
        for (let i = 8; i < 18; i++) {
            this.grid[i][12] = 1;
        }
    };

    drawLightWeightSpaceShip() {
        // Clear Grid
        this.drawBlankGrid();

        // Draw Shape
        this.grid[1][15] = 1;
        for (let i = 2; i < 6; i++) {
            this.grid[i][14] = 1;
        }
        this.grid[5][15] = 1;
        this.grid[5][16] = 1;
        this.grid[4][17] = 1;
        this.grid[1][17] = 1;
    };
}