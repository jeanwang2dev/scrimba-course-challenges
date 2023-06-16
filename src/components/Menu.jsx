import React from "react"
import { withToggler } from "./HOCs/withToggler"

function Menu(props) {
    return (
        <div className="mb-4">
            <button className="border bg-gray-300 p-1.5 rounded" onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
            <nav style={{display: props.on ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <p><a>Your Profile</a></p>
                <p><a>Your Repositories</a></p>
                <p><a>Your Stars</a></p>
                <p><a>Your Gists</a></p>
            </nav>
        </div>
    ) 
}

export default withToggler(Menu, {defaultOnValue: true})