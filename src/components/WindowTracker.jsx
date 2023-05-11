import React, {useEffect, useState} from "react"

export default function WindowTracker() {
      /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect( () => {
        function watchWidth(){
            console.log('setting up...')
            setWindowWidth(window .innerWidth)
        }
        window.addEventListener('resize', watchWidth)
        return function() {
            console.log('cleaning up...')
            window.removeEventListener('resize', watchWidth)
        }
    }, [])

    return (
        <h1 className="text-3xl text-white">Window width: {windowWidth}</h1>
    )
}
