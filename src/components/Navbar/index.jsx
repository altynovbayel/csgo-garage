import React from 'react'
import c from './Navbar.module.scss'
import LinksItem from './LInksItem'
import logo from '../../images/logo.png'
import { navLinks } from '../../utils'
import {AiOutlineUser} from 'react-icons/ai'
import {LiaWalletSolid} from 'react-icons/lia'
import {MdKeyboardArrowDown} from 'react-icons/md'
import flag from '../../images/russia-flag.png'
import SignUp from './SignUp'
import SignIn from './SignIn'


const Navbar = () => {
  const [signUpView, setSignUpView] = React.useState(false)
  const [signInView, setSignInView] = React.useState(false)

  return (
    <>
      <div className={c.navbar}>
        <div className={c.container}>
          <div className={c.links}>
            {
            navLinks.map((item, id) => (
            <LinksItem key={id} {...item} />
            ))
            }
          </div>
          <div className={c.logo}>
            <img src={logo} alt="logo" loading='lazy' />
          </div>
          <div className={c.buttons}>
            <div className={c.balance}>
              <div className={c.icon}>
                <LiaWalletSolid />
              </div>
              <div className={c.balance_title}>

                <p>16 909 руб.</p>
                <span>Баланс</span>
              </div>
            </div>
            <div className={c.auth}>
              <div className={c.icon}>
                <AiOutlineUser />
              </div>
              <div className={c.balance_title}>
                <div>
                  <div 
                    className={c.logIn}
                    onClick={()=> setSignInView(true)}
                  >
                    Вход
                  </div>
                  /
                  <div 
                    className={c.signUp} 
                    onClick={()=> setSignUpView(true)}
                  >
                    Регистрация
                  </div>
                </div>
                <span>Личный кабинет</span>
              </div>
            </div>
            <div className={c.language}>
              <img src={flag} alt="flag" loading='lazy' />
              <div>
                <p>RU</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        signUpView ? <SignUp setModalState={setSignUpView} setSignInView={setSignInView}/> : null
      }
      {
        signInView ? <SignIn setModalState={setSignInView} setSignUpView={setSignUpView}/> : null
      }
    </>
  )
}

export default Navbar
