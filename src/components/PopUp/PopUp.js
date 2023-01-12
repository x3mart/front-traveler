import React, {useEffect, useRef, useState} from "react";
import styles from './PopUp.module.css'
import ok from './ok.svg'
import close from './close.svg'
import cancel from './cancel.svg'
import Button from "../AccountTours/Components/Button";
import TextareaAutosize from "react-textarea-autosize";
import useOutsideClick from "../../hooks/useOutsideClick";
import Select from "react-dropdown-select";
import {setConfig} from "../../functions";
import axios from "axios";
import {connect} from "react-redux";
import {tourToServerUpdate} from "../../redux/actions/toursActions";

const PopUp = ({status, title, text, button, action, second_action, button2, is_saved, first_color = 'button-primary', second_color = 'button-danger', with_field = false, input_action, input_value, width, min_width, max_width='400px', close_action, new_city=null, name=null, tour}) => {

  const textareaRef = useRef()
  const popup_ref = useRef()
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] = useState([])

  useOutsideClick(popup_ref, () => close_action());

  useEffect(() => {
    async function getDestinations() {
      if (new_city && !destinations?.length) {
        const config = setConfig(!!localStorage.getItem('access'))
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/destinations/`, config)
          setDestinations(res.data)
        } catch (err) {
          console.log(err)
        }
      }
    }
    getDestinations()
  }, [new_city])

  const handleDestinationSelect = (values, valueField) => {
    setCurrentDestination(values[0])
  }

  const handleAddNew = () => {
    console.log('wowww')
    tourToServerUpdate({
      ...tour,
      [name]: {
        id: null,
        full_name: new_city,
        destination_id:currentDestination.id
      }
    }, tour.id)
    console.log('wooww2')
    new_city = null
  }

  return (
    <>
      <div className={styles.popup_wrapper}>
        <div ref={popup_ref} className={styles.popup_body} style={{minWidth:min_width, maxWidth:max_width}}>
          <img className={styles.close_icon} src={close} alt="" onClick={close_action}/>
          {status && <div className={styles.popup_icon}><img src={status === 'ok' ? ok : cancel} alt=""/></div>}
          <div className={styles.popup_title}>{title}</div>
          <div className={styles.popup_text}>{text}</div>

          {!!new_city && <Select
            required={true}
            style={{width: '325px', padding: '10px 20px', marginBottom:'20px'}}
            className={`custom-select-style ok`}
            placeholder={'Выбрать тур направление'}
            searchable={true}
            searchBy={'name'}
            clearable={true}
            multi={false}
            options={destinations}
            onChange={handleDestinationSelect}
            values={currentDestination}
            labelField={'name'}
            valueField={'id'}
            // searchFn={onSearch}
            // noDataRenderer={customNoDataRenderer}
          />}

          {with_field && <TextareaAutosize className={styles.pop_up_input} ref={textareaRef} placeholder='Причины отказа:' onChange={input_action} value={input_value} maxRows={5}/>}
          {/*{with_field && <input className={styles.pop_up_input} type="text" value={input_value} onChange={input_action}/>}*/}

          {button && <Button text={button} action={action} color={first_color} width={'100%'} margin={'0'}/>}
          {(status === 'danger' || is_saved) && <Button text={button2} action={second_action} color={second_color} width={'100%'} margin={'20px 0 0 0'}/>}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

// export  const currentDestination = 'currentDestination'
export default connect(mapStateToProps, {
  tourToServerUpdate,
}) (PopUp) 