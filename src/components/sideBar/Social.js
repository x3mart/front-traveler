import React from 'react'
import Fb from '../../assets/img/fb.png'
import Fi from '../../assets/img/fi.png'
import Vk from '../../assets/img/vk.png'
import Vi from '../../assets/img/vi.png'
import Inst from '../../assets/img/ins.png'
import Ii from '../../assets/img/ii.png'

const Social = () => {
  return (
    <>
      <div className='social_block'>
        <div className='social_block_head'>
          <h3>Социальные сети</h3>
          <h4>
            В сообществе Traveler.market открытость и прозрачность имеют большое
            значение. Повысьте доверие пользователей к себе – привяжите ваши
            аккаунты социальных сетей к профилю YouTravel.me. Мы обязуемся не
            раскрывать ваши контакты.
          </h4>
        </div>
        <div className='social_block_item'>
          <div className='social_block_item_icon'>
            <img src={Fb} alt='fb' />
            <img className='fi' src={Fi} alt='fi' />
          </div>
          <div className='social_block_item_text'>
            <h3>Facebook</h3>
            <h4>Подключить</h4>
          </div>
        </div>
        <div className='social_block_item'>
          <div className='social_block_item_icon'>
            <img src={Vk} alt='vk' />
            <img className='vi' src={Vi} alt='vi' />
          </div>
          <div className='social_block_item_text'>
            <h3>Vkontakte</h3>
            <h4>Подключить</h4>
          </div>
        </div>
        <div className='social_block_item'>
          <div className='social_block_item_icon'>
            <img src={Inst} alt='inst' />
            <img className='ii' src={Ii} alt='inst' />
          </div>
          <div className='social_block_item_text'>
            <h3>Instagram</h3>
            <h4>Подключить</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Social
