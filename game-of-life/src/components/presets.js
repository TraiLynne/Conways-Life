import React, { Component, Fragment } from 'react';

export default class Presets extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <img/>
                    <button>Preset 1</button>
                </div>

                <div>
                    <img />
                    <button>Preset 2</button>
                </div>

                <div>
                    <img />
                    <button>Preset 3</button>
                </div>

                <div>
                    <img />
                    <button>Preset 4</button>
                </div>
            </Fragment>
        )
    }
}