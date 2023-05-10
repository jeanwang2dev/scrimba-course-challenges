import React from "react"
import userHeadShot from "./img/user.png"
import emptyStar from "./img/star-empty.png"
import filledStar from "./img/star-filled.png"


export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? filledStar : emptyStar
    
    function toggleFavorite() {
        //console.log("Toggle Favorite")
        setContact( preContact => {
            return {
                ...preContact,
                isFavorite: !preContact.isFavorite
            }
        })
    }
    
    return (
        <main className="p-2">
            <article className="max-w-sm rounded overflow-hidden shadow-xl mx-auto p-12">
                <img src={userHeadShot} className="w-full" />
                <div className="card--info">
                    <img 
                        src={starIcon}
                        className="w-8 mb-3"
                        onClick={toggleFavorite}
                    />
                    <h2 className="font-bold text-xl">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="text-base">{contact.phone}</p>
                    <p className="text-base">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}