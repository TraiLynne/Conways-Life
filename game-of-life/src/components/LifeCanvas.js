import React, { Component } from 'react';
import Life from './Life.js';

export default class LifeCanvas extends Component {
    constructor() {
        super();
        this.state = {
            generation: 0,
        };
    }

    // cDM
    componentDidMount() {
        this.drawCanvas();
        this.life = new Life();
        this.life.drawBlankGrid();
        this.start = null;
        this.request = null;
        this.isClickable = true;
    }
    
    drawCanvas() {
        const context = this.refs.canvas.getContext('2d');

        context.strokeStyle = 'black';

        for (let i = 0; i <= 375; i += 15) {
            for (let j = 0; j <= 375; j += 15) {
                context.moveTo(i, 0);
                context.lineTo(i, j);
                context.moveTo(0, j);
                context.lineTo(i, j);
            }
        }

        context.stroke();
    };

    getPosition = e => {
        if (this.isClickable) {
            const canvas = this.refs.canvas;
            const grid = canvas.getBoundingClientRect();
            const x = e.clientX - grid.left;
            const y = e.clientY - grid.top;
            this.toggleState(x, y);
        }
    };

    toggleState(x, y) {
        const x_index = Math.floor(x / 15);
        const y_index = Math.floor(y / 15);
        this.life.grid[x_index][y_index] === 0
            ? (this.life.grid[x_index][y_index] = 1)
            : (this.life.grid[x_index][y_index] = 0);
        this.fillSquares();
    };

    fillSquares = () => {
        const context = this.refs.canvas.getContext('2d');

        context.fillStyle = 'red';

        for (let i = 0; i < this.life.grid.length; i++) {
            for (let j = 0; j < this.life.grid.length; j++) {
                if (this.life.grid[i][j]) {
                    context.fillRect(i * 15, j * 15, 15, 15);
                } else {
                    context.clearRect(i * 15, j * 15, 15, 15);
                }
            }
        }
        this.drawCanvas();
    };

    oneStep = () => {
        if (!this.request && !this.start) {
            this.life.oneGen(this.life.grid);
            this.setState({ generation: this.state.generation + 1 }, () => {
                this.isClickable = false;
                this.fillSquares();
            });
        }
    };

    startAnimation = timestamp => {
        this.request = requestAnimationFrame(this.startAnimation);
        if (!this.start) {
            this.start = timestamp;
        }
        const elapsed = timestamp - this.start;
        if (elapsed > 100) {
            this.life.oneGen(this.life.grid);
            this.setState({ generation: this.state.generation + 1 }, () => {
                this.start = timestamp;
                this.isClickable = false;
                this.fillSquares();
            });
        }
    };

    stopAnimation = () => {
        cancelAnimationFrame(this.request);
        this.request = null;
        this.start = null;
    };

    clearCanvas = () => {
        this.stopAnimation();
        this.setState({ generation: 0 }, () => {
            this.isClickable = true;
            this.life.drawBlankGrid();
            this.fillSquares();
        });
    };

    selectPreset = e => {
        if (!this.start && !this.myreq) {
            switch (e.target.value) {
                case 'random':
                    this.life.drawRandomizedGrid();
                    break;
                case 'glider':
                    this.life.drawGlider();
                    break;
                case 'smallExploder':
                    this.life.drawSmallExploder();
                    break;
                case 'exploder':
                    this.life.drawExploder();
                    break;
                case '10CellRow':
                    this.life.draw10CellRow();
                    break;
                case 'lightWeightSpaceShip':
                    this.life.drawLightWeightSpaceShip();
                    break;
                default:
                    this.life.drawBlankGrid();
            }
            this.setState({ generation: 0 }, () => this.fillSquares());
        }
    };

    render() {
        return (
            <div className='game-container'>
                <p className='gen-info'>Generation #: {this.state.generation}</p>

                <canvas
                    ref="canvas"
                    width={375}
                    height={375}
                    onClick={e => this.getPosition(e)}
                />

                <div className="button-container">
                    <select onChange={this.selectPreset} defaultValue="none">
                        <option value="none">None</option>
                        <option value="random">Random</option>
                        <option value="glider">Glider</option>
                        <option value="smallExploder">Small Exploder</option>
                        <option value="exploder">Exploder</option>
                        <option value="10CellRow">10 Cell Row</option>
                        <option value="lightWeightSpaceShip">Lightweight Spaceship</option>
                    </select>
                    
                    <button onClick={() => this.oneStep()}>
                        Step
                    </button>

                    <button
                        onClick={() => {
                            if (!this.request && !this.start) {
                                this.request = requestAnimationFrame(this.startAnimation);
                            }
                        }}
                    >
                        Start
                    </button>

                    <button onClick={() => this.stopAnimation()}>
                        Stop
                    </button>

                    <button onClick={() => this.clearCanvas()}>
                        Clear Board
                    </button>
                </div>

            </div>
        );
    }
}