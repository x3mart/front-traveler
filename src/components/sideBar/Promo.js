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
          Отправьте друзьям электронное письмо (сообщение в мессенджер) с
          приглашением на Traveler.market.me или поделитесь пригласительной
          ссылкой в социальных сетях. Друзья получат скидку до 2 200р. на первое
          бронирование, а вы — 1 000р. за каждого, кто совершит поездку по
          условиям акции. Доступный бонус появится на странице оплаты. Подробнее
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
