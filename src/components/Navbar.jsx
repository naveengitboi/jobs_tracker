import React from "react"
import "../styles/Navbar.css"
import icons from "../assets/icons"

const Navbar = () => {
    return(
        <div className="navbarContainer">
            <div className="navListItems">
                <div className="navbarHeader ">
                    {/* <img src="" alt="" /> */}
                    {<icons.jblogo/>}
                    <p className="mdTxt">Job Tracker</p>
                </div>
                <ul className="regTxt">
                    <li>{<icons.user/>}Dashboard</li>
                    <li>{<icons.application/>}Applications</li>
                    <li>{<icons.template/>}Templates</li>
                    <li>{<icons.jobsites/>}Job Sites</li>
                    <li>{<icons.settings/>}settings</li>
                </ul>
            </div>
            <div className="navProfile">
                <div className="profileImage">
                    {/* <img src="https://via.placeholder.com/150" alt="Profile" /> */}
                    {<icons.user/>}
                </div>
                <div className="profileName">John Doe</div>
            </div>
        </div>
    )
}


export default Navbar