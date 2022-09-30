import React, {useEffect, useState} from 'react';
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import Button from "../../../components/AccountTours/Components/Button";
import Account from "../../../layouts/account/account";
import {connect} from 'react-redux'
import {update_local_user, setPage, update_user, updateCardData, updateTransactionData, clear_errors, clear_update_status} from "../../../redux/actions/authActions";
import {getCountries} from "../../../redux/actions/toursActions";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import DebetCard from "./DebetCard";
import Transaction from "./Transaction";
import PopUp from "../../../components/PopUp/PopUp";
import {isNotEmptyObject} from "../../../functions";

const data = [
  {
    id: 1,
    available: true,
    title: 'Дебетовая карта',
    subtitle: '(Валюта: RUR)',
    list: [
      'Доступна ТОЛЬКО для резидентов РФ с паспортом гражданина РФ.',
      'Необходимо пройти проверку СМЭВ для исполнения перевода через систему “Безопасная сделка”.',
      'Получайте выплату через 48 часов после оплаты клиентом.',
      'В выходные и праздничные дни обработка платежа может быть увеличена.',
      'Без дополнительных сборов.',
    ],
  },
  {
    id: 2,
    available: true,
    title: 'Банковский перевод',
    subtitle: '(Валюта: RUR)',
    list: [
      'Выплата осуществляется на расчетный счет юридического лица, зарегистрированного в Российской Федерации.',
      'Получайте выплату в течение 8 банковских дней после оплаты клиентом.',
      'В выходные и праздничные дни обработка платежа может быть увеличена.',
      'Без дополнительных сборов.',
    ],
  },
  {
    id: 3,
    available: false,
    title: 'Международная платежная система Payoneer',
    subtitle: '(Валюта: USD/EUR) ',
    // list: [
    //   'Для получения выплат вам необходим аккаунт в Payoneer.',
    //   'Срок выплаты до 7 рабочих дней.',
    //   'В выходные и праздничные дни обработка платежа может быть увеличена.',
    //   'Может содержать дополнительные комиссии до 2%',
    // ],
    list: [
      'Временно недоступна',
    ],
  },
]

const Props = ({update_local_user, user, status, updateCardData, updateTransactionData, getCountries, countries, clear_errors, error, update_status, clear_update_status, }) => {

  const [active, setActive] = useState(1)
  const [activePopUp, setActivePopUp] = useState(false)
  const [changeCardPopUp, setChangeCardPopUp] = useState(false)
  const [empty, setEmpty] = useState(true)

  useEffect(() => {
    if(user?.preferred_payment_method){
      setActive(user?.preferred_payment_method)
    }
  }, [user])

  useEffect(() => {
    setPage('profile')
    getCountries()
    return () => setActivePopUp(false)
  }, [])

  useEffect(() => {
    if(update_status >= 200 && update_status < 300) {
      setActivePopUp(true)
    }
  }, [update_status])

  const handleSubmit = () => {
    setEmpty(true)
    if (active === 1) {
      updateCardData(user.id, user.debet_card)
    } else if (active === 2) {
      updateTransactionData(user.id, user.bank_transaction)
    }
  }

  const handleCardChange = id => {
    if(empty) {
      setActive(id)
    } else {
      setChangeCardPopUp(true)
    }
  }

  // const handleChange = (name, value) => {
  //   let bank_transaction = user.bank_transaction
  //   let debet_card = user.debet_card
  //   update_local_user({
  //     ...user,
  //     bank_transaction: {
  //       ...bank_transaction,
  //       [name]: value,
  //     },
  //     debet_card: {
  //       ...debet_card,
  //       [name]: value,
  //     }
  //   })
  // }

  const Card = ({title, subtitle, list, id, available}) => (
    <div className={`card-body ${active === id ? 'active' : ''}`}>
      <div className="card-data">
        <div className="card-title">
          {title}
        </div>
        <div className="card-subtitle">
          {subtitle}
        </div>
        <div className="card-list">
          <ul>
            {list.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
      <Button text={`${active === id ? 'Выбрано' : 'Выбрать'}`} width={'100%'}
              color={`${active === id ? 'button-success' : 'button-primary'}`} active={available}
              action={() => handleCardChange(id)}/>
    </div>
  )

  return (
    <Account title='Реквизиты' menu_item='props'>
      <>
        {activePopUp && <PopUp status={'ok'} title={'Данные успешно обновлены'}
                               text={''}
                               button={'Ок'} action={() => {
          setActivePopUp(false)
          clear_update_status()
        }}/>}
        {changeCardPopUp && <PopUp status={'cancel'} title={'Внимание!'}
                               text={'Сохраните, либо удалите все данные, прежде чем переходить в другой раздел!'}
                               button={'Ок'} action={() => {
          setChangeCardPopUp(false)
        }}/>}
        {status === 'experts' && (
          <main>
            <div className='global-h2-heading'>
              <h2>Реквизиты</h2>
            </div>
            <div className='tours-list-add-button-wrapper'>
              <div className='tours-list-add-button-text'>
                Комиссия работы с сервисом, для вас составляет всего: {user.commission}%
              </div>
            </div>
            <div className="team-subtitle">
              Метод выплаты
            </div>


            <div className="cards-wrapper">
              {data.map((item, index) => <Card key={index} id={item.id} list={item.list} subtitle={item.subtitle}
                                               title={item.title} available={item.available}/>)}
            </div>

            {active === 1 && (
              <DebetCard error={error} empty_action={setEmpty}/>
            )}

            {active === 2 && (
              <Transaction error={error} empty_action={setEmpty}/>
            )}

            <Button text={'Сохранить'} width={'50%'} action={handleSubmit}/>
          </main>
        )}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.error,
  status: state.auth.status,
  update_status: state.auth.update_status,
  countries: state.tours.countries,
  bankCardData: state.profile.bank_card_data,
  bankTransactionData: state.profile.bank_transaction_data,
  recipient_inn_data: state.profile.recipient_inn_data,
})

export default connect(mapStateToProps, {
  setPage,
  update_user,
  updateCardData,
  updateTransactionData,
  getCountries,
  clear_errors,
  clear_update_status,
  update_local_user,
})(Props)