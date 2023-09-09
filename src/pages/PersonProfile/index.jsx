import React from 'react'
import c from './Profile.module.scss'
import { Components } from '../../components'

const Profile = () => {
  return (
    <div className={c.profile}>
      <div className={c.container}>
        <Components.UserInfo/>
      </div>
    </div>
  )
}

export default Profile
