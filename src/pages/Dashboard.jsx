import React from 'react'
import PageHeader from '../components/PageHeader'
import DbCard from '../components/DbCard'
import '../styles/pages/Dashboard.css'


function Dashboard() {
  return (
    <div className="pageContainer">
        <PageHeader pageTitle={"Dashboard"}/>
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