import React from 'react'
import c from './Profile.module.scss'
import { Components } from '../../components'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import {IoIosArrowUp} from 'react-icons/io'

const Profile = () => {
  const navigate = useNavigate()
  return (
    <div className={c.profile}>
      <div className={c.back_btn}>
        <MdOutlineKeyboardArrowLeft/>
        <p onClick={() => navigate('/')}>
          Вернуться на главную страницу
        </p>
      </div>
      <div className={c.container}>
        <Components.UserInfo/>
        <Components.SkinSearcher/>
        <div className={c.filter}>
          <div className={c.filter_type}>
            <div className={c.type}>
              Дропы
            </div>
            <div className={c.type}>
              Кейсы
            </div>
            <div className={c.type}>
              Ежедневные бонусы
            </div>
          </div>
          <div className={c.sell_btn}>
            <button>
              Продать все
            </button>
          </div>
          <div className={c.filter_price}>
            <div className={c.price}>
              0-9₽
            </div>
            <div className={c.price}>
              10-49₽
            </div>
            <div className={c.price}>
              50-99₽
            </div>
            <div className={c.price}>
              100-999₽
            </div>
            <div className={c.price}>
              1000+₽
            </div>
          </div>
        </div>
      </div>
      <div className={c.skins}>
        {
          new Array(14).fill().map((_, id) => (
            <Components.UserSkins key={id}/>
          ))
        }
        
      </div>
      <div className={c.arrow_top}>
        <div className={c.icon}>
          <IoIosArrowUp/>
        </div>
      </div>
    </div>
  )
}

export default Profile
