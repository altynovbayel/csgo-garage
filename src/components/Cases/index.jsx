import React from 'react'
import c from './Cases.module.scss'
import { Components } from '../index'
import NavButtons from './NavBtns'
import AllCases from './AllCases'

const Cases = () => {
  return (
    <div className={c.cases}>
      <button>
        Все преддожения
      </button>
      <div className={c.container}>
        <Components.Title text={'Бесплатные кейсы'}/>
        <NavButtons/>
        <AllCases/>
      </div>
      <div className={c.container}>
        <Components.Title text={'Кейсы по раритетности'}/>
        <NavButtons/>
        <AllCases/>
      </div>
      <div className={c.container}>
        <Components.Title text={'Бесплатные кейсы'}/>
        <NavButtons/>
        <AllCases/>
      </div>
    </div>
  )
}

export default Cases
