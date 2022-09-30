import React, { useState, useEffect, useRef, Fragment } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import menu from '../../../assets/img/trash.svg'
import { connect } from 'react-redux'

import {deleteActivityImage, deleteTourWallpaper} from '../../../redux/actions/toursActions'
import {delete_avatar} from '../../../redux/actions/authActions'
import {deleteTeamMemberAvatar} from "../../../redux/actions/profileActions";
import PopUp from "../../PopUp/PopUp";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";

const FileInput = ({ action, name, value, max, tour, deleteTourWallpaper, delete_avatar, required, type, deleteTeamMemberAvatar, member, error = {}, activity_id=null, deleteActivityImage }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(true)
  const [bubbleActive, setBubbleActive] = useState(false)
  const [preview, setPreview] = useState(null)
  const [activePopUp, setActivePopUp] = useState(false)
  const [currentError, setCurrentError] = useState([])
  const [added, setAdded] = useState(false)
  const [deleted, setDeleted] = useState(false)

  const inputFileRef = useRef(null)

  useEffect(() => {
    setAdded(true)
    let timer = setTimeout(() => setAdded(false), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if(deleted) {
      setDeleted(false)
    }
  }, [deleted])

  useEffect(() => {
    if(added && value && value.length > 0) {
      setAdded(false)
    }
  }, [added, value])

  useEffect(() => {
    if(isNotEmptyObject(error) && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if(error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  useEffect(() => {
    if (value) {
      if (max === 1) {
        setPreview(value)
      } else {
        if(preview) {
          let arr = preview
          arr.push(value)
          setPreview(arr)
        } else {
          let arr = []
          arr.push(value)
          setPreview(arr)
        }
      }
    }
  }, [value])

  useEffect(() => {
    if (max) {
      if (preview && preview.length >= max) {
        setActive(false)
      }
    }
  }, [max, preview])

  const handleDelete = () => {
    if (name === 'wallpaper') {
      deleteTourWallpaper(tour.id)
      setPreview(null)
      setActive(true)
    }
    if (name === 'avatar' && type !== 'team_member') {
      delete_avatar()
      setPreview(null)
      setActive(true)
    }
    if (name === 'avatar' && type === 'team_member' && member) {
      deleteTeamMemberAvatar(member.id)
      setPreview(null)
      setActive(true)
    }
    if (activity_id) {
      deleteActivityImage(activity_id)
      setPreview(null)
      setActive(true)
    }
    setActivePopUp(false)
    setDeleted(true)
  }

  const onBtnClick = () => {
    inputFileRef.current.click()
  }

  const onFilechange = e => {
    setAdded(true)
    if (e.target.files[0]) {
      setCurrentError([])
      setData(e.target.files[0])
      action(e.target.files[0])
      setLoading(false)
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
                             second_action={() => handleDelete()}/>}
      {!deleted && <div className='fake-file-input-component' id={name}>
        <input
          required={required}
          name={name}
          // value={data}
          type='file'
          onChange={onFilechange}
          ref={inputFileRef}
          accept="image/png, image/jpeg, image/jpg"
          // accept='image/*'
        />
        <div className='fake-file-input-wrapper'>
          <div
            className={`fake-file-input file-input ${
              active ? 'file-input-active' : 'file-input-inactive'
            } ${Array.isArray(currentError) && currentError.length > 0 ? 'error' : 'ok'}`}
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
          {max !== 1 &&
            preview && preview.map((item, index) => (
              <Fragment key={index}>
                <div
                  key={index}
                  className='fake-file-input image-container'
                  style={{
                    backgroundImage: 'url(' + item + ')',
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
                    onMouseOver={() => setBubbleActive(true)}
                    onMouseOut={() => setBubbleActive(false)}
                    onClick={() => setActivePopUp(true)}
                  >
                    <img src={menu} alt='menu'/>
                  </div>

                  {bubbleActive && (
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
          {max === 1 && preview && (
            // <div
            //   className='fake-file-input image-container'
            //   style={{
            //     backgroundImage: 'url(' + preview + ')',
            //   }}
            // />
            <div
              className='fake-file-input image-container'
              style={{
                backgroundImage: 'url(' + preview + ')',
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
                onMouseOver={() => setBubbleActive(true)}
                onMouseOut={() => setBubbleActive(false)}
                onClick={() => setActivePopUp(true)}
              >
                <img src={menu} alt='menu'/>
              </div>
              {bubbleActive && (
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
          )}

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

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, { deleteTourWallpaper, delete_avatar, deleteTeamMemberAvatar, deleteActivityImage })(FileInput)
