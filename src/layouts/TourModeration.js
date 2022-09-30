import Footer from "../wrappers/footer/Footer";
import Header from "../wrappers/header/Header";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import Modal from "../components/AccountTours/Components/Modal";
import PopUp from "../components/PopUp/PopUp";
import {getTourReview} from "../redux/actions/toursActions";
import axios from "axios";
import {setConfig} from "../functions";

const TourModeration = ({ children, page, background = 'transparent', tour_id, tour }) => {

  const [decline, setDecline] = useState('')
  const [active, setActive] = useState(false)

  const handleModal = () => {
    setActive(true)
  }

  const handleDeclineInput = (e) => {
    setDecline(e.target.value)
  }

  const handleDecline = async () => {
    const config = setConfig(!!localStorage.getItem('access'))

    const body = JSON.stringify({reason: decline})
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/decline/
`,body , config)
      window.location.replace(`${process.env.REACT_APP_API_URL}/admin/tours/moderatedtour/`)
    } catch (e) {
      console.error(e)
    }
  }

  const handleApprove = async () => {
    const config = setConfig(!!localStorage.getItem('access'))

    const body = null
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/approve/ 
`,body , config)
      window.location.replace(`${process.env.REACT_APP_API_URL}/admin/tours/moderatedtour/`)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <section>
        {active && <PopUp
          status={'danger'}
          title={'Напишите причину отказа'}
          // text={'Информация будет удалена навсегда.'}
          button={'Отправить'}
          button2={'Отменить'}
          with_field={true}
          action={handleDecline}
          input_action={handleDeclineInput}
          input_value={decline}
          second_action={() => setActive(false)}
          min_width={'500px'}
          />}
        <div className='wrapper'>
          <div className='global-h2-heading' style={{marginTop: '50px'}}>
            <h2>Просмотр тура</h2>
          </div>
          <div className='control-buttons'>
            <div className='control-buttons-set'>
            </div>
            <div className='control-buttons-set'>
              <button className='button-green' onClick={handleApprove}>
                Принять
              </button>
              <button className='button-red' onClick={handleModal}>
                Отклонить
              </button>
            </div>
          </div>
          {tour?.decline_reasons && <div className='control-buttons' style={{flexDirection: 'column'}}>
            <h2 style={{color: '#DF7070', marginBottom: '10px'}}>Отказ публикации тура!</h2>
            <h3 style={{marginBottom: '10px'}}>Причины:</h3>
            <div dangerouslySetInnerHTML={{__html: tour?.decline_reasons?.replace(/\n/g, "<br />")}}/>
          </div>}

        </div>
        <main style={{backgroundColor: background, zIndex: '0'}}>
          {children}
        </main>

        <div className='wrapper'>
          <div className='control-buttons bottom'>
            <div className='control-buttons-set'>
            </div>
            <div className='control-buttons-set'>
              <button className='button-green' onClick={handleApprove}>
                Принять
              </button>
              <button className='button-red' onClick={handleModal}>
                Отклонить
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.tour_preview,
})

const mapDispatchToProps = {getTourReview,}

export default connect(mapStateToProps, mapDispatchToProps)(TourModeration)
