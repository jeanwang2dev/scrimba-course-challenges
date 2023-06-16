import React from "react"
import Example from "./components/Example"

function App() {
    return (
        <div className="container mx-auto p-3">
            {/*<Example name={["Jane", "Bob"]}/> */}
            <Example name={ function() { return "Hey there!"}} />
        </div>
    )
}

export default App