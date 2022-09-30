import React, { useEffect, useState } from 'react'
import TourCard from "./TourCard"
import { connect } from "react-redux"

import {
  getTours
} from '../../../redux/actions/toursActions'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const ToursList = ({ tours }) => {

  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(tours?.results?.length>0 && loading){
      setLoading(false)
    }
  }, [tours, loading])

  const handleAction = () => {
    setLoading(true)
  }

  return (
    <>
      <div
        className={`tours-wrapper`}
      >
        {!loading && tours &&
          tours?.length > 0 &&
          tours?.map((item, index) => <TourCard key={index} tour={item} action={handleAction} />)}
        {loading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </>
  )
}

export default ToursList