import React from 'react'
import { TestimonialCard } from '../../components/TestimonialCard/TestimonialCard'
import './Review.scss'
export const Review = () => {
  return (
    <div className='review'>
      <h1>Our Client Review</h1>
      <p className='review-headline'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
     <div className="reviews">
     <TestimonialCard/>
     <TestimonialCard type="infocus"/>
     <TestimonialCard/>
     </div>
      
    </div>
  )
}
