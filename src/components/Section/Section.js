import React from 'react'
import styles from './Section.module.css'
import {connect} from 'react-redux'

const Section = ({children, background = 'transparent', padding = '0 0 35px 0'}) => {
  return (
    <>
      <section style={{backgroundColor: background, padding: padding}}>
        <div className='wrapper'>
          {children}
        </div>
      </section>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Section)