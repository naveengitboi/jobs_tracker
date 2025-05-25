import React from 'react'
import icons from '../assets/icons'
import '../styles/pages/Template.css'

function TemplateCard() {
  return (
    <div className='templateCard smTxt effect'>
        <div className="templateHeading">
            <div className="templateInfo">
                <p className="regTxt">Software Engineering</p>
                <p className="smTxt">cover letter</p>
            </div>
            <div className="templateLogo copy">
                {<icons.general.copy/>} 
            </div>
        </div>
        <div className="templateUpdateDetails">
            <p>Last used- 02-05-2025</p>
            <div className="templateLogo">
                <div>
                    {<icons.general.edit/>} 
                </div>
                <div>
                    {<icons.general.delete/>} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default TemplateCard