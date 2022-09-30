import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import {
  update_local_user,
  getBikData,
  updateCardData,
  resetBikData,
  clear_errors
} from "../../../redux/actions/authActions";
import {getCountries} from "../../../redux/actions/toursActions";
import {isNotEmptyObject} from "../../../functions";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";

const DebetCard = ({user, getBikData, resetBikData, update_local_user, error, clear_errors, getCountries, countries, empty_action,}) => {

  const [debetCard, setDebetCard] = useState(null)
  const [spinner, setSpinner] = useState(false)
  const [clear, setClear] = useState(false)

  useEffect(() => {
    return () => clear_errors()
  }, [])

  useEffect(() => {
    if(debetCard && Object.values(debetCard).some(x => x !== null && x !== '')) {
      empty_action(false)
    } else {
      empty_action(true)
    }
  }, [debetCard])

  useEffect(() => {
    if (isNotEmptyObject(user) && isNotEmptyObject(user.debet_card)) {
      setSpinner(false)
    }
  }, [user])

  const handleDataGet = (name, value) => {
    setSpinner(true)
    if (value.length === 9) {
      setClear(false)
      getBikData({bank_bik: value, payment_type: 'debet_card'}, 'card')
    } else if (value.length !== 9) {
      setClear(true)
      resetBikData('card')
    }
  }

  const handleChange = (name, value) => {
    setDebetCard((debetCard) => ({
      ...debetCard,
      [name]: value,
    }))
    let debet_card = user.debet_card
    update_local_user({
      ...user,
      debet_card: {
        ...debet_card,
        [name]: value,
      }
    })
  }


  return (
    <>
      {/*<SingleWrapper label='Страна платежного адреса' comment='' name={'billing_country'} full={true} margin={0}>*/}
      {/*  <SelectInput*/}
      {/*    action={handleChange}*/}
      {/*    name='billing_country'*/}
      {/*    label='Страна платежного адреса'*/}
      {/*    val={user?.debet_card?.billing_country}*/}
      {/*    options={countries}*/}
      {/*    error={error}*/}
      {/*  />*/}
      {/*</SingleWrapper>*/}
      <DoubleWrapper full={true} margin={0}>
        <Input
          label={'БИК Банка'}
          action={handleDataGet}
          name='debet_card_bank_bik'
          value={user?.debet_card?.debet_card_bank_bik}
          error={error}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'Банк-получатель'}
          action={handleChange}
          name='debet_card_bank_name'
          value={user?.debet_card?.debet_card_bank_name}
          error={error}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'КПП Банка'}
          action={handleChange}
          name='debet_card_bank_kpp'
          value={user?.debet_card?.debet_card_bank_kpp}
          error={error}
        />

        <Input
          clear={clear}
          spinner={spinner}
          label={'ИНН Банка'}
          action={handleChange}
          name='debet_card_bank_inn'
          value={user?.debet_card?.debet_card_bank_inn}
          error={error}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'Корр. Счет'}
          action={handleChange}
          name='debet_card_bank_account'
          value={user?.debet_card?.debet_card_bank_account}
          error={error}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'Рассчетный Счет'}
          action={handleChange}
          name='debet_card_recipient_account'
          value={user?.debet_card?.debet_card_recipient_account}
          error={error}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          label={'Получатель (ФИО)'}
          action={handleChange}
          name='debet_card_recipient_full_name'
          value={user?.debet_card?.debet_card_recipient_full_name}
          error={error}
        />
        <Input
          label={'Основание платежа'}
          action={handleChange}
          name='debet_card_payment_reason'
          value={user?.debet_card?.debet_card_payment_reason}
          error={error}
        />
      </DoubleWrapper>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  countries: state.tours.countries,
  status: state.auth.status,
  languages: state.tours.languages,
  bik_data: state.profile.bik_data,
  recipient_inn_data: state.profile.recipient_inn_data,
  // error: state.auth.error,
})

export default connect(mapStateToProps, {
  updateCardData,
  getBikData,
  resetBikData,
  update_local_user,
  clear_errors,
  getCountries,
})(DebetCard)