import React, {useRef, useState} from 'react';
import styles from './MainNav.module.css'
import {connect} from 'react-redux';
import arrow from './img/arrow_down.svg'
import {Link} from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

const NavItem = ({language, data, index, active, action, page }) => {

  const [activeItem, setActiveItem] = useState(null)

  const nav_ref = useRef()

  useOutsideClick(nav_ref, () => action());

  return (
    <>
      <div className={styles.main_nav_item_wrapper}>
        <div className={`${styles.main_nav_item} ${active ? styles.active : ''}`} onClick={() => action(index)}>
          {data?.title}
          <img src={arrow} alt=""/>
        </div>
        {active && (
          <div ref={nav_ref} className={`${styles.secondary_nav}`} >
            {data?.submenu?.map((item, i) => (
              <Link
                className={`${page === `${item.url}` || activeItem === i ? styles.active_menu : ''}`}
                key={i}
                to={`${item.url}`}
                onMouseEnter={() => setActiveItem(i)}
                onMouseOut={() => setActiveItem(null)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  language: state.languages.language
})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavItem)