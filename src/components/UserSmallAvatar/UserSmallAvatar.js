import React, { useMemo } from 'react'
import { connect } from "react-redux"

const UserSmallAvatar = ({user}) => {

    const getLetter = user => {
        if (user && user.avatar) {
          return (
            <div
              style={{
                width: 40,
                height: 40,
                backgroundImage: `url('${user && user.avatar}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '50%',
              }}
            />
          )
        } else if (user && user.first_name) {
          return user.first_name[0]
        } else if (user && user.email) {
          return user.email[0]
        } else {
          return ''
        }
    }
    
    const letter = useMemo(() => getLetter(user), [user])

    return letter
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(UserSmallAvatar)