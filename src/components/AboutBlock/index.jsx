import React from 'react'
import c from './AboutBlock.module.scss'
import {BiBriefcase} from 'react-icons/bi'
import {AiOutlineFile} from 'react-icons/ai'
import {RiArrowUpDoubleFill} from 'react-icons/ri'

const AboutBlock = () => {
  return (
    <div className={c.about}>
      <div className={c.block}>
        <div className={c.icon}>
          <BiBriefcase/>
        </div>
        <div className={c.about_text}>
          <p>Кейсы</p>
          <h2>890 690 680</h2>
        </div>
      </div>
      <div className={c.block}>
        <div className={c.icon}>
          <AiOutlineFile/>
        </div>
        <div className={c.about_text}>
          <p>Контракты</p>
          <h2>9 690 771</h2>
        </div>
      </div>
      <div className={c.block}>
        <div className={c.icon}>
          <RiArrowUpDoubleFill/>
        </div>
        <div className={c.about_text}>
          <p>Апгрейд</p>
          <h2>38 690 990</h2>
        </div>
      </div>
      <div className={c.block}>
        <div className={c.icon}>
          <BiBriefcase/>
        </div>
        <div className={c.about_text}>
          <p>Пользователи</p>
          <h2>5 690 067</h2>
        </div>
      </div>
      <div className={c.block}>
        <div className={c.icon}>
          <BiBriefcase/>
        </div>
        <div className={c.about_text}>
          <p>Онлайн</p>
          <h2>690</h2>
        </div>
      </div>
    </div>
  )
}

export default AboutBlock
