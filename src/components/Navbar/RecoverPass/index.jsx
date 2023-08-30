import React from 'react'
import c from './RecoverPass.module.scss'
import x from '../../../images/X.svg'

const RecoverPass = ({setModalState}) => {
  return (
    <div className={c.modal}>
      <div className={c.background} onClick={()=> setModalState(false)}></div>
      <div className={c.modal_block}>
        <img className={c.x} src={x} alt="x" onClick={()=> setModalState(false)}/>
        <div className={c.change_btns}>
          <h2 className={c.signUp_btn}>Восстановление пароля</h2>
          <p>Укажите адрес электронной почты</p>
        </div>
        <input type="email" placeholder='Email' />
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default RecoverPass
