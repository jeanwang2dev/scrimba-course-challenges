import React from "react"
import Button from "./components/Button"
import { FcGoogle } from "react-icons/fc"

function App() {
    return (
        <main className="container mx-auto">

            <Button className="btn-green" size="sm" >
                <FcGoogle />
                Log in with Google
            </Button>
        </main>
    )
}

export default App