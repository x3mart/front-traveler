import React, {useState, useEffect, useRef, Fragment} from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import menu from '../../../assets/img/trash.svg'
import {
  deleteDayImage,
  deletePropertyImage,
  deleteTourImage,
  deleteTourWallpaper,
  setDayImage,
  setPropertyImage,
  setTourImages,
} from "../../../redux/actions/toursActions";
import {delete_avatar} from "../../../redux/actions/authActions";
import {connect} from "react-redux";
import PopUp from "../../PopUp/PopUp";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import {imageUploader} from "../../../functions";

const MultipleFileInput = ({
                             tour,
                             action,
                             name,
                             value = [],
                             max,
                             required,
                             position,
                             deleteTourImage,
                             setTourImages,
                             deleteTourWallpaper,
                             delete_avatar,
                             deletePropertyImage,
                             delete_action,
                             error,
                             section,
                             setPropertyImage,
                             deleteDayImage,
                             day_id,
                             setDayImage,
                           }) => {
  const [data, setData] = useState([])
  const [active, setActive] = useState(true)
  const [bubbleActive, setBubbleActive] = useState(null)
  const [preview, setPreview] = useState([])
  const [activePopUp, setActivePopUp] = useState(false)
  const [added, setAdded] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [item, setItem] = useState('')
  const [currentError, setCurrentError] = useState([])

  useEffect(() => {
    setAdded(true)
    let timer = setTimeout(() => setAdded(false), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (deleted) {
      setDeleted(false)
    }
  }, [deleted])

  useEffect(() => {
    if (added && value && value.length > 0) {
      setAdded(false)
    }
  }, [added, value])


  const inputFileRef = useRef(null)


  useEffect(() => {
    if (error && isNotEmptyObject(error) && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if (error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  // useEffect(() => {
  //   if (loading && value.length > 0) {
  //     setLoading(false)
  //   }
  // }, [value, loading])

  useEffect(() => {
    if (max) {
      if (value.length >= max) {
        setActive(false)
      }
    }
  }, [max, value])

  const handleSetItem = image => {
    setItem(image)
    setActivePopUp(true)
  }

  const handleDelete = () => {
    // setLoading(true)
    if (section === 'gallery') {
      deleteTourImage(item, tour.id)
    } else if (section === 'accommodation') {
      deletePropertyImage(item, tour.id)
    } else if (section === 'days') {
      deleteDayImage(day_id, item.id)
      action()
    }
    setActivePopUp(false)
    setDeleted(true)
  }

  const handleSetImages = (data) => {
    if (section === 'gallery') {
      setTourImages(data)
    } else if (section === 'accommodation') {
      setPropertyImage(data)
    } else if (section === 'days') {
      setDayImage(data, day_id)
      action()
    }
  }


  const onBtnClick = () => {
    inputFileRef.current.click()
  }

  const onFileChange = async (e) => {
    // setLoading(true)
    setAdded(true)
    const imageLoader = (image) => {
      imageUploader(image, tour.id, section)
        .then(r => handleSetImages(r))
    }
    if (e.target.files && e.target.files.length > 0) {
      Object.values(e.target.files).map(item => {
        imageLoader(item)
      })
      setCurrentError([])
    }
  }

  return (
    <>
      {activePopUp && <PopUp status={'danger'}
                             title={'Уверены, что хотите удалить?'}
                             text={'Картинка будет удалена навсегда.'}
                             button={'Отменить'}
                             button2={'Удалить'}
                             action={() => setActivePopUp(false)}
                             second_action={() => handleDelete(item)}/>}
      {!deleted && <div className='fake-file-input-component' id={name}>
        <input
          multiple
          name={name}
          required={required}
          // value={data}
          type='file'
          onChange={onFileChange}
          ref={inputFileRef}
          accept="image/png, image/jpeg, image/jpg"
          // accept='image/*'
        />
        <div className='fake-file-input-wrapper'>
          <div
            className={`fake-file-input file-input ${
              active ? 'file-input-active' : 'file-input-inactive'
            }`}
            onClick={onBtnClick}
          >
            <div className='camera-image'/>
            <div className='fake-file-input-text'>Добавить новое фото</div>
          </div>
          {added && (
            <div className='fake-file-input loader-spinner' onClick={onBtnClick}>
              <Box sx={{display: 'flex'}}>
                <CircularProgress/>
              </Box>
            </div>
          )}
          {currentError.length > 0 && <div className="errors-list">
            {/*{currentError}*/}
            <ul>
              {Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
                <li key={index}>{item}</li>
              ))
              }
            </ul>
          </div>}
          {name === 'day_photo' && value.length > 0 && value.map((item, index) => (
            <Fragment key={index}>
              <div
                key={index}
                className='fake-file-input image-container'
                style={{
                  backgroundImage: 'url(' + item.tmb_image + ')',
                  position: 'relative',
                }}
              >
                <div
                  className='tour-menu-dots'
                  style={{
                    padding: '5px',
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    cursor: 'pointer',
                  }}
                  onMouseOver={() => setBubbleActive(index)}
                  onMouseOut={() => setBubbleActive(null)}
                  onClick={() => handleSetItem(item)}
                >
                  <img src={menu} alt='menu'/>
                </div>

                {index === bubbleActive && (
                  <>
                    <div
                      className='tour-menu'
                      // ref={myRef}
                      style={{
                        position: 'absolute',
                        top: 20,
                        right: 40,
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                        borderRadius: 8,
                        backgroundColor: '#fff',
                      }}
                    >
                      <div
                        className='tour-item-top'
                        style={{
                          padding: 10,
                          lineHeight: '15px',
                          textAlign: 'right',
                        }}
                      >
                        Удалить
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Fragment>
          ))}
          {name !== 'day_photo' && value.length > 0 && value.map((item, index) => (
            <Fragment key={index}>
              <div
                key={index}
                className='fake-file-input image-container'
                style={{
                  backgroundImage: 'url(' + item.tmb_image + ')',
                  position: 'relative',
                }}
              >
                <div
                  className='tour-menu-dots'
                  style={{
                    padding: '5px',
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    cursor: 'pointer',
                  }}
                  onMouseOver={() => setBubbleActive(index)}
                  onMouseOut={() => setBubbleActive(null)}
                  onClick={() => handleSetItem(item)}
                >
                  <img src={menu} alt='menu'/>
                </div>

                {index === bubbleActive && (
                  <>
                    <div
                      className='tour-menu'
                      // ref={myRef}
                      style={{
                        position: 'absolute',
                        top: 20,
                        right: 40,
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                        borderRadius: 8,
                        backgroundColor: '#fff',
                      }}
                    >
                      <div
                        className='tour-item-top'
                        style={{
                          padding: 10,
                          lineHeight: '15px',
                          textAlign: 'right',
                        }}
                      >
                        Удалить
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Fragment>
          ))}
          {/*{added && (*/}
          {/*  <div className='fake-file-input loader-spinner' onClick={onBtnClick}>*/}
          {/*    <Box sx={{display: 'flex'}}>*/}
          {/*      <CircularProgress/>*/}
          {/*    </Box>*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
      </div>}
      {deleted && (
        <div className='fake-file-input loader-spinner' onClick={onBtnClick}>
          <Box sx={{display: 'flex'}}>
            <CircularProgress/>
          </Box>
        </div>
      )}
    </>
  )
}

export default connect(null, {
  deleteTourImage,
  deleteTourWallpaper,
  delete_avatar,
  deletePropertyImage,
  setTourImages,
  setPropertyImage,
  deleteDayImage,
  setDayImage,
})(MultipleFileInput)
