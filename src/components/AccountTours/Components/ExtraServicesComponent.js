import React, {useState, useEffect} from 'react'
import Button from './Button'

import CircularProgress from '@mui/material/CircularProgress'

import {connect} from 'react-redux'
import {
  updateTour,
  addExtraService,
  setSecondaryNav, removeExtraService,
} from '../../../redux/actions/toursActions'

import ExtraServiceComponent from './ExtraServiceComponent'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TabPanel({children, value, index}) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{pt: 3}}>
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

const ExtraServicesComponent = ({tour, addExtraService, removeExtraService}) => {
  const [value, setValue] = useState(0)

  const [dayData, setDayData] = useState([])
  const [days, setDays] = useState([1])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (tour && tour.tour_addetional_services == null) {
      addExtraService({id: 1, extra_text: '', extra_service_price: ''})
      setLoading(true)
    } else if (tour && tour.tour_addetional_services && tour.tour_addetional_services.length > 0) {
      setLoading(false)
      setDayData(tour.tour_addetional_services)
      let arr = []
      for (let i = 1; i <= tour.tour_addetional_services.length; i++) {
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
    if (event.target.tagName === 'DIV') {
      if (value === (days.length - 1)) {
        removeExtraService(newValue)
        setValue(value - 1)
      } else {
        removeExtraService(newValue)
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
    addExtraService({id: id, extra_text: '', extra_service_price: ''})
    setValue(id - 1)
  }

  const CloseTabButton = () => {
    return (
      <div className={'close-tab-button'}>×</div>
    )
  }

  return (
    <>
      {!loading && dayData.length > 0 && (
        <Box sx={{width: '100%'}}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
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
                  label={<span className={'tab-title-wrapper'}>{`Услуга ${item}`}<CloseTabButton/></span>}
                  // label={`Услуга ${item}`}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
          {dayData.map((item, index) => (
            <TabPanel key={index} value={value} index={index}>
              <ExtraServiceComponent id={index + 1} action={handleDayInput} day={item}/>
            </TabPanel>
          ))}
        </Box>
      )}
      {loading && (
        <div className='fake-file-input loader-spinner'>
          <Box sx={{display: 'flex'}}>
            <CircularProgress/>
          </Box>
        </div>
      )}
      <Button
        active={true}
        action={handleDayAdd}
        color='button-primary'
        text='Добавить услугу'
      />
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  updateTour,
  addExtraService,
  setSecondaryNav,
  removeExtraService,
})(ExtraServicesComponent)
