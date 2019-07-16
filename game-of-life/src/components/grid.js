import React, { Component, Fragment } from 'react';

export default class Grid extends Component {
    constructor(props) {
        super(props);

        this.continueAnimation = true;
    }

    componentDidMount = () => requestAnimationFrame((timestamp) => { this.onAnimFrame(timestamp); });

    componentWillUnmount = () => this.continueAnimation = false;

    onAnimFrame(timestamp){
        if(this.continueAnimation){
            requestAnimationFrame((timestamp) => {
                this.onAnimFrame(timestamp)
            })
        }
    }

    render(){
        return(
            <Fragment>
                <h3>Grid will be here</h3>
                <canvas ref="canvas" />
            </Fragment>
        )
    }
}