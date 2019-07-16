import React, { Component, Fragment } from 'react';

export default class Rules extends Component {
    
    render() {
        return (
        <Fragment>
            <h3>Rules:</h3>
            <ol>
                <li> Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                
                <li>Any live cell with two or three live neighbours lives on to the next generation.</li>

                <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>

                <li>Any dead cell with three live neighbours becomes a live cell, as if by reproduction.</li>
            </ol>
        </Fragment>
    )
    }
}