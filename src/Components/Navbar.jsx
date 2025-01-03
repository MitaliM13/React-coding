import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"

function Navbar() {

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen)
  }

  return (
    <div className="flex justify-between">
        <div onClick={toggleMenu}>
          <HamburgerMenu/>
        </div>
        <ul className="flex justify-center gap-6 bg-purple-400 p-5 text-lg font-medium flex-wrap ">
            <li>Home</li>
            <li>Completed Tasks</li>
            <li>Pending Tasks</li>
            <li>Add Tasks</li>
            <li>Filter</li>
            <li>Search</li>
            <li>Toggle</li>
        </ul>
    </div>
  )
}

export default Navbar