import React from 'react'
import c from './SignUp.module.scss'
import x from '../../../images/X.svg'


const SignUp = ({setModalState, setSignInView}) => {
  return (
     <div className={c.modal}>
       <div className={c.background} onClick={()=> setModalState(false)}></div>
       <div className={c.modal_block}>
         <img className={c.x} src={x} alt="x" onClick={()=> setModalState(false)}/>
         <div className={c.change_btns}>
           <p onClick={()=> {
             setModalState(false)
             setSignInView(true)
             }}>Вход</p>
           <p className={c.signUp_btn}>Регистрация</p>
         </div>
         <input type="email" placeholder='Email' />
         <input type='password' placeholder='Пароль' />
         <input type='password' placeholder='Подтверждение пароля' />
         <button>Отправить</button>
       </div>
     </div>
  )
}

export default SignUp
