import React from 'react'
import { Button } from '../Button/Button'
import './ProjectCard.scss'
export const ProjectCard = (props) => {
    return (
        <div className='project__card'>
            <div className="project__card-mockup">
                <div className="mockup-headline-1"></div>
                <div className="mockup-headline-2"></div>
                <div className={`mockup-device-${props.type}`}></div>
            </div>
            <h1>{props.title}</h1>
            <h2>{props.headline}</h2>
            <Button url={props.url}/>
        </div>
    )
}

ProjectCard.defaultProps = {
    type: "desktop",
    title: "The Desktop App Landing Page",
    headline: "A landing page for desktop app",
    url: ""
}
