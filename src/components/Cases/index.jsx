import React from 'react'
import c from './Cases.module.scss'
import { Components } from '../index'
import NavButtons from './NavBtns'
import AllCases from './AllCases'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Cases = () => {
  return (
    <div className={c.cases}>
      <button>
        Все преддожения <MdOutlineKeyboardArrowRight/>
      </button>
      <div className={c.container_1}>
        <Components.Title text={'Бесплатные кейсы'}/>
        <NavButtons/>
        <AllCases/>
      </div>
      <div className={c.container_2}>
        <Components.Title text={'Кейсы по раритетности'}/>
        <NavButtons/>
        <AllCases/>
      </div>
      <div className={c.container_3}>
        <Components.Title text={'Бесплатные кейсы'}/>
        <NavButtons/>
        <AllCases/>
      </div>
    </div>
  )
}

export default Cases
