import React from 'react'
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ children }) {
  
    return (
        <div className="menu">
            {children}
        </div>
    )
}
