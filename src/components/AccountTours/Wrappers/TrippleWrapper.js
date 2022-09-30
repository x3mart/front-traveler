import React from 'react'

const TrippleWrapper = ({ children, ratio }) => {
  return (
    <div className={`tripple-wrapper ratio-${ratio}`}>
      <div className={`children-wrapper ratio-${ratio}`}>
        {children &&
          children.map((el, index) => (
            <div key={index} className='tripple-wrapper-item'>
              <div className='input-label'>{el.props.label}</div>
              {el}
            </div>
          ))}
      </div>
    </div>
  )
}

export default TrippleWrapper
