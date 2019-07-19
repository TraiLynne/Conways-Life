import React, { Component, Fragment } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <h2>What's Going on Here?</h2>

                <p><strong>Thee Who: </strong></p><p>Invented by British Mathematician <a href='https://en.wikipedia.org/wiki/John_Horton_Conway' target='_blank'>John Horton Conway</a></p>

                <p><strong>Thee When: </strong></p>
                
                <p>1970</p>

                <p><strong>Thee What:</strong></p>

                <p><strong>Zero-Player Game:</strong> It may not feel like much of a game, given the limited amount of moves you make. But this is what we call a zero-player game where the game will progress on its own after the initial input is given. That just means you can be even lazier than those infamous idle games.</p>
                <p><strong>Cell Automaton: </strong>Basically what you see here. A grid of cells that evolves through generations based on the given set of rules. Typically the cells have a determined number of states such as off & on or alive & dead. Each cells state in the next generation is determined by its current neighboring states (the 8 cells surrounding it in this case). </p>
                <p></p>

                <p><strong>Thee Why: </strong></p>
                
                <p>Back in the 1940s, there was this guy name Jon von Neuman that defined life as a creation that can reproduce itself and simulate a Turing Machine, the definition of turing completeness. Back in these days, technology had not progressed as far as it needed to for Mr. von Neuman to engineer his solution. From the information given by von Neuman, a man named Stainislaw Ulam invented cellular automata. He wanted so much to use computers to demonstrate his findings but he was a busy man. Enter Conway !! For 2 years, Conway experimented with the information provided by von Neuman, Ulam, and others who had been investigating this theory further. In 1970, his Game of Life was born.</p>
            </div>
        )
    }
}