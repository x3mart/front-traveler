import React, {useEffect, useState} from 'react'
import styles from './FavoriteComponent.module.css'
import {connect} from 'react-redux'
import favorite_light from './img/favorite.svg'
import favorite_dark from './img/favorite_dark.svg'
import favorite_transparent from './img/favorite_transparent.svg'
import favorite_filled_dark from './img/favorite_filled_dark.svg'
import {resetFavorite, setFavorite} from "../../redux/actions/authActions";
import {Link, Redirect} from "react-router-dom";

const FavoriteComponent = ({
                             color = 'light',
                             favorite,
                             tour_id,
                             setFavorite,
                             resetFavorite,
                             isAuthenticated,
                             language,
                           }) => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (favorite?.includes(tour_id)) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [favorite, tour_id])

  const handleClick = (e) => {
    e.preventDefault()
    if (favorite?.includes(tour_id)) {
      resetFavorite(tour_id)
    } else {
      setFavorite(tour_id)
    }
  }

  return (
    <>
      {isAuthenticated ?
        <div className={styles.favorite} onClick={handleClick}>
          <img src={active ? (color === 'light' ? favorite_light : favorite_dark) : (color === 'light' ? favorite_transparent : favorite_filled_dark)} alt=""/>
        </div>
        :
        <Link to={`/${language}/login`} className={styles.favorite}>
          <img src={active ? (color === 'light' ? favorite_light : favorite_dark) : (color === 'light' ? favorite_transparent : favorite_filled_dark)} alt=""/>
        </Link>
      }
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  isAuthenticated: state.auth.isAuthenticated,
  favorite: state.auth.favorite,
})

const mapDispatchToProps = {
  setFavorite,
  resetFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteComponent)