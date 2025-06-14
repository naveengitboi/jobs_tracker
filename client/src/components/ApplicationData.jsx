import React from 'react'
import AppDetailsCard from './AppDetailsCard';

const cardsData = [
  {
    heading:"Job Type",
    isLink: false,
    content: "FTE"
  },
  {
    heading:"Job Type",
    isLink: false,
    content: "Yet to be"
  },
  {
    heading:"Job Type",
    isLink: true,
    url: "https://google.com",
    content: "Linked In"
  },
  {
    heading:"Application Date",
    isLink: false,
    url: "https://google.com",
    content: "22-12-2025"
  },

]

function ApplicationData({application}) {
  const deleteHandler = () => {

  }
  return (
    <>
      <div className="adCardsHeader">
        {
          cardsData.map((card) => {
            return (
              <AppDetailsCard card={card} />
            )
          })
        }
      </div>
      <div className='adDescriptionContainer'>
        <div className="adDescription">
          <p className='smTxt'>Description</p>
          <p className="regularTxt">{application.job_description}</p>
        </div>

          <div className="adLinks">
            <div className="leftLinks">
            {
              application.more_urls.length > 0? application.more_urls.map((url, idx) => {
                return (
                <a href={url.url} target='_blank' className='dashedBtn'>{url.url_name}</a>
                )
              }) : (
                <p className='dim nanoTxt'>No Links</p>
              )
            }
            </div>
            <div className="rightLinks">
              <button className='dashedBtn succeed'>Update</button>
              <button className='dashedBtn danger' onClick={deleteHandler}>Delete</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default ApplicationData