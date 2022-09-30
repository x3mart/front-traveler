import React from 'react'

const ProfileInputDoubleWrapper = ({ children, label }) => {
  return (
    <div className='profile-double-input-section'>
      <div className='input-label'>{label}</div>
      <div className='profile-input-double'>
        {children}
      </div>
    </div>
  )
}

export default ProfileInputDoubleWrapper
