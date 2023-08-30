import React from 'react'
import c from './SignIn.module.scss'
import x from '../../../images/X.svg'


const SignIn = ({setModalState, setSignUpView, setRecover}) => {
  return (
     <div className={c.modal}>
      <div className={c.background} onClick={() => setModalState(false)}></div>
      <div className={c.modal_block}>
        <img className={c.x} src={x} alt="x" onClick={() => setModalState(false)}/>
        <div className={c.change_btns}>
          <p className={c.signUp_btn}>Вход</p>
          <p onClick={() => {
            setModalState(false)
            setSignUpView(true)
          }}>Регистрация</p>
        </div>
        <input 
          type="email" 
          placeholder='Email' 
        />
        <input type='password' placeholder='Пароль'/>

        <div className={c.reset_pass}>
          <p onClick={() => {
            setRecover(true)
            setModalState(false)
          }}>Забыли пароль?</p>
        </div>
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default SignIn
