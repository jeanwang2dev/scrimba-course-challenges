import React from "react"
import Example from "./components/Example"

function App() {
    return (
        <div className="container mx-auto p-3">
            {/*<Example name={["Jane", "Bob"]}/> */}
            {/*<Example name={ function() { return "Hey there!"}} />*/}
            <Example render={
                function(number) {
                    return (
                        <h1>{number >= 0 ? "Positive" : "Negative"}</h1>
                        
                    )
                }
            }/>
        </div>
    )
}

export default App