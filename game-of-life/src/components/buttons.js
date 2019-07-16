import React, { Component, Fragment } from 'react';

export default class Buttons extends Component {
    render() {
        return (
            <Fragment>
                <button>Play</button>
                <button>Pause</button>
                <button>Clear</button>
            </Fragment>
        )
    }
}