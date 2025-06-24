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

    
    const passwordHideShow = () => {
        setShowPassword(prev => !prev);
    }
    let dummy = "125406"
    const otpInputHanlder = (e) => {
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
                            clickHandler={verifyEmailBtnClick} />
                        {userActions.verifyEmailBtnClick && (

                            <input type="text" className={`${userActions.emailVerified ? "succeed": "danger"}`} onChange={(e) => otpInputHanlder(e)} />
                        )}
                    </div>
                </div>

                <div className="passwordContainer">
                    <InputTxt actions={
                        {
                            svg: icons.general.work,
                            label: "password",
                            placeholder: "-------",
                            type: userActions.showPassword ? "text" : "password",
                            setValue: setUserData,
                            name: "password",
                            toRight: true
                        }
                    } svgClickHandler={passwordHideShow} />
                </div>

                <div className={userActions.emailVerified ? "registerButton" : "failRegisterButton"}>
                     <Button label="Register"
                            containsSvg={false}
                            clickHandler={verifyEmailBtnClick} />
                </div>


            </div>
        </div>
    )
}

export default Register