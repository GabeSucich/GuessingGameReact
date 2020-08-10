import React from "react"
import "./style.css"

function Card(props) {
    return (
        <div className="col s6 m4 l3">
            <div className="card blue-grey darken-1" id={props.id}>
                <div className="card-image">
                    <img onClick={props.onClick} src={props.src} alt={props.alt}/>
                </div>
            </div>
        </div>
    )
}

export default Card