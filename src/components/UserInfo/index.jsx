import React from 'react'
import c from './UserInfo.module.scss'
import userPhoto from '../../images/user-photo.jpg'
import {BiBriefcase} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {SlSocialSteam} from 'react-icons/sl'


const UserInfo = () => {
  return (
    <div className={c.info}>
      <div className={c.user_img}>
        <img src={userPhoto} alt="user_img" />
      </div>
      <div className={c.user_name}>
        <h1>ИмяЮзера</h1>
        <span>ID #660990</span>
      </div>
      <div className={c.user_cases}>
        <div className={c.icon}>
          <BiBriefcase/>
        </div>
        <div className={c.cases_info}>
          <p>Кейсы</p>
          <h2>950</h2>
        </div>
      </div>
      <div className={c.user_active}>
        <div className={c.icon}>
          <AiOutlineUser/>
        </div>
        <div>
          <p>На сайте</p>
          <h2>3 дня</h2>
        </div>
      </div>
      <div className={c.user_steam}>
        <div className={c.icon}>
          <SlSocialSteam/>
        </div>
        <div>
          <p>Профиль в</p>
          <h2>Steam</h2>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
