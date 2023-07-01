import React from "react"
import Button from "./components/Button"
import { FaMoneyBillAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"

function App() {
    return (
        <main className="container mx-auto">
            
            <Button>
                <FaMoneyBillAlt />
                Buy Now!
            </Button>

            <Button 
                varient
                style={{color:"green"}}
                onClick={ () => console.log("Logging in...")}>
                <FcGoogle />
                Log in with Google
            </Button>
        </main>
    )
}

export default App