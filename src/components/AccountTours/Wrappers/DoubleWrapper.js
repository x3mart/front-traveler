import React from 'react'

const DoubleWrapper = ({ children, ratio='1-2', comment, full, tour, undertext = false }) => {
  return (

    <div className='tour-input-wrapper'>
      <div className={`double-input-input ratio-${ratio} ${full ? 'full' : ''}`}>
        {children &&
          children.map((el, index) => (
            <div key={index} className='double-input-item'>
              {undertext
                ?
                ''
                :
                <div
                className='input-label'>
                {`${el.props.label} ${tour && tour.required_fields && tour.required_fields.includes(el.props.name) ? '*' : ''}`}
              </div>}
              {el}
            </div>
          ))}
      </div>
      <div className='tour-input-comment'>
        <div className="tour-input-comment-content">
          {comment}
        </div>
      </div>

    </div>
  )
}

export default DoubleWrapper
