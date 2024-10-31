import React from 'react'
import btnbg from '../../assets/images/button1.svg'
import { Link } from 'react-router-dom'
const Button = ({ bgcolor, children, to, target}) => {
  return (
    <React.Fragment>
       <button className={`w-[176.401px] bg-contain bg-center bg-no-repeat h-[68px] font-Ringbearer text-[#010109]`} style={{backgroundImage: `url(${btnbg})`}}>
        {
          to ? <Link to={to} target={target}>{children}</Link> : children
        }
       </button>
    </React.Fragment>
  )
}

export default Button