import React from 'react'
import { Dropdown, ProjectCard } from '../../components'
import './Project.scss'
export const Project = () => {
  return (
    <div className='project__section'>
      <div className="project__section-header">
        <div className="project__section-header-left">
          <p>PROJECTS</p>
          <h1>We have completed many amazing projects that you will not believe</h1>
        </div>
        <Dropdown/>
      </div>
      <div className="project__section-divider"></div>
      <div className="project__section-collection">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard title="The Mobile App Landing Page" headline="A landing page for mobile app" type="mobile"/>
      </div>
    </div>
  )
}
