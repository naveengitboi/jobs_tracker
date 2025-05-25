import React, {useState} from 'react'
import PageHeader from '../components/PageHeader'
import icons from '../assets/icons'
import profile from "../assets/pik.jpg"
import InputTxt from '../components/InputTxt'

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

          <div className="epBasicInfo">
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
        </div>
      </div>
    </div>
  )
}

export default EditProfile