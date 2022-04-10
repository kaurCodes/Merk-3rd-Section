import React from 'react'
import { ShootingStar } from './assets/svg'
import { Footer } from './components'
import { Article, Project, Review, Team, WhyUs, Community, Contact } from './containers'
import './ThirdSection.scss'

function ThirdSection() {
  return (
    <div className="thirdSection">
      <div className="shooting-star star-1">
        <ShootingStar/>
      </div>
        <Article/>
        <Team/>
        <Project/>
        <div className="shooting-star star-2">
        <ShootingStar/>
      </div>
        <Community/>
        
        <WhyUs/>
        <Review/>
        <div className="shooting-star star-3">
        <ShootingStar/>
      </div>
        <Contact/>
        <Footer/>
    </div>

  )
}

export default ThirdSection