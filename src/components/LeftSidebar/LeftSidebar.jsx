import React from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets'
const LeftSidebar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="Logo" />
          <div className="menu">
            <img src={assets.menu_icon}  alt="Menu" />
            <div className="sub-menu">
              <p>Edit profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} className="ls-search-icon" alt="Search" />
          <input type="text" placeholder='Search here...' className='ls-search-input' />
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item, index)=>(
          <div key={index} className="friends">
            <img src={assets.profile_img}  alt="Logo" />
            <div>
              <p>Richard Sanford</p>
              <span>Hello, how are you?</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSidebar