import React, { useState } from 'react'
import InputTxt from '../../components/InputTxt'
import icons from '../../assets/icons'
import Button from '../../components/Button';
import "../../styles/homepage/Register.css"


function Register() {
    const [userData, setUserData] = useState({});
    const [showPassword, setShowPassword] = useState(false);


    const verifyEmailHandler = () => {

    }
    const passwordHideShow = () => {
        setShowPassword(prev => !prev);
    }

    return (
        <div className='registerWrapper'>
            <div className="registerInner">
                <InputTxt actions={
                    {
                        svg: icons.general.work,
                        label: "user name",
                        placeholder: "naveen_02",
                        type: "text",
                        setValue: setUserData,
                        name: "username", 
                    }
                }  />
                <div className="userEmailContainer">
                    <InputTxt actions={
                        {
                            svg: icons.general.work,
                            label: "Gmail",
                            placeholder: "naveenjangit9@gmail.com",
                            type: "email",
                            setValue: setUserData,
                            name: "email"
                        }
                    } />
                    <div className="userEmail">
                        <Button label="Verify Mail"
                            containsSvg={false}
                            styleName={"dashedBtn"}
                            clickHandler={verifyEmailHandler} />
                        {true && (
                            <input type="text" />
                        )}
                    </div>
                </div>

                <div className="passwordContainer">
                    <InputTxt actions={
                        {
                            svg: icons.general.work,
                            label: "password",
                            placeholder: "*****",
                            type: showPassword ? "text" : "password",
                            setValue: setUserData,
                            name: "password",
                            toRight: true
                        }
                    } svgClickHandler={passwordHideShow} />
                </div>

                <div className="registerButton">
                     <Button label="Verify Mail"
                            containsSvg={false}
                            clickHandler={verifyEmailHandler} />
                </div>


            </div>
        </div>
    )
}

export default Register