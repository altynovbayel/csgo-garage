import React from 'react'
import c from './SkinSearcher.module.scss'

const SkinSearcher = () => {
  return (
    <div className={c.searcher}>
      <div className={c.header}>
        <div className={c.block_1}>
          <h2>
            Trade-URL
          </h2>
          <p>Введите Trade-URL</p>
        </div>
        <div className={c.block_2}>
          <h2>
            Пополнение баланса 
          </h2>
          <p> 
            <span>Быстрое пополнение</span> - принимаем любые виды электронных активов и даже скины 
          </p>
        </div>
        <div className={c.block_3}>
          <h2>
            Выйгрывайте!
          </h2>
          <p>Получайте лучший дроп из кейсов на EasyDrop</p>
        </div>
      </div>
      <div className={c.searcher_input}>
        <h2>
          Найти ссылку можно <span>на сайте Steam</span>
        </h2>
        <div>
          <input type="text" />
          <button>Сохранить</button>
        </div>
        <h2>Вывод скинов доступен!</h2>
      </div>
    </div>
  )
}

export default SkinSearcher
