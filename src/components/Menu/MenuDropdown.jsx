import React from 'react'

export default function MenuDropdown({ children, open, toggle}) {
    console.log(toggle, open)

    return open ? (
            <div className="menu-dropdown">
               {React.Children.map(children, child => {
                 return React.cloneElement(child, {
                    open,
                    toggle
                 })
               })}
            </div>
    ) : null

    // if(open) {
    //     return (

    //     )
    // } else {
    //     return (
    //         null
    //     )
    // }

}