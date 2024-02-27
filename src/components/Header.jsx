import React, {Component} from "react"
import {ThemeContext} from "../App"

export default function Header() {
        const value = React.useContext(ThemeContext)
        // console.log(value)
        const result = value[0].toUpperCase() + value.slice(1)
        return (
            <header className={`${value}-theme`}>
                <h1 className="font-bold">{result} Theme</h1>
            </header>    
        )
}
