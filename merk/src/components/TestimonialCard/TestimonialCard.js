import React from 'react'
import { Quotes } from '../../assets/svg'
import './TestimonialCard.scss'
import John from '../../assets/png/testimonial.png'

export const TestimonialCard = (props) => {
    const test= props.testimonial
  return (
    <div className={`testimonial__card-${props.type}`}>
        <div className="testimonial-date">
            <p>{test.date} | {test.tag}</p>
        </div>
        <p className='testimonial-review'><span> {props.type==="infocus"&&<Quotes/>} </span>{test.review}</p>
        <div className="testimonial-client">
            <img src={test.img} alt={test.name} />
            <h3>{test.name}</h3>
            <h5>{test.designation} of {test.company}</h5>
        </div>
    </div>
  )
}

TestimonialCard.defaultProps={
    type:"normal",
    testimonial:{name:"john smith",
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    company:"Awesomeux Technology",
    designation:"Founder",
    date:"01 FEB, 2019",
    tag:"TECHNOLOGY",
    img:John}
}