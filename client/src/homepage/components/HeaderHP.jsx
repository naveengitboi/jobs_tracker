import React from 'react'
import { NavLink } from 'react-router-dom'
import icons from '../../assets/icons'
import "../../styles/components/Navbar.css"

function HeaderHP() {
    return (
        <div className="navbarContainer headerHpNavbarWrapper">
            <div className="navListItems headerHpNavListItems">
                <div className="navbarHeader">
                    <p className="mdTxt">Job Tracker</p>
                </div>
                <ul className="regTxt">
                    <li><NavLink to={"/"}> Home</NavLink></li>
                    <li><NavLink to={"applications"}>Features</NavLink></li>
                    <li><NavLink to="templates">Templates</NavLink></li>
                </ul>
            </div>
            <div className="headerHpActions">
                <NavLink to="profile" className={""}>
                    Sign Up
                </NavLink>
                <NavLink to="profile">
                    Log In
                </NavLink>
            </div>
        </div>
    )
}

export default HeaderHP