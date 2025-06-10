import React from 'react'
import PageHeader from '../components/PageHeader'
import '../styles/pages/Profile.css'
import profile from '../assets/pik.jpg'
import icons from '../assets/icons'
import { user } from "../utils/data";

function Profile() {
    return (
        <div className='pageContainer'>
            <PageHeader pageTitle="Profile" isBtn={false} actions={{ to: '/profile/edit_profile', svg: icons.general.edit, label: 'Edit Profile' }} />
            <div className="profileContainer">
                <div className="profileBar">
                    <img src={profile} alt="profile" />
                    <div className="userBasicInfo regularTxt">
                        <p className="mdTxt">{user.basic_info.get_full_name()}</p>
                        <p>{user.basic_info.desired_role}</p>
                        <p>{<icons.user.location />} {user.basic_info.get_user_loc()}</p>
                    </div>
                </div>
                <div className="userDetails contacts">
                    <div className="udBox regularTxt">
                        <p className="sectionHeading">{<icons.user.contact />}Contact Info</p>
                        <p className="">{user.contact_info.email}</p>
                        <p className="">{user.contact_info.phone_number}</p>
                    </div>
                    <div className="udBox regularTxt linksContainer">
                        <p className="sectionHeading">{<icons.user.externalLinks />}Professional Links</p>
                        <div className="anchors">                        {
                            user.professional_connections.map((site, index) => {
                                return <a href={site.site_link} className="" target='_blank' key={index} >{site.site_name}</a>
                            })
                        }
                        </div>

                    </div>
                </div>
                <div className="userDetails userSkills regularTxt">
                    <p className="sectionHeading">
                        {<icons.user.skills />}Skills</p>
                    <div className="skills">
                        {
                            user.skills.map((skill, index) => {
                                return (
                                    <p className='skillCell'>{skill}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="userDetails regularTxt edContainer">
                    <p className="sectionHeading">{<icons.user.graduation />}Education</p>
                    <div className="edInnerContainer">
                        {
                            user.educations.map((ed, index) => {
                                return (
                                    <div className="udBox regularTxt">
                                        <p className="smTxt">{ed.type}</p>
                                        <div className="edHeader">
                                            <p>{ed.degree}</p>
                                            <p>{ed.get_date()}</p>
                                        </div>
                                        <p className="">Mechanical Engineering</p>
                                        <p className="">{ed.university}</p>
                                        <p className="">{ed.get_loc()}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="userDetails regTxt">
                    <p className="sectionHeading">
                        {<icons.user.about />}About</p>
                    <div className="regTxt">
                        {
                            user.basic_info.about
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile