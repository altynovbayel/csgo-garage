import React from 'react'
import c from './Case.module.scss'
import caseImg from '../../images/free-cash.png'
import { Components } from '../../components'
import { useNavigate } from 'react-router-dom'

const Case = () => {
  const navigate = useNavigate()
  const [opened, setOpened] = React.useState(false)
  return (
    <div className={c.case}>
      <div className={c.bread}>
        <p onClick={()=> navigate('/')}>
          Главная
        </p>/
        <p>Бесплатный кейс #1</p>
      </div>
      {
        opened ? <Components.OpenedCase/> : 
        <div className={c.case_open}>
          <div className={c.case_img} onClick={() => setOpened(true)}>
            <img src={caseImg} alt="case" />
          </div>
          <div className={c.case_info}>
            <h1>
              Бесплатный кейс #1
            </h1>
            <div className={c.price}>
              <h1>800₽</h1>
            </div>
            <p>Выберите количество открытий</p>
            <div className={c.open_count}>
              <div className={c.count}>
                x10
              </div>
              <div className={c.count}>
                x25
              </div>
              <div className={c.count}>
                x50
              </div>
              <div className={c.count}>
                x100
              </div>
            </div>

            <div className={c.balance_btn}>
              <p>
                Недостаточно средств
              </p>
              <button>
                Пополнение баланса
              </button>
            </div>
            <div className={c.other}>
              <h2>
                Ширп здесь вне закона!
              </h2>
              <p>
                Фарм кейсы созданы, <br /> чтобы получать только лучшее.
              </p>
              <span>
                Поэтому ширп продается автоматически!
              </span>
            </div>
          </div>
        </div>
      }
      
      <h2 className={c.case_inner_title}>Содержимое кейса</h2>
      <div className={c.case_inner}>
        {
          new Array(28).fill().map((_, id) => (
            <Components.UserSkins key={id}/>
          ))
        }
      </div>
      <Components.AboutBlock/>
    </div>
  )
}

export default Case
