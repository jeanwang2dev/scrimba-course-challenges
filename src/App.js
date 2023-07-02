import React from "react"
import Button from "./components/Button"
import { FcGoogle } from "react-icons/fc"

function App() {
    return (
        <main className="container mx-auto">

            <Button> Log in with Google Default</Button>
            <Button size="small"> 
                <FcGoogle />
                Log in with Google Small
            </Button>
            <Button size="large" variant="success"> Log in with Google</Button>
            <Button variant="danger"> Log in with Google</Button>
            <Button size="large" variant="warning"> Log in with Google</Button>

            {/* <button className="button-large button-success">Log in with Google</button>
            <button className="button-small button-danger">Log in with Google</button> */}
        </main>
    )
}

export default App