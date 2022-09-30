import React from 'react'

const ProfileInputWrapper = ({ children, label }) => {
  return (
    <div className='profile-input-section'>
      <div className='input-label'>{label}</div>
      <div className='profile-input-full'>
        {children}
      </div>
    </div>
  )
}

export default ProfileInputWrapper
