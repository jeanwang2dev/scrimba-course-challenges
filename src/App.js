import React from "react"

export default function Form() {
    // save state in an object
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    console.log(formData)

    function handleChange(event) {
        // console.log(event.target.name)
        // let fieldName = event.target.name
        /** 
        setFormData( prevFormData => {
            let newFormData = {...prevFormData}
            newFormData[event.target.name] = event.target.value 
            return newFormData
        })
        */
        
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
        
    }
    
    return (
        <form className="p-4">
            <input
                className="border-2 p-3 "
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
            />

            <input
                className="border-2 p-3 "
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                className="border-2 p-3 "
                type="email"
                name="email"
                placeholder="Youremail@domain.com"
                onChange={handleChange}
                value={formData.email}
            />
        </form>
    )
}
