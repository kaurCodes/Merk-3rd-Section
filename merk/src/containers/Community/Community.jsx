import React from 'react'
import { CodeSnippet } from '../../assets/svg'
import { Button } from '../../components/Button/Button'
import './Community.scss'
export const Community = () => {
  return (
    <div className='community_container'>
      <div className="community-headline">
        <div className="divider"></div>
        <h1>Join Now</h1>
      </div>
      <div className="community">
        <div className="community-info">
            <h1>BE A PART OF OUR HAPPY COMMUNITY</h1>
            <p>We take immense pride in our achievements and have a happy and satisfied community that trusts our work wholeheartedly. Then what are you waiting for ,come and be a part of the merklabs family, because we are here always for you.</p>
            <Button/>
        </div>
        <div className="community-code-snippets">
          <div className="code-options">
            <p>Node</p>
            <p>Java</p>
            <p>Curl</p>
          </div>
          <div className="code-snippet">
            <CodeSnippet/>
          </div>
        </div>
      </div>

    </div>
  )
}
