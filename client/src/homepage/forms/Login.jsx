
import React, { useState } from 'react'
import InputTxt from '../../components/InputTxt'
import icons from '../../assets/icons'
import Button from '../../components/Button';
import "../../styles/homepage/Register.css"
import { NavLink } from 'react-router-dom';


function Login() {
    const [userData, setUserData] = useState({});

    const [userActions, setUserActions] = useState({
        verifyEmailBtnClick: false,
        emailVerified: false,
        phoneVerified: false,
        phoneVerifiedBtnClick: false,
        showPassword:false
    })

    //verify email handler before adding user to db;
    const verifyEmailBtnClick = () => {
        setUserActions(prev => (
            {
                ...prev,
                verifyEmailBtnClick:true
            }
        ))
    }


    const verifyPhoneNumberBtnClick = () => {
        setUserActions(prev => (
            {
                ...prev,
                verifyPhoneNumberBtnClick : true
            }
        ))
    }

    
    const passwordHideShow = () => {
        setUserActions(prev => ({
            ...prev,
            showPassword: !prev.showPassword
        }))
    }


    let dummy = "125406"
    const emailOtpInputHanlder = (e) => {
        let txt = String(e.target.value);
        if(txt == dummy){
            setUserActions(prev => ({
                ...prev,
                emailVerified:true
            }))
        }else{
            setUserActions(prev => ({
                ...prev,
                emailVerified:false
            }))
        }
    }

    const phoneOtpInputHandler = (e) => {
        let txt = String(e.target.value)
        if(txt == dummy){
            setUserActions(prev => (
                {
                    ...prev,
                    phoneVerified:true
                }
            ))
        }else{
            setUserActions(prev => ({
                ...prev, 
                phoneVerified:false
            }))
        }
    }

    ///send to backend
    const registerUserHandler = () => {

    }

    return (
        <div className='registerWrapper'>
            <div className="registerInner">
                <InputTxt actions={
                    {
                        svg: icons.general.mail,
                        label: "username/email",
                        placeholder: "naveen_02",
                        type: "text",
                        setValue: setUserData,
                        name: "username", 
                    }
                }  />
                <div className="passwordContainer">
                    <InputTxt actions={
                        {
                            svg: userActions.showPassword ? icons.general.eyeOpened: icons.general.eyeClosed,
                            label: "password",
                            placeholder: "-------",
                            type: userActions.showPassword ? "text" : "password",
                            setValue: setUserData,
                            name: "password",
                            toRight: true
                        }
                    } svgClickHandler={passwordHideShow} />
                    <NavLink to="/profile/forgotpassword"> Forgot Password</NavLink>

                </div>
                <div className={userActions.emailVerified && userActions.phoneVerified ? "registerButton" : "failRegisterButton"}>
                     <Button label="Register"
                            containsSvg={false}
                            clickHandler={registerUserHandler} />
                </div>


            </div>
        </div>
    )
}

export default Login