import React from "react"
import Menu from "./components/Menu"
import Favorite from "./components/Favorite"

function App() {
    return (
        <div className="container mx-auto p-3">
            <Menu />
            <hr />
            <Favorite />
        </div>
    )
}

export default App