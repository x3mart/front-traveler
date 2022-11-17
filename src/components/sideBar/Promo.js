import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {getDashboard, logout, setPage} from "../../redux/actions/authActions";
import {truncateText} from "../../functions";

const Promo = ({user}) => {

  const [link, setLink] = useState('')

  useEffect(() => {
    if(user?.referral_link) {
      //if(user?.referral_link?.length > 25) {
      //  setLink(user?.referral_link)
        //truncateText(user?.referral_link, 25)
      //} else {
      setLink(user?.referral_link)
      //}
    }
  }, [user])

  const handleClick = (data) => {
    console.log(data)
    navigator.clipboard.writeText(data)
  }

  return (
    <>
      <div className='stock_block'>
        <p>ПРИГЛАСИ ДРУЗЕЙ НА TRAVELER.MARKET И ПОЛУЧИ СКИДКУ НА ЛЮБОЙ ТУР</p>
        <div className='stock_block_info'>
          <p>у вас: {user?.referrals_score} баллов</p>
          <p>1 балл = 1 RUB</p>
        </div>
        <p>
        Поделись с друзьями пригласительной ссылкой на Traveler.Market.
        Друзья получат 2 200р на бонусный счет, а вы - 1000р. за каждого, кто выполнит услвия акции.
        Условия акции можно посмотреть здесь.
        </p>
        <p>Ваша ссылка:</p>
        <div className='stock_block_info_link_block'>
          <input
            disabled={true}
            className='stock_block_info_link_block_input'
            value={link}
            type='text'
          />
          <button className='stock_block_info_link_block_button' onClick={() => handleClick(link)}>
            <span className='stock_block_info_link_block_button_tooltip'>Скопировано!</span>
          </button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { logout, setPage, getDashboard })(Promo)
