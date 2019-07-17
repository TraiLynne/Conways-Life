import React, { Component, Fragment } from 'react';

export default class LifeCanvas extends Component {
    constructor(props){
        super(props);

        this.state = {
            generation: 0
        }
    }

    render(){
        return (
            <>
                <h2>Generation #: {this.state.generation}</h2>
                <canvas ref="canvas"/>
                <div className='control-container'>
                    <button>Step</button>
                    <button>Play</button>
                    <button>Pause</button>
                    <button>Clear</button>
                </div>
            </>
        );
    }
}