import React, { useState } from 'react'
import InputTxt from '../../components/InputTxt'
import icons from '../../assets/icons'
import Button from '../../components/Button';
import "../../styles/homepage/Register.css"


function Register() {
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
                            svg: icons.general.mail,
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
                            clickHandler={verifyEmailBtnClick} />
                        {userActions.verifyEmailBtnClick && (

                            <input type="text" className={`${userActions.emailVerified ? "succeed": "danger"}`} onChange={(e) => emailOtpInputHanlder(e)} placeholder='Otp' />
                        )}
                    </div>
                </div>

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
                </div>
                <div className="phoneNumberContainer">
                     <InputTxt actions={
                        {
                            svg: icons.user.contact,
                            label: "Phone Number",
                            placeholder: "+91-9110346500",
                            type: "email",
                            setValue: setUserData,
                            name: "phone"
                        }
                    } />
                    <div className="userEmail">
                        <Button label="Verify Phone"
                            containsSvg={false}
                            styleName={"dashedBtn"}
                            clickHandler={verifyPhoneNumberBtnClick}/>
                        {userActions.verifyPhoneNumberBtnClick && (
                            <input type="text" className={`${userActions.phoneVerified ? "succeed": "danger"}`} onChange={(e) => phoneOtpInputHandler(e)} placeholder='Otp' />
                        )}
                    </div>
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

export default Register