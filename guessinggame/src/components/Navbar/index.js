import React from 'react'

function Navbar(props) {
    return (
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Clicky Game</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>Current Score: {props.currentScore}</li>
                <li>High Score: {props.highScore}</li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar