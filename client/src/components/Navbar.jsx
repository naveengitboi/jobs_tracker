import React from "react"
import "../styles/components/Navbar.css"
import icons from "../assets/icons"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="navListItems">
                <div className="navbarHeader ">
                    {/* <img src="" alt="" /> */}
                    {<icons.nav.jblogo />}
                    <p className="mdTxt">Job Tracker</p>
                </div>
                <ul className="regTxt">
                    <li> <NavLink to={"/"}> {<icons.nav.user />}Dashboard </NavLink></li>
                    <li><NavLink to={"applications"}>{<icons.nav.application />}Applications</NavLink></li>
                    <li><NavLink to="templates">{<icons.nav.template />}Templates</NavLink></li>
                    <li><NavLink to="sites">{<icons.nav.jobsites />}Sites</NavLink></li>
                    <li><NavLink to="settings">{<icons.nav.settings />}settings</NavLink></li>
                </ul>
            </div>
            <div className="navProfile">
                <NavLink to="profile">
                    <div className="profileImage">
                        {/* <img src="https://via.placeholder.com/150" alt="Profile" /> */}
                        {<icons.nav.user />}
                    </div>
                <div className="profileName">John Doe</div>
                </NavLink>
            </div>
        </div>
    )
}


export default Navbar