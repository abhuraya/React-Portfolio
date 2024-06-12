import React from 'react'
import './card.css'

// creates a uniform card for all projects and populates each card with relevant information. 
export default function Card({ cardTitle, gitHubUrl, deployedUrl, image }){
    return(
        <div className="card mt-2 border-dark">
            <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
                <img className="card-img-top card-img border border-dark" src={image}></img>
            </div>
            <div className="card-body custom-div">
                <a href={gitHubUrl} className="card-link" target='_blank' rel="noopener noreferrer">Repository</a>
                <a href={deployedUrl} className="card-link" target='_blank' rel="noopener noreferrer">Deployed Application</a>
            </div>
        </div>
    )
}