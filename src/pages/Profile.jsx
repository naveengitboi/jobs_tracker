import React from 'react'
import PageHeader from '../components/PageHeader'
import '../styles/pages/Profile.css'
import profile from '../assets/pik.jpg'
import icons from '../assets/icons'

function Profile() {
    return (
        <div className='pageContainer'>
            <PageHeader pageTitle="Profile" />
            <div className="profileContainer">
                <div className="profileBar">
                    <img src={profile} alt="profile" />
                    <div className="userBasicInfo regularTxt">
                        <p className="mdTxt">Jangiti Naveen</p>
                        <p>Senior Frontend Developer</p>
                        <p>{<icons.location/>}Telangan, India</p>
                    </div>
                </div>
                <div className="userDetails contacts">
                    <div className="udBox regularTxt">
                        <p className="sectionHeading">Contact Information</p>
                        <p className="">naveenjangiti9@gmail.com</p>
                        <p className="">9110346500</p>
                    </div>
                    <div className="udBox regularTxt">
                        <p className="sectionHeading">Contact Information</p>
                        <p className="">naveenjangiti9@gmail.com</p>
                        <p className="">9110346500</p>
                        <p className="">9110346500</p>
                    </div>
                </div>
                <div className="userDetails userSkills regularTxt">
                    <p className="sectionHeading">Skills</p>
                    <div className="skills">
                        <p className='skillCell'>Javascript</p>
                        <p className='skillCell'>Javascript</p>
                        <p className='skillCell'>Javascript</p>
                        <p className='skillCell'>Javascript</p>
                    </div>
                </div>
                <div className="userSkills regularTxt">
                    <p className="sectionHeading">Education</p>
                    <div className="udBox regularTxt">
                        <p className="">B Tech Mechanical Engineering</p>
                        <p className="">Nitc, Kerala</p>
                        <p className="">2021-25</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile