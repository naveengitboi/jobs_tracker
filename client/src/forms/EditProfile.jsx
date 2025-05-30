import React, {useState} from 'react'
import PageHeader from '../components/PageHeader'
import icons from '../assets/icons'
import profile from "../assets/pik.jpg"
import InputTxt from '../components/InputTxt'
import TextArea from '../components/TextArea'
import '../styles/forms/EditProfile.css'

function EditProfile() {
  const [userDetails, setUserDetails] = useState({});
  return (
    <div className="formContainer">
      <PageHeader pageTitle="Edit Profile" isBtn={false} actions={{to:'/profile', svg: icons.general.back, label:'Profile'}} />
      <div className="marginLine"></div>
      <div className="editProfileWrapper">
        <div className="epwInner">
          <div className="profileImg">
            <img src={profile} alt="" />
          </div>

          <div className="epBasicInfo epbox">
            <InputTxt actions={{
              svg:icons.general.role,
              label: "Full Name",
              placeholder: "Jangiti Naveen",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"full_name"
            }} />
          
            <InputTxt actions={{
              svg:icons.general.role,
              label: "Full Name",
              placeholder: "Jangiti Naveen",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"full_name"
            }} />
            <InputTxt actions={{
              svg:icons.general.role,
              label: "Full Name",
              placeholder: "Jangiti Naveen",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"full_name"
            }} />
          
            <InputTxt actions={{
              svg:icons.general.role,
              label: "Full Name",
              placeholder: "Jangiti Naveen",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"full_name"
            }} />
          
          </div>
          <div className="epAbout">
                    <TextArea  id=""
                    actions={{
                        placeholder:"About",
                        setValue: setUserDetails,
                        name:"about",
                    }} />
          </div>

          <div className="epEducationWrapper">
            <p className="regTxt dim">Education Summary</p>
            <div className="epEducationDetails epbox">
            <InputTxt actions={{
              svg:icons.general.role,
              label: "Degree",
              placeholder: "B Tech",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"degree"
            }} />
          
            <InputTxt actions={{
              svg:icons.general.role,
              label: "University",
              placeholder: "NIT Calicut",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"university"
            }} />
            <InputTxt actions={{
              svg:icons.general.role,
              label: "City",
              placeholder: "Kozhikode",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"university_city"
            }} />
          
            <InputTxt actions={{
              svg:icons.general.role,
              label: "State",
              placeholder: "Kerala",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"university_state"
            }} />
          
            <InputTxt actions={{
              svg:icons.general.role,
              label: "Country",
              placeholder: "India",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"university_country"
            }}/>
            <div className="graduationDetails">

            <InputTxt actions={{
              svg:icons.general.role,
              label: "Start Year",
              placeholder: "2021",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"startyear"
            }}/>
            <InputTxt actions={{
              svg:icons.general.role,
              label: "Graduation Year",
              placeholder: "2025",
              type:"text",
              setValue: setUserDetails,
              getValue: userDetails,
              name:"end_year"
            }}/>
            </div>
            <div className="educationSummary">
              <TextArea  id=""
                    actions={{
                        placeholder:"Education Summary",
                        setValue: setUserDetails,
                        name:"education_summary",
                    }} />
            </div>
            </div>
          </div>

          <div className="epSkillsWrapper">
            <p className="dim">Skill</p>
            <input type="text" />
              <ul className="epSkillsList">
                <li>
                  Javascript
                  <div className="epSkillDelete regTxt">X</div>
                </li>
                <li>
                  Javascript
                  <div className="epSkillDelete regTxt">X</div>
                </li>
              </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EditProfile