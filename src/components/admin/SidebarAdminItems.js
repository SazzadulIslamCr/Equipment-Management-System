import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import './sidebarAdmin.css'
import { useState } from 'react';

export default function SidebarAdminItems({item}) {
  const [open, setOpen] = useState(false);

  if (item.childrens){
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className='sidebar-title'>
              <span>
                  {/* <Icon.Speedometer viewBox="0 0 16 20"/> */}
                  <h1 className='sidebar-name'>
                    {item.title}
                  </h1>
              </span>
              <Icon.ChevronDown className='toggle-btn' onClick={() => setOpen(!open)}/>
          </div>
          <div className='sidebar-content'>
            hellow
          </div>
      </div>
    )
  }
  else{
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className='sidebar-title'>
              <span>
                  {/* <Icon.Speedometer viewBox="0 0 16 20"/> */}
                  <Icon.Alarm/>
                  <h1 className='sidebar-name'>
                    {item.title}
                  </h1>
              </span>
          </div>
      </div>
    )
  }

  
}