import React, {useRef, useState} from 'react'
import styles from './SearchPopUp.module.css'
import {connect} from 'react-redux'
import close from './img/close.svg'
import {GET_TOURS_SUCCESS} from "../../../redux/types";
import {resetFilter} from "../../../redux/actions/filterActions";
import useOutsideClick from "../../../hooks/useOutsideClick";

const SearchPopUp = ({children, title,  type, active_button, resetFilter, submit_action, reset_action}) => {

  const [active, setActive] = useState(false)

  const popup_ref = useRef()

  useOutsideClick(popup_ref, () => setActive(false));

  const handleSubmit = () => {
    setActive(false)
    submit_action()
  }

  const handleReset = () => {
    reset_action(type)
  }

  return (
    <>
      {active &&
        <div className={styles.popup_wrapper}>
          <div ref={popup_ref} className={styles.popup_card}>
            <div className={styles.popup_header}>
              <div className={styles.popup_header_title}>
                {title}
              </div>
              <img src={close} alt="close button" onClick={() => setActive(false)}/>
            </div>
            <div className={styles.popup_body}>
              {children}
            </div>
            <div className={styles.popup_footer}>
              <div
                className={styles.popup_footer_text_submit}
                onClick={handleSubmit}
              >Применить</div>
              <div
                className={styles.popup_footer_text_reset}
                onClick={handleReset}
              >Сбросить</div>
            </div>
          </div>
        </div>
      }
      <button onClick={() => setActive(true)} className={`${styles.popup_card_button} ${active_button ? styles.active : ''}`}>
        {title}
      </button>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  resetFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPopUp)