import React from 'react'
import styles from './PhoneField.module.css'
import {connect} from 'react-redux'
import InputMask from 'react-input-mask';

const PhoneField = () => {
  return (
    <>
      <InputMask mask="+4\9 99 999 99" maskChar=" " />
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneField)