import React from 'react'
import PageHeader from '../components/PageHeader'
import '../styles/pages/Sites.css'
import SiteCard from '../components/SiteCard'
import icons from '../assets/icons'

function getShortWord(sentence){
    const words = sentence.split(' ');
    let output="";
    if(words.length >= 2){
        for(let i = 0; i<2;i++){
            output += words[i][0];
        }
    }else{
        output = words[0][0]+words[0][1];
    }
    return output;
}

function LinkContainer(linkDetails){
  return(
    <div className="linkWrapper">
      <p className="popUpBubble nanoTxt">Full Name</p>
      <a href="#" className='lgTxt'>{getShortWord('Full Name')}</a>
    </div>
  )
}

function Sites() {
  return (
    <div className="pageContainer">
      <PageHeader pageTitle="Useful Sites" isBtn={false} actions={{to:'/', svg: icons.general.calender, label:'Go Home'}}  />
      <div className="sitesWrapper">
        <div className="sitesContainer">
          <div className="sbox effect linksFrame">
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <LinkContainer/>
              <span className="addNewLink">{<icons.general.add/>}</span>
          </div>
          <div className="smlBoxWrapper">

            <div className="effect smlBox siteCardWrapper">
              <SiteCard getShortWord={getShortWord} cardTitle="Courses"/>
            </div>
            <div className="effect smlBox siteCardWrapper"></div>
            <div className="effect smlBox siteCardWrapper"></div>
            <div className="effect smlBox siteCardWrapper"></div>
          </div>
          <div className="smlBoxWrapper">

            <div className="effect smlBox"></div>
            <div className="effect smlBox"></div>
            <div className="effect smlBox"></div>
            <div className="effect smlBox"></div>
          </div>
          <div className="sbox effect b"></div>

        </div>
      </div>
    </div>
  )
}

export default Sites