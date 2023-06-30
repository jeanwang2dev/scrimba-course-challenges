import React from "react"
import Button from "./components/Button"
import { FaMoneyBillAlt } from "react-icons/fa";

function App() {
    return (
        <main className="container mx-auto">
            
            <Button>
                <FaMoneyBillAlt />
                Buy Now!
            </Button>
        </main>
    )
}

export default App