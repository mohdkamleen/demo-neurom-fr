import React from 'react'
import "./index.css"
import { FaBars } from 'react-icons/fa6'
import { Segmented } from 'antd'
import { CgBell } from 'react-icons/cg'

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <FaBars style={{fontSize:"17px"}} /> 
        <div>
          <Segmented 
          style={{borderRadius:"20px",fontSize:"13px"}}
          selected="7d"
           options={["7d","14d","30d"]} />
           <CgBell style={{fontSize:"21px"}} />
        </div>
      </div>
    </>
  )
}

export default Header