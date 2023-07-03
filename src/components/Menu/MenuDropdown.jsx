import React from 'react'

export default function MenuDropdown({ children, open}) {
    //console.log(toggle, open)

    return open ? (
            <div className="menu-dropdown">
               {children}
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