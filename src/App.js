import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")

    function handleChangeFN(event) {
        //console.log(event.target.value)
        setFirstName( event.target.value)
         
    }

    function handleChangeLN(event) {
        //console.log(event.target.value)
        setLastName( event.target.value)
         
    }
    
    return (
        <form className="p-4">
            <input
                className="border-2 p-3 "
                type="text"
                placeholder="First Name"
                onChange={handleChangeFN}
            />

            <input
                className="border-2 p-3 "
                type="text"
                placeholder="Last Name"
                onChange={handleChangeLN}
            />
        </form>
    )
}
