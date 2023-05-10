import React from "react"
import { useState } from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        isOkToEmail: false
    })

    function handleChange(event) {
        const { name, value, type, checked} = event.target
        setFormData( prevFormData => ({
                ...prevFormData,
                [name]: type === 'checkbox' ? checked:value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        //console.log(formData)
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("passwords not match")
            return
        }
        if(formData.isOkToEmail){
            console.log("Thanks for signing up for our newsletter!")
        }   
    }
    
    return (
        <div className="max-w-md mx-auto bg-purple-800 p-8">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form-input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form-input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                <div className="flex space-x-4">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="isOkToEmail"
                        onChange={handleChange}
                        checked={formData.isOkToEmail}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="btn"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
