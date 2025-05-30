import React from 'react'
import { useParams } from "react-router-dom";
import icons from '../assets/icons';
import { getShortWord } from '../utils/helper';
import { job_sites } from "../utils/data"

function LinkContainer({linkDetails}) {
    return (
        <a href={linkDetails.site_url} target='_blank'  className="linkWrapper">
            <p className="popUpBubble nanoTxt">{linkDetails["site_name"]}</p>
            <p className='lgTxt'>{getShortWord(linkDetails["site_name"])}</p>
        </a>
    )
}

function SitesDisplay() {
    const { category = "jobs" } = useParams();
    return (
        <div className="sbox effect linksFrame">
            {
                job_sites.filter((site, idx) => {
                    return site.category.toLowerCase() == category.toLowerCase();
                })[0]["external_links"]
                    .map((cat_site, idx) => {
                        return (
                            <LinkContainer key={idx} linkDetails={cat_site} />
                        )
                    })
            }
            <span className="addNewLink">{<icons.general.add />}</span>
        </div>
    )
}

export default SitesDisplay