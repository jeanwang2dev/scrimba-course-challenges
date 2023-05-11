import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    console.log("Component rendered")
    
    // side effects
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div className="max-w-sm mx-auto pt-4">
            <h2 className="font-bold text-xl">The count is {count}</h2>
            <button className="btn" onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>          
        </div>
    )
}

