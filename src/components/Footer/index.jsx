import React from 'react'
import c from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.container}>
        <div className={c.logo}>
          <img src="" alt="" loading='lazy'/>
          <p>2021 - 2023 GameBuilder</p>
        </div>
        <div className={c.about_text}>

        </div>
        <div className={c.policy}>
          <p>О нашем сервисе</p>
          <p>FAQ</p>
          <p>Политика конфиденциальности</p>
        </div>
        <div className={c.paying}>
          <p>Способ оплаты</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
