import React, {Component} from "react"
import {ThemeContext} from "../App"

export default function Button() {
    const value = React.useContext(ThemeContext)
    return (
        <button className={`${value}-theme`}>Switch Theme</button>
    )
}

// class Button extends Component {
//     render() {
//         console.log(this.context)
//         return (
//             <button className={this.context + "-theme"}>Switch Theme</button>
//         )    
//     }
// }

// Button.contextType = ThemeContext

// export default Button
