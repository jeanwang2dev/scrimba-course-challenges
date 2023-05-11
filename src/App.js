import React, {useState} from "react"
import WindowTracker from "./components/WindowTracker"

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    const [show, setShow] = useState(true)

    function toggle(){
        // console.log('toggle')
        setShow( prevShow => !prevShow )
    }
    
    return (
        <div className="flex flex-col items-center container bg-orange-600 mx-auto py-10">
            <button onClick={toggle} className="btn">
                Toggle WindowTracker
            </button>
            { show && <WindowTracker />}
        </div>
    )
}
