import React from 'react'
import { WhyUsReasons } from '../../data/Reasons'
import './WhyUs.scss'
export const WhyUs = () => {

  return (
    <div className='why__us'>
      <p>WHY</p>
      <h1>WHY WE ARE THE BEST?</h1>
      <div className="why__us-reasons">
        {
          WhyUsReasons.map((r) => {
            return (
              <div className="why__us-reason">
                <div className="reason-title"> {r.title} </div>
                <div className="reason-content">{r.reason}</div>
              </div>
            )
          })


        }
      </div>
    </div>
  )
}
