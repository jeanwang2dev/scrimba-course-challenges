import React from "react"

import Header from "./components/Header"
import Button from "./components/Button"
import { createContext } from 'react';

const ThemeContext = React.createContext()

export default function App() {
    return (
        <ThemeContext.Provider value='dark'>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }