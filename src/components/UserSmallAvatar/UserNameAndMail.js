import React, { useMemo, useState } from 'react'
import { connect } from 'react-redux'

const UserNameAndMail = ({ user }) => {

  return (
    <>
      <h3>
        {user && user.first_name} {user && user.last_name}
      </h3>
      <h4>{user && user.email}</h4>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps)(UserNameAndMail)
