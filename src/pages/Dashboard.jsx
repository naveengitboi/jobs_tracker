import React from 'react'
import PageHeader from '../components/PageHeader'
import DbCard from '../components/DbCard'
import '../styles/pages/Dashboard.css'
import icons from '../assets/icons'

function Dashboard() {
  return (
    <div className="pageContainer">
        <PageHeader pageTitle={"Dashboard"} isBtn={false} actions={{to:'/new_application', svg: icons.general.add, label:'Application'}} />
        <div className="cardsContainer">
            <DbCard dbcTitle={"Total Applications"} dbcCount = {"03"}/>
            <DbCard dbcTitle={"Total Applications"} dbcCount = {"03"}/>
            <DbCard dbcTitle={"Total Applications"} dbcCount = {"03"}/>
            <DbCard dbcTitle={"Total Applications"} dbcCount = {"03"} />
        </div>
    </div>
  )
}

export default Dashboard