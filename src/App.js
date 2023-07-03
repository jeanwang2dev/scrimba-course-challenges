import React from "react"
import Menu from "./components/Menu/Menu"

function App() {
    return (
        <main className="container mx-auto pt-10">
            <Menu
                buttonText="Sports"
                items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
            />
        </main>
    )
}

export default App