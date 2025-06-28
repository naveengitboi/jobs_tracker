import React, {useState} from 'react'
import InputTxt from '../../components/InputTxt'
import icons from '../../assets/icons'
import Button from '../../components/Button';
import "../../styles/homepage/Register.css"

function ForgotPassword() {

    const [userActions, setUserActions] = useState({
        verifyEmailBtnClick: false,
        emailVerified: false,
        showPassword:false
    })
    const [updatePassword, setUpdatePassword] = useState({})

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

    ///send to backend
    const updatePasswordHandler = () => {

    }

    return (
        <div className='registerWrapper'>
            <div className="registerInner">
                <div className="userEmailContainer">
                    <InputTxt actions={
                        {
                            svg: icons.general.mail,
                            label: "Gmail",
                            placeholder: "naveenjangit9@gmail.com",
                            type: "email",
                            setValue: setUpdatePassword,
                            name: "email"
                        }
                    } />
                    <div className="userEmail">
                        <Button label="Verify Mail"
                            containsSvg={false}
                            styleName={"dashedBtn"}
                            clickHandler={verifyEmailBtnClick} />
                        {userActions.verifyEmailBtnClick && (

                            <input type="text" className={`${userActions.emailVerified ? "succeed": "danger"}`} onChange={(e) => emailOtpInputHanlder(e)} />
                        )}
                    </div>
                </div>

                <div className="passwordContainer">
                    <InputTxt actions={
                        {
                            svg: userActions.showPassword ? icons.general.eyeOpened: icons.general.eyeClosed,
                            label: "New Password",
                            placeholder: "-------",
                            type: userActions.showPassword ? "text" : "password",
                            setValue: setUpdatePassword,
                            name: "password",
                            toRight: true
                        }
                    } svgClickHandler={passwordHideShow} />

                </div>

                <div className={userActions.emailVerified && userActions.phoneVerified ? "registerButton" : "failRegisterButton"}>
                     <Button label="Update Password"
                            containsSvg={false}
                            clickHandler={updatePasswordHandler} />
                </div>


            </div>
        </div>
    )
}

export default ForgotPassword