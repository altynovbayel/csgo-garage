import React from 'react'
import c from './Footer.module.scss'
import logo from '../../images/logo.png'
import visa from '../../images/visa.svg'
import masterCard from '../../images/mastercard-2.svg'
import qiwi from '../../images/qiwi-logo.svg'
import wm from '../../images/webmoney.svg'


const Footer = () => {
  return (
    <div className={c.back}>
      <div className={c.footer}>
        <div className={c.container}>
          <div className={c.logo}>
            <img src={logo} alt="" loading='lazy' />
            <p>2021 - 2023 GameBuilder</p>
          </div>
          <div className={c.about_text}>
            <p>
              <span>
                Game Builder - Магазин кейсов CS:GO
              </span>
              <br />
              На нашем сайте вы можете открыть различные кейсы CS:GO по самым выгодным ценам. Все обмены проходят в автоматическом режиме с помощью торговой площади 
              <span>
                MARKET.CSGO.COM
              </span>
            </p>
          </div>
          <div className={c.policy}>
            <p>О нашем сервисе</p>
            <p>FAQ</p>
            <p>Политика конфиденциальности</p>
          </div>
          <div className={c.paying}>
            <p>Способ оплаты</p>
            <div className={c.paying_ways}>
              <img src={visa} alt="visa" />
              <img src={masterCard} alt="master" />
              <img src={qiwi} alt="wiwi" />
               <img src={wm} alt="wm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
