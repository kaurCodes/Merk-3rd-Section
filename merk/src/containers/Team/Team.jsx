import React from 'react'
import './Team.scss'

import { Button } from '../../components/Button/Button'
import { TeamGraphic } from '../../assets/svg'

export const Team = () => {
  return (
    <div className='team'>
      <div className="team-description">
        <h5>our team</h5>
        <h1>MEET THE TEAM OF BEST  DEVELOPERS:</h1>
        <p>We have a team of skilled veteran developers who exhibit amazing efficiency in their performance. With MerkLabs, you are in safe hands.  We understand your needs and give out a performance that matches your expectations.
</p>
<Button title="Explore More"/>
      </div>
      <div className="team-graphic">
        <TeamGraphic/>
      </div>
    </div>
  )
}
