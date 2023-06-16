import React, {Component} from "react"
import { withToggler } from "./HOCs/withToggler"

function Menu(props) {
    
    return (
        <div>
            <button className="border bg-gray-300 p-1.5 rounded" onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
            <nav className="flex-col mb-3" style={{display: props.on ? "flex" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your Stars</a>
                <a>Your Gists</a>
            </nav>
        </div>
    ) 
}

export default withToggler(Menu, {defaultOnValue: true})