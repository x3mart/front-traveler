import React, { useEffect, useState } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import FileInput from '../FormFields/FileInput'
import TextEditor from '../FormFields/TextEditor'
import Button from './Button'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import { addActivity } from '../../../redux/actions/toursActions'
import {
  updateActivity,
  setActivityImage,
} from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'

const Activity = ({
  tour,
  id,
  action,
  activity,
  updateActivity,
  setActivityImage,
                    error,
}) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (activity && activity.image) {
      setLoading(false)
    }
  }, [activity])

  const handleInput = (name, value) => {
    updateActivity(id, value)
  }
  const handleImageInput = (value) => {
    setLoading(true)
    setActivityImage(value, id, tour.id)
  }

  return (
    <>
      <SingleWrapper label='Чем мы займемся в туре' comment=''>
        <TextEditor
          action={handleInput}
          name='description'
          value={activity && activity.description}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper
        label='Добавить фото'
        comment='Вы можете добавить 1 фото для каждой активности'
      >
        {!loading && (
          <FileInput
            activity_id={id}
            action={handleImageInput}
            name='image'
            type='file'
            max={1}
            value={activity && activity.image && activity.image.tmb_image}
            // options={toursTypes}
            // multiple
          />
        )}
        {loading && (
          <div>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>
        )}
      </SingleWrapper>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  error: state.tours.error,
})

export default connect(mapStateToProps, { updateActivity, setActivityImage })(
  Activity
)
