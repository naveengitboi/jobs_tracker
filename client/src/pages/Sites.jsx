import React from 'react'
import PageHeader from '../components/PageHeader'
import '../styles/pages/Sites.css'
import SiteCard from '../components/SiteCard'
import icons from '../assets/icons'
import { NavLink, Outlet } from 'react-router-dom'
import { job_sites, useful_tools } from '../utils/data'


function Sites() {
  return (
    <div className="pageContainer">
      <PageHeader pageTitle="Useful Sites" isBtn={false} actions={{to:'/', svg: icons.general.calender, label:'Go Home'}}  />
      <div className="sitesWrapper">
        <div className="sitesContainer">
          <Outlet/>
          <div className="smlBoxWrapper">
            {
              job_sites.map((site,idx) => {
                return(
                <NavLink key={idx} to={site.category.toLowerCase()} className="effect smlBox siteCardWrapper">
                  <SiteCard  cardTitle={site.category}/>
                </NavLink>
                )
              })
            }
          </div>
          <div className="smlBoxWrapper">
            {
              useful_tools.map((site,idx) => {
                return(
                <NavLink key={idx} to={site.category.toLowerCase()} className="effect smlBox siteCardWrapper">
                  <SiteCard  cardTitle={site.category}/>
                </NavLink>
                )
              })
            }
          </div>
          <div className="sbox effect b"></div>

        </div>
      </div>
    </div>
  )
}

export default Sites