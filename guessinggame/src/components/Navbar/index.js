import React from 'react'
import "./style.css"

function Navbar(props) {
    return (
    <nav>
        <div className="nav-wrapper purple lighten-3">
            <ul className="left title">Clicky Game</ul>
            <ul className="right score">
                {console.log(props.highScore)}
                <li >Current Score: {props.currentScore} / High Score: {props.highScore}</li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar