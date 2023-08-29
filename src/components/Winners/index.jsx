import React from 'react'
import c from './Winners.module.scss'
import WinnerUser from './WinnerUser'
import ContestCard from './ContestCard'
import backIMG1 from '../../images/back-img-1.png'

const Winners = () => {
  return (
    <div className={c.winners}>
      <button>Быстрый переход </button>
      <div className={c.container}>
        <div className={c.winner_users}>
          {
            new Array(3).fill().map((_, id) => (
              <WinnerUser key={id}/>
            ))
          }
        </div>
        <div className={c.contest}>
          {/* <img src={backIMG1} alt="back" loading='lazy'/> */}
          {
            new Array(2).fill().map((_, id) => (
              <ContestCard key={id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Winners
