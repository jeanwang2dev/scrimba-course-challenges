import { useState } from 'react'

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = useState(false);
    function toggle() {
        setIsShown( prevShown => !prevShown )
    }

    return (
        <div>
            {props.setup && <h3 className="font-bold mb-3">{props.setup}</h3>}
            { isShown  &&  <p className="mb-4">{props.punchline}</p> }
            <button className="btn" onClick={toggle}>{isShown ? "Hide": "Show"} Punchline</button>
            <hr />
        </div>
    )
}