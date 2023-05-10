import React from "react"

export default function Form() {
    // save state in an object
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    //console.log(formData.favColor)

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
        const { name, value, type, checked} = event.target
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked:value
            }
        })
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submit2API(formData)
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto bg-gray-200">
            <div className="flex flex-col space-y-3">
                <input
                    className="form-input"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstName}
                />
                <input
                    className="form-input"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                />
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Youremail@domain.com"
                    onChange={handleChange}
                    value={formData.email}
                />
                <textarea
                    className="form-input"
                    name="comments"
                    placeholder="Your comment goes here"
                    onChange={handleChange}
                    value={formData.comments}
                />
                <div>
                    <input 
                        type="checkbox"
                        id="isFriendly"
                        name="isFriendly"  
                        onChange={handleChange}
                        checked={formData.isFriendly}  
                    />
                    <label htmlFor="isFriendly"> Are you friendly</label>
                </div>

                <fieldset className="border border-solid border-black p-3">
                    <legend>Current employment status</legend>
                    
                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}

                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                
                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <select 
                    id="favColor" 
                    value={formData.favColor}
                    name="favColor"
                    onChange={handleChange}
                    className="w-fit"
                >
                    <option value="">---choose---</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <button className="btn">Submit</button>
            </div>


        </form>
    )
}
