import React from "react"
import Menu from "./components/Menu/Menu"
import MenuButton from "./components/Menu/MenuButton"
import MenuDropdown from "./components/Menu/MenuDropdown"

function App() {
    const [open, setOpen] = React.useState(true)

    function toggle() {
          setOpen(prevOpen => !prevOpen)
    }
  
    return (
        <main className="container mx-auto pt-10">
            <Menu>
                <MenuButton onClick={toggle}>Sports</MenuButton>

                {open && <MenuDropdown items={["Tennis", "Racquetball", "Pickleball", "Squash"]} />}
            </Menu>
        </main>
    )
}

export default App