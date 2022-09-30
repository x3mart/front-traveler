import React, {useEffect, useState} from 'react'
import styles from './MainNav.module.css'
import {connect} from 'react-redux'
import NavItem from "./NavItem";
import {getMainMenu} from "../../redux/actions/toursActions";

const MainNav = ({getMainMenu, menu, page}) => {

  const [active, setActive] = useState(null)

  const handleActive = i => {
    if(i === active) {
      setActive(null)
    } else {
      setActive(i)
    }
  }

  useEffect(() => {
    getMainMenu()
  }, [])

  return (
    <>
      <div className={styles.nav_wrapper}>
        {menu.map((item, index) => <NavItem data={item} key={index} index={index} active={active === index} action={handleActive} page={page}/>)}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
    menu: state.tours.main_menu
})

const mapDispatchToProps = {
  getMainMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav)