import React, { Component, Fragment } from 'react';
import Grid from '../components/grid';
import Buttons from '../components/buttons';
import Presets from '../components/presets';


export default class Interactive extends Component {
    render(){
        return(
            <Fragment>
                <Grid/>
                <Presets/>
                <Buttons/>
            </Fragment>
        )
    }
}