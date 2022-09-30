import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';
import ArrowIcon from '../../assets/img/polygon.svg'
import TravelerIcon from '../../assets/img/traveler.svg'
import cn from 'classnames';

const Button = ({ appearance, arrow = 'none', traveler_suitcase = 'none', children, className }) => {

    const [buttonStyle, setButtonStyle] = useState()

    useEffect(() => {if(appearance) {
        switch (appearance) {
          case 'primary':
              setButtonStyle(styles.primary)
          case 'button_ghost':
              setButtonStyle(styles.button_ghost)
          case 'ghost':
              setButtonStyle(styles.ghost)
          case 'header_button':
              setButtonStyle(styles.header_button)
          case 'header_button_travel':
              setButtonStyle(styles.header_button_travel)
          case 'header_button_support':
              setButtonStyle(styles.header_button_support)
          case 'header_button_country':
              setButtonStyle(styles.header_button_country)
          case 'header_button_currency':
              setButtonStyle(styles.header_button_currency)
          case 'header_button_liked':
              setButtonStyle(styles.header_button_liked)
          case 'header_button_enter':
              setButtonStyle(styles.header_button_enter)

          default:
        }
    }}, [appearance])

    return (
      <button className={buttonStyle}>
        {traveler_suitcase !== 'none' && (
          <span
            className={`${traveler_suitcase === 'true' ? styles.down : ''}`
            }
          >
            <TravelerIcon />
          </span>
        )}
        {children}
        {arrow !== 'none' && (
          <span
            className={`${arrow === 'down' ? styles.down : ''}`}
          >
            <ArrowIcon className={styles.arr} />
          </span>
        )}
      </button>
    )
}

export default Button