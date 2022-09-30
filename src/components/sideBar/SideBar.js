import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Promo from './Promo'
import Social from './Social'
import {connect} from "react-redux";

const SideBar = ({ status, menu_item, secondary_item, tour_id }) => {
  return (
    <>
      <aside className='aside'>
        <nav className='navigation account-sidebar-menu '>
          <Nav status={status} menu_item={menu_item} secondary_item={secondary_item} tour_id={tour_id}/>
        </nav>
        <Promo />
        <Social />
      </aside>
    </>
  )
}

const mapStateToProps = state => ({
  status: state.auth.status,
})

export default connect(mapStateToProps)(SideBar)
