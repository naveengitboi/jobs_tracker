import React, { useState } from 'react'
import InputTxt from '../../components/InputTxt'
import icons from '../../assets/icons'
import Button from '../../components/Button';
import "../../styles/homepage/Register.css"
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import ToastPortal from '../../components/ToastPortal';


function Login() {
    const [loginUserData, setLoginUserData] = useState({});

    const [userActions, setUserActions] = useState({
        showPassword: false
    })

    const passwordHideShow = () => {
        setUserActions(prev => ({
            ...prev,
            showPassword: !prev.showPassword
        }))
    }


    let dummy = "125406"

    ///send to backend
    const loginUserHandler = () => {

        if (loginUserData["username"]) {
            const isEmail = loginUserData["username"].split("@").length;
            if (isEmail >= 2) {
                Object.defineProperty(loginUserData, "email", Object.getOwnPropertyDescriptor(loginUserData, "username"));
                delete loginUserData["username"];
            } else {
                if (loginUserData["email"]) {
                    delete loginUserData["email"];
                }
            }
        }
        toast(ToastPortal, {
            data:{

            },
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        console.log(loginUserData);


    }

    return (
        <div className='registerWrapper'>
            <ToastContainer position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                 />
            <div className="registerInner">
                <InputTxt actions={
                    {
                        svg: icons.general.mail,
                        label: "username/email",
                        placeholder: "naveen_02",
                        type: "text",
                        setValue: setLoginUserData,
                        name: "username",
                    }
                } />
                <div className="passwordContainer">
                    <InputTxt actions={
                        {
                            svg: userActions.showPassword ? icons.general.eyeOpened : icons.general.eyeClosed,
                            label: "password",
                            placeholder: "-------",
                            type: userActions.showPassword ? "text" : "password",
                            setValue: setLoginUserData,
                            name: "password",
                            toRight: true
                        }
                    } svgClickHandler={passwordHideShow} />
                    <NavLink to="/profile/forgotpassword"> Forgot Password</NavLink>

                </div>
                <div className={userActions.emailVerified && userActions.phoneVerified ? "registerButton" : "failRegisterButton"}>
                    <Button label="Login"
                        containsSvg={false}
                        clickHandler={loginUserHandler} />
                </div>


            </div>
        </div>
    )
}

export default Login