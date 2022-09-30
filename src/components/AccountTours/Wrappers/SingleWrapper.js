import React from 'react'

const SingleWrapper = ({children, label, comment, margin='0 30px 0 0', full, width, padding, name, tour, margin_bottom = '20px'}) => {

  return (
    <>
      <div className='single-input-label'>{`${label} ${tour && tour.required_fields && tour.required_fields.includes(name) ? '*' : ''}`}</div>
      <div className='tour-input-wrapper' style={{marginBottom: margin_bottom}}>
        <div className={`single-input-input ${full ? 'full' : ''}`} style={{margin: margin, width: width, padding: padding}}>
          {children}
        </div>
        <div className='tour-input-comment'>
          <div className="tour-input-comment-content">
            {comment}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleWrapper
