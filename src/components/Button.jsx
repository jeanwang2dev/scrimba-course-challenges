import React, {Component} from "react"
import {ThemeContext} from "../App"

export default function Button() {
    const {theme} = React.useContext(ThemeContext)
    const {toggleTheme} = React.useContext(ThemeContext)

    return (
        <button className={`${theme}-theme`} onClick={toggleTheme}>
            Switch Theme
        </button>
    )
}

