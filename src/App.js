import React from "react"
import Avatar from "./components/Avatar"
import bobHeadshot from './img/bob.jpg'

function App() {
    return (
        <main className="container mx-auto pt-10">
            {/* <div class="avatar"><img src="./img/bob.jpg" alt="Bob Ziroll"/></div> */}
            <Avatar src={bobHeadshot} alt="Bob Ziroll" />
            <br />
            <Avatar>BZ</Avatar>
            <br />
            <Avatar />
        </main>
    )
}

export default App