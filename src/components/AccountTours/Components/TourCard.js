import React, {useState, useEffect, useRef} from 'react'
import cart from '../../../assets/img/shopping-cart.svg'
import view from '../../../assets/img/view.svg'
import menu from '../../../assets/img/menu-dots.svg'
import dateFormat, {masks} from 'dateformat'

import {
  deleteTour,
  updateTour,
  setEditing,
  getTour,
} from '../../../redux/actions/toursActions'

import {connect} from 'react-redux'
import Modal from "./Modal";
import {useHistory} from "react-router-dom";
import PopUp from "../../PopUp/PopUp";

const TourCard = ({
                    language,
                    tour,
                    action,
                    menu_action,
                    click_action,
                    deleteTour,
                    updateTour,
                    setEditing,
                    getTour,
                  }) => {
  const history = useHistory()
  const label = tour.is_active
    ? 'Опубликовано'
    : tour.on_moderation
      ? 'На Модерации'
      : tour.is_draft
        ? 'Черновик'
        : ''
  const cssClass = tour.is_active
    ? 'active'
    : tour.on_moderation
      ? 'moderation'
      : tour.is_draft
        ? 'draft'
        : ''

  const myRef = useRef()

  const [active, setActive] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setActive(false)
    }
  }

  const handleTourEdit = () => {
    getTour(tour.id)
    setActive(false)
    history.push(`/${language}/account/tours/${tour.id}/edit/main`)
  }

  const handleTourCopy = () => {
    getTour(tour.id)
    setActive(false)
    setEditing(true)
  }

  const handleMenu = () => {
    setActive(true)
  }
  const handleDelete = () => {
    deleteTour(tour.id)
    setActivePopUp(false)
    setActive(false)
  }

  return (
    <>
      <div className='tour-card'>
        <div className='tour-image'>

          <div
            className='tour-image'
            onClick={handleTourEdit}
            style={{
              backgroundImage: 'url(' + tour.tmb_wallpaper + ')',
              cursor: 'pointer'
            }}
            // onClick={handleTourEdit}
          >

          </div>
          <div
            className='tour-menu-dots'
            style={{
              padding: '5px',
              position: 'absolute',
              top: 15,
              right: 15,
              cursor: 'pointer',
            }}
            onClick={handleMenu}
          >
            <img src={menu} alt='menu'/>
          </div>
          <div
            className='tour-menu'
            ref={myRef}
            style={{
              position: 'absolute',
              top: 20,
              right: 25,
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
              borderRadius: 8,
              backgroundColor: '#fff',
              display: active ? 'block' : 'none',
            }}
          >
            <div
              className='tour-item-top'
              style={{
                padding: 10,
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                lineHeight: '15px',
                textAlign: 'right',
                cursor: 'pointer',
              }}
              onClick={handleTourEdit}
            >
              Редактировать
            </div>
            <div
              className='tour-item-top'
              style={{
                padding: 10,
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                lineHeight: '15px',
                textAlign: 'right'
              }}
            >
              <Modal tour_id={tour.id} button_name='Копировать' action={() => setActive(false)}/>
            </div>
            <div
              className='tour-item-bottom'
              style={{
                padding: 10,
                lineHeight: '15px',
                textAlign: 'right',
                cursor: 'pointer',
              }}
              onClick={() => setActivePopUp(true)}
            >
              Удалить
            </div>
          </div>
          {activePopUp && <PopUp status={'danger'}
                                 title={'Уверены, что хотите удалить?'}
                                 text={'Информация будет удалена навсегда.'}
                                 button={'Отменить'}
                                 button2={'Удалить'}
                                 action={() => setActivePopUp(false)}
                                 second_action={handleDelete}/>}
          <div
            className={`tour-label tour-label${cssClass ? '-' + cssClass : ''}`}
          >
            {label}
          </div>
        </div>
        <div
          className='tour-header'
          onClick={handleTourEdit}
          style={{cursor: 'pointer'}}
        >
          <div className='tour-region'>{tour && tour.start_country && tour.start_country.name}</div>
          <div
            className='tour-name'
            onClick={handleTourEdit}
            // style={{ cursor: 'pointer' }}
          >
            {tour.name && (tour.name.length <= 23 ? tour.name : tour.name.substring(0, 23) + '...')}
          </div>
        </div>
        <div className='tour-footer'>
          <div className='tour-footer-left'>
            <div className='tour-footer-dates'>
              {tour.duration} дн. (с{' '}
              {dateFormat(new Date(tour.start_date), 'dd.mm.yyyy')})
            </div>
            <div className='tour-footer-price'>{tour.price} <span className='rub-sign'>₽</span></div>
          </div>
          <div className='tour-footer-right'>
            <div className='tour-footer-sold'>
              <div className='tour-footer-value'>
                {tour.sold ? tour.sold : '0'}
              </div>
              {' '}
              <img src={cart} alt='shopping-cart'/>
            </div>
            <div className='tour-footer-watched'>
              <div className='tour-footer-value'>
                {tour.watched ? tour.watched : '0'}
              </div>
              {' '}
              <img src={view} alt='view'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language
})

export default connect(mapStateToProps, {deleteTour, updateTour, setEditing, getTour})(
  TourCard
)
