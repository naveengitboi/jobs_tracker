import React from "react"
import "../styles/Navbar.css"

const Navbar = () => {
    return(
        <div className="navbarContainer">
            <div className="navListItems">
                <div className="navbarHeader ">Jobs Tracker</div>
                <ul>
                    <li>Dashboard</li>
                    <li>Applications</li>
                    <li>Templates</li>
                    <li>Job Sites</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div className="navProfile">
                <div className="profileImage">
                    <img src="https://via.placeholder.com/150" alt="Profile" />
                </div>
                <div className="profileName">John Doe</div>
            </div>
        </div>
    )
}


export default Navbar