import React, {Component} from "react"
import {ThemeContext} from "../App"

export default function Header() {
        const {theme} = React.useContext(ThemeContext)
        const result = theme[0].toUpperCase() + theme.slice(1)
        return (
            <header className={`${theme}-theme`}>
                <h1 className="font-bold">{result} Theme</h1>
            </header>    
        )
}
