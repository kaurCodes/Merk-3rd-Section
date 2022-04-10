import React from 'react'
import './Button.scss'
import ButtonBG  from '../../assets/png/button_bg.png'

export const Button = (props) => {
  return (
    <a href={props.url} className='button'>
      <img src={ButtonBG} alt="" />
      <h6 className='button_title'>{props.title}</h6>
    </a>
  )
}

Button.defaultProps={
  title:"Explore More",
  url:""
}
