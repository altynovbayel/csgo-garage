import React from 'react'
import c from './LInksItem.module.scss'
import {FaUser} from 'react-icons/fa'


const LinksItem = ({title, icon, desc}) => {
  return (
    <div className={c.links_item}>
      <img src={icon} alt="icon" />
      <div>
        <p>
          {title}
        </p>
        <div>
          <FaUser/>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default LinksItem
