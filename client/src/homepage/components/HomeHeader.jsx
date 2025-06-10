import React from 'react'
import Button from '../../components/Button'
import { NavLink } from 'react-router-dom';

function HomeHeader() {
    const ctaClickHandler = () => {
        return;
    }
    return (
        <div className="pageCenterWrapper">
            <p className='homeMainTxt'>Your Job Hunt <br /> <span>Simplified</span> </p>
            <p className="regTxt">Empowering Job Seekers to Stay Organized, Focused, and Efficient.</p>
            <div className="ctaContainer">
                <Button
                    label="Get It For Free"
                    containsSvg={false}
                    clickHandler={ctaClickHandler}
                />
                <NavLink className="smTxt">Already Haven an Account? Log in</NavLink>
            </div>
        </div>

    )
}

export default HomeHeader