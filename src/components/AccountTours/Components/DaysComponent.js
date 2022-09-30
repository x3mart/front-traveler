import React, { useState, useEffect, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import CircularProgress from '@mui/material/CircularProgress'

import { connect } from 'react-redux'
import {
  updateTour,
  addDay,
  removeDay,
} from '../../../redux/actions/toursActions'

import DayComponent from './DayComponent'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PopUp from "../../PopUp/PopUp";

function TabPanel({ children, value, index }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const DaysComponent = ({ tour, addDay, removeDay }) => {

  const daysElement = useRef(null);

  const [value, setValue] = useState(0)

  const [dayData, setDayData] = useState([])
  const [days, setDays] = useState([1])
  const [loading, setLoading] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)

  useEffect(() => {
    if (scroll && daysElement.current) {
      daysElement.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start"
      });
    }
    setScroll(false)
    return () => setScroll(false)
  }, [scroll])

  useEffect(() => {
    if (tour && tour.tour_days == null) {
      addDay({ id: 1, image: [], description: '', location: '', day_title: '' })
      setLoading(true)
    } else if (tour && tour.tour_days && tour.tour_days.length > 0) {
      setLoading(false)
      setDayData(tour.tour_days)
      let arr = []
      for (let i = 1; i <= tour.tour_days.length; i++) {
        arr.push(i)
      }
      setDays(arr)
    }
  }, [tour])

  const handleDayInput = (value, id) => {
    let arr = dayData.filter(item => item.id !== id)
    arr.push(value)
    setDayData(arr)
  }

  const handleChange = (event, newValue) => {
    if(event.target.tagName === 'DIV'){
      if(value === (days.length - 1)) {
        removeDay(newValue)
        setValue(value - 1)
      } else {
        removeDay(newValue)
      }
    } else {
      setValue(newValue)
    }
  }

  useEffect(() => {
    if (days && loading) {
      setLoading(false)
    }
  }, [days, loading])

  const handleDayAdd = () => {
    setLoading(true)
    let id = days[days.length - 1] + 1
    addDay({ id: id, image: [], description: '', location: '', day_title: '' })
    setValue(id - 1)
    setScroll(true)
  }

  const CloseTabButton = () => {
    return (
      <div className={'close-tab-button'}>×</div>
    )
  }

  return (
    <>
      {activePopUp && <PopUp status={'danger'}
                             title={'Невозможное действие'}
                             text={'У тура должен быть как минимум один заполненный день.'}
                             button={'Закрыть'}
                             action={() => setActivePopUp(false)}
      />}
      {!loading && dayData.length > 0 && (
        <div ref={daysElement} id='days-element'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
                variant='scrollable'
                scrollButtons='auto'
              >
                {days.map((item, index) => (
                  <Tab
                    key={index}
                    label={<span className={'tab-title-wrapper'}>{`День ${item}`}<CloseTabButton/></span>}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
            </Box>
            {dayData.map((item, index) => (
              <TabPanel key={index} value={value} index={index}>
                <DayComponent
                  id={index + 1}
                  action={handleDayInput}
                  day={item}
                />
              </TabPanel>
            ))}
          </Box>
        </div>
      )}
      {loading && (
        <div className='fake-file-input loader-spinner'>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
      )}
      <div className="add-day-button" onClick={handleDayAdd}>
        <AnchorLink offset='100' href='#days-element'>Добавить день</AnchorLink>
      </div>
      {/*<Button*/}
      {/*  active={true}*/}
      {/*  action={handleDayAdd}*/}
      {/*  color='button-primary'*/}
      {/*  text='Добавить день'*/}
      {/*/>*/}
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  updateTour,
  addDay,
  removeDay,
})(DaysComponent)
