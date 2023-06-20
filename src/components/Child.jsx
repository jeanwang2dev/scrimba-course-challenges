import React from "react"

function Child(){
     
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
    return (
        <div>
            <p>I'm a GrandChild Component</p>
        </div>
    )
    
}

export default React.memo(Child)