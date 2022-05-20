
import React, { Component } from 'react'
import './sidebarAdmin.css'
import SidebarAdminItems from './SidebarAdminItems'
import items from "../../data/sidebarAdmin.json"

export default class Menu extends Component {
    render() {
        return (
            <div className='main'>
                <div className='sidebar'>
                    { items.map((item, index) => <SidebarAdminItems key={index} item={item} />)}
                </div>
          </div>
        )
    }
}