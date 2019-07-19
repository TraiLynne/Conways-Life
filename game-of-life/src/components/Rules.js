import React, { Component, Fragment } from 'react';

import '../App.css'

export default class Rules extends Component {
    render(){
        return (
            <div className='rules-container'>
                <h2>Rules</h2>
                <ol>
                    <li>A live cell will die if less than 2 neighbors are alive</li>

                    <li>A live cell will move on to the next generation if it has 2 or 3 live neighbors</li>

                    <li>A live cell will die if more than 3 of its neighbors are alive</li>

                    <li>A dead cell will be revived if 3 of it's neighbors are alive</li>
                </ol>
            </div>
        )
    }
}