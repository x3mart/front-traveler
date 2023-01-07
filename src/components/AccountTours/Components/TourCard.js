import React, {useState, useEffect, useRef} from 'react'
import cart from '../../../assets/img/shopping-cart.svg'
import view from '../../../assets/img/view.svg'
import menu from '../../../assets/img/menu-dots.svg'
import styles from '../../../pages/Tours/Tours.module.css';
import dateFormat, {masks} from 'dateformat'
// src/components/AccountTours/Components/TourCard.js

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
  // const label = tour.published
  //   ? 'Опубликовано'
  //   : tour.on_moderation
  //     ? 'На Модерации'
  //     : tour.declined
  //       ? 'Черновик'
  //       : ''
  // const cssClass = tour.published
  //   ? 'active'
  //   : tour.on_moderation
  //     ? 'moderation'
  //     : tour.declined
  //       ? 'draft'
  //       : ''

  const myRef = useRef()

  const [active, setActive] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

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
    history.push(`/account/tours/${tour.id}/edit/main`)
  }

  const handleTourPreview = () => {
    getTour(tour.id)
    setActive(false)
    history.push(tour?.public_url)
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
            onClick={!['archive', 'on_moderation'].includes(tour?.private_statuses?.name) ? handleTourEdit : handleTourPreview}
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
              overflow: 'hidden',
            }}
          > 
          { !['archive', 'on_moderation'].includes(tour?.private_statuses?.name) &&
              <div
                className='tour-item-top'
                style={activeItem === "edit"?
                {backgroundColor: '#84BB59',
                color: '#fff',
                padding: 10,
                lineHeight: '15px',
                textAlign: 'right',
                cursor: 'pointer'} :
                {padding: 10,
                  lineHeight: '15px',
                  textAlign: 'right',
                  cursor: 'pointer'}}
                onMouseEnter={() => setActiveItem("edit")}
                onMouseOut={() => setActiveItem(null)}
                onClick={!['archive', 'on_moderation'].includes(tour?.private_statuses?.name) ? handleTourEdit : handleTourPreview}
              >
                Редактировать
              </div>
            }
            <div
              className='tour-item-top'
              style={activeItem === "copy"?
              {backgroundColor: '#84BB59',
              color: '#fff',
              padding: 10,
              lineHeight: '15px',
              textAlign: 'right',
              cursor: 'pointer'} :
              {padding: 10,
                lineHeight: '15px',
                textAlign: 'right',
                cursor: 'pointer'}}
              onMouseEnter={() => setActiveItem("copy")}
              onMouseOut={() => setActiveItem(null)}
            >
              <Modal
                onMouseSet={setActiveItem}
                tour_id={tour.id} 
                button_name='Копировать' 
                action={() => setActive(false)}/>

            </div>
            <div
              className='tour-item-bottom'
              style={
                activeItem === "delete"?
                {backgroundColor: '#84BB59',
                color: '#fff',
                padding: 10,
                lineHeight: '15px',
                textAlign: 'right',
                cursor: 'pointer'} :
                {padding: 10,
                  lineHeight: '15px',
                  textAlign: 'right',
                  cursor: 'pointer'}
              }
              onMouseEnter={() => setActiveItem("delete")}
              onMouseOut={() => setActiveItem(null)}
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
            className={`tour-label`}
            style={{
              backgroundColor: tour?.private_statuses?.display_color
            }}
          >
            {tour?.private_statuses?.display_str}
          </div>
        </div>
        <div
          className='tour-header'
          onClick={!['archive', 'on_moderation'].includes(tour?.private_statuses?.name) ? handleTourEdit : handleTourPreview}
          style={{cursor: 'pointer'}}
        >
          <div className='tour-region'>{tour?.start_destination ? tour.start_destination : ''}</div>
          <div
            className='tour-name'
            onClick={!['archive', 'on_moderation'].includes(tour?.private_statuses?.name) ? handleTourEdit : handleTourPreview}
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
            <div className='tour-footer-price'>{tour.discounted_price && <span className={styles.tour_discounted_price} style={{marginRight: '5px'}}>{tour && tour.price ? tour.price : ''}<span className='rub-sign'>{tour.currency.sign}</span></span>}
                {tour && tour.discounted_price ? tour.discounted_price : tour.price}<span className='rub-sign'>₽</span></div>
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
                {tour.views_count ? tour.views_count : '0'}
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
