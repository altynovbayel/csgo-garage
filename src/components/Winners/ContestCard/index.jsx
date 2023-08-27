import React from 'react'
import c from './ContestCard.module.scss'
import image from '../../../images/contest-weapon.png'
const ContestCard = () => {
  return (
    <div className={c.card}>
      <div className={c.time}>
        <p>еженедельная раздача</p>
        <div className={c.time_info}>
          <div className={c.day}>
            <div>
              00
            </div>
            <span>дней</span>
          </div>
          <div className={c.hour}>
            <div>
              11
            </div>
            <span>час</span>
          </div>
          <div className={c.min}>
            <div>
              08
            </div>
            <span>мин</span>
          </div>
          <div className={c.sec}>
            <div>
              36
            </div>
            <span>сек</span>
          </div>
        </div>
      </div>
      <div className={c.info}>
        <div className={c.price}>
          147101.23 ₽
        </div>
        <div className={c.weapon_info}>
          <p>
            AK-47
          </p>
          <p>
            Hydronic
          </p>
        </div>
        <div className={c.members}>
          <p>Участников: 16</p>
        </div>
      </div>
      <div className={c.image}>
        <img src={image} alt="" loading='lazy'/>
      </div>
    </div>
  )
}

export default ContestCard
