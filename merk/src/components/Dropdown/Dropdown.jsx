import React, { useState } from 'react'
import { ChevronDown } from '../../assets/svg'
import './Dropdown.scss'
export const Dropdown = () => {
  
  const options = ["Technology","UI/UX","Blockchain"]
  const [optionActive, setOptionActive] = useState(options[0])
  return (
    <div className='dropdown'>
      <div className="dropdown-active">{optionActive} <ChevronDown/> </div>
      <div className="dropdown-options">
        {options.map((option)=>{ option!==optionActive && 
          (
            <div className="dropdown-option" onClick={()=>{setOptionActive({option})}}>
              {option}
            </div>
          ) 
        })}
      </div>
    </div>
  )
}
