import React from "react"
import Example from "./components/Example"

function App() {
    return (
        <div className="container mx-auto p-3">
            {/*<Example name={["Jane", "Bob"]}/> */}
            {/*<Example name={ function() { return "Hey there!"}} />*/}
            <Example render={
                function(isDayTime) {
                    return (
                        <h1>{/*<h1>hey there, { sign && "hello" }</h1>*/
                            isDayTime ? "Good Day!" : "Good Night!"
                        }</h1>
                        
                    )
                }
            }/>
        </div>
    )
}

export default App