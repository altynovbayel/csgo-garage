import React from 'react'
import c from './LInksItem.module.scss'
import icon1 from '../../../images/nav-icon-1.svg'
import {FaUser} from 'react-icons/fa'


const LinksItem = () => {
  return (
    <div className={c.links_item}>
      <img src={icon1} alt="icon" />
      <div>
        <p>
          ВКонтакте
        </p>
        <div>
          <FaUser/>
          16 900
        </div>
      </div>
    </div>
  )
}

export default LinksItem
