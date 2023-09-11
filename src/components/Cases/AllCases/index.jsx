import React from 'react'
import c from './AllCases.module.scss'
import image from '../../../images/case-img.png'
import { useNavigate } from 'react-router-dom'

const AllCases = () => {
  const navigate = useNavigate()
  return (
    <div className={c.all_cases}>
      {
        new Array(5).fill().map((_, id) => (
          <div className={c.case} key={id} onClick={() => navigate('/case/')}>
            <span></span>
            <div className={c.price}>
              <p>0 ₽</p>
            </div>
            <div className={c.image}>
              <img src={image} alt="" loading='lazy'/>
            </div>
            <div className={c.desc}>
              <p>
                Бесплатный кейс #1
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AllCases
