import tg from '../images/nav-icon-2.svg'
import ig from '../images/nav-icon-3.svg'
import vk from '../images/nav-icon-1.svg'
import weapon from '../images/weapon.png'
import { Pages } from '../pages'



export const ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Main/>,
  },
  {
    id:2,
    route: '/profile/',
    page: <Pages.Profile/>,
  }
]

export const navLinks = [
  {
    id:1,
    icon: vk,
    title: 'ВКонтакте',
    desc: '16 900',
  },
  {
    id:2,
    icon: ig,
    title: 'Instagram',
    desc: '16 900',
  },
  {
    id:3,
    icon: tg,
    title: 'Telegram',
    desc: '16 900',
  }
]

const WeaponCardList = [
  {
    id:1,
    image: weapon,
    circle: '#3294BC',
    background: ''
  }
]