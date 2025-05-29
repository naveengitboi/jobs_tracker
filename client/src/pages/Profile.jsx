import React from 'react'
import PageHeader from '../components/PageHeader'
import '../styles/pages/Profile.css'
import profile from '../assets/pik.jpg'
import icons from '../assets/icons'

function Profile() {
    return (
        <div className='pageContainer'>
            <PageHeader pageTitle="Profile" isBtn={false} actions={{to:'/edit_profile', svg: icons.general.edit, label:'Edit Profile'}} />
            <div className="profileContainer">
                <div className="profileBar">
                    <img src={profile} alt="profile" />
                    <div className="userBasicInfo regularTxt">
                        <p className="mdTxt">Jangiti Naveen</p>
                        <p>Senior Frontend Developer</p>
                        <p>{<icons.user.location/>}Telangan, India</p>
                    </div>
                </div>
                <div className="userDetails contacts">
                    <div className="udBox regularTxt">
                        <p className="sectionHeading">{<icons.user.contact/>}Contact Information</p>
                        <p className="">naveenjangiti9@gmail.com</p>
                        <p className="">9110346500</p>
                    </div>
                    <div className="udBox regularTxt">
                        <p className="sectionHeading">{<icons.user.externalLinks/>}Contact Information</p>
                        <p className="">naveenjangiti9@gmail.com</p>
                        <p className="">9110346500</p>
                        <p className="">9110346500</p>
                    </div>
                </div>
                <div className="userDetails userSkills regularTxt">
                    <p className="sectionHeading">
                        {<icons.user.skills/>}Skills</p>
                    <div className="skills">
                        <p className='skillCell'>Javascript</p>
                        <p className='skillCell'>Javascript</p>
                        <p className='skillCell'>Javascript</p>
                        <p className='skillCell'>Javascript</p>
                    </div>
                </div>
                <div className="userDetails regularTxt">
                    <p className="sectionHeading">{<icons.user.graduation/>}Education</p>
                    <div className="udBox regularTxt">
                        <p className="">B Tech Mechanical Engineering</p>
                        <p className="">Nitc, Kerala</p>
                        <p className="">2021-25</p>
                    </div>
                </div>
                <div className="userDetails regTxt">
                    <p className="sectionHeading">
                        {<icons.user.about/>}About</p>
                    <div className="regTxt">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ullam nemo facere voluptatibus veniam sunt eveniet voluptas quas similique sit?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ullam nemo facere voluptatibus veniam sunt eveniet voluptas quas similique sit?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile