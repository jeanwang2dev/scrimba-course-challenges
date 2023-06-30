import React, {Component} from "react"
import ThemeContext from "../themeContext"

class Header extends Component {
    render() {
        //const value = this.context
        return (
            <header className={`${this.context}-theme`}>
                <h2 className="font-bold">{this.context} Theme</h2>
            </header>
        )    
    }
}

Header.contextType = ThemeContext

export default Header
