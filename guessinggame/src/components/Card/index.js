import React from "react"
import "./style.css"

function Card(props) {
    return (
        <div className="col s6 m4 l3">
            <div className="card blue-grey darken-1" id={props.id}>
                <div class="card-image">
                    <img src={props.src} onClick={() => props.processGuess(props.id)}/>
                </div>
            </div>
        </div>
    )
}

export default Card