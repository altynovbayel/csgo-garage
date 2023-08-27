import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components';

const Main = () => {
  return (
    <div className={c.main}>
      <Components.Winners/>
    </div>
  )
}

export default Main
