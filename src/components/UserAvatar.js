import React, { useState, useEffect } from 'react'


const UserAvatar = ({ user }) => {

    const [avatarLetter, setAvatarLetter] = useState('')

    useEffect(() => {
      if (user) {
        if (user.name) {
          setAvatarLetter(user.first_name[0])
        } else if (user.email) {
          setAvatarLetter(user.email[0])
        } else {
          setAvatarLetter('#')
        }
      }
    }, [user])
 
  return (
    <>
      {user && user.avatar ? (
        <div
          style={{
            width: 40,
            height: 40,
            // backgroundImage: `url('${expert.avatar}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '50%',
          }}
        />
      ) : (
        avatarLetter
      )}
    </>
  )
}

export default UserAvatar
