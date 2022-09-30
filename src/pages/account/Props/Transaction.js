import React, {useEffect, useState} from 'react';
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import {connect} from "react-redux";
import {
  update_local_user,
  getBikData,
  updateCardData,
  resetBikData,
  getInnData,
  resetInnData,
  clear_errors, upload_docs,
} from "../../../redux/actions/authActions";
import {getCountries} from "../../../redux/actions/toursActions";
import {isNotEmptyObject} from "../../../functions";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import ObjectFileInput from "../../../components/AccountTours/FormFields/ObjectFileInput";

const Transaction = ({
                       user,
                       getBikData,
                       resetBikData,
                       update_local_user,
                       getInnData,
                       resetInnData,
                       error,
                       clear_errors,
                       getCountries,
                       countries,
                       upload_docs,
                       empty_action,
                     }) => {

  const [transaction, setTransaction] = useState(null)
  const [spinner, setSpinner] = useState(false)
  const [innSpinner, setInnSpinner] = useState(false)
  const [clear, setClear] = useState(false)
  const [innClear, setInnClear] = useState(false)

  useEffect(() => {
    return () => clear_errors()
  }, [])

  useEffect(() => {
    if(transaction && Object.values(transaction).some(x => x !== null && x !== '')) {
      empty_action(false)
    } else {
      empty_action(true)
    }
  }, [transaction])

  useEffect(() => {
    if (isNotEmptyObject(user) && isNotEmptyObject(user.bank_transaction)) {
      // setTransaction(user.bank_transaction)
      setSpinner(false)
      setInnSpinner(false)
    }
  }, [user, spinner, innSpinner])

  const handleBikDataGet = (name, value) => {
    setSpinner(true)
    if (value.length === 9) {
      setClear(false)
      getBikData({bank_bik: value, payment_type: 'transaction'}, 'transaction')
    } else if (value.length !== 9) {
      setClear(true)
      resetBikData('transaction')
    }
  }

  const handleInnDataGet = (name, value) => {
    setInnSpinner(true)
    if (value.length === 10 || value.length === 12) {
      setInnClear(false)
      getInnData({recipient_inn: value})
    } else if (value.length !== 10 || value.length !== 12) {
      setInnClear(true)
      resetInnData()
    }
  }

  const handleChange = (name, value) => {
    setTransaction((transaction) => ({
      ...transaction,
      [name]: value,
    }))
    let bank_transaction = user.bank_transaction
    update_local_user({
      ...user,
      bank_transaction: {
        ...bank_transaction,
        [name]: value,
      }
    })
  }

  const handleDocChange = (file) => {
    upload_docs(file)
  }

  return (
    <>
      {/*<SingleWrapper label='Страна платежного адреса' comment='' name={'billing_country'} full={true} margin={0}>*/}
      {/*  <SelectInput*/}
      {/*    action={handleChange}*/}
      {/*    name='billing_country'*/}
      {/*    label='Страна платежного адреса'*/}
      {/*    val={user?.bank_transaction?.billing_country}*/}
      {/*    options={countries}*/}
      {/*    error={error}*/}
      {/*  />*/}
      {/*</SingleWrapper>*/}

      <DoubleWrapper full={true} margin={0}>
        <Input
          label={'БИК Банка'}
          action={handleBikDataGet}
          name='transaction_bank_bik'
          value={user?.bank_transaction?.transaction_bank_bik}
          error={error}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'ИНН Банка'}
          action={handleChange}
          name='transaction_bank_inn'
          value={user?.bank_transaction?.transaction_bank_inn}
          error={error}
        />
      </DoubleWrapper>

      <SingleWrapper label='Банк-получатель' width={'100%'} margin={'0'}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'Банк-получатель'}
          action={handleChange}
          name='transaction_bank_name'
          value={user?.bank_transaction?.transaction_bank_name}
          error={error}
        />
      </SingleWrapper>

      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'КПП Банка'}
          action={handleChange}
          name='transaction_bank_kpp'
          value={user?.bank_transaction?.transaction_bank_kpp}
          error={error}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'Корр. Счет'}
          action={handleChange}
          name='transaction_bank_account'
          value={user?.bank_transaction?.transaction_bank_account}
          error={error}
        />
      </DoubleWrapper>

      <SingleWrapper label='Основание платежа' width={'100%'} margin={'0'}>
        <Input
          label={'Основание платежа'}
          action={handleChange}
          name='transaction_payment_reason'
          value={user?.bank_transaction?.transaction_payment_reason}
          error={error}
        />
      </SingleWrapper>

      <DoubleWrapper full={true} margin={0}>
        <Input
          label={'ИНН Получателя'}
          action={handleInnDataGet}
          name='transaction_recipient_inn'
          value={user?.bank_transaction?.transaction_recipient_inn}
          error={error}
        />
        <Input
          error={error}
          clear={clear}
          spinner={spinner}
          label={'Наименование Юр. лица'}
          action={handleChange}
          name='transaction_recipient_name'
          value={user?.bank_transaction?.transaction_recipient_name}
        />
      </DoubleWrapper>

      <SingleWrapper label='Юридический адрес' width={'100%'} margin={'0'}>
        <Input
          error={error}
          label={'Юридический адрес'}
          action={handleChange}
          name='transaction_recipient_legal_address'
          value={user?.bank_transaction?.transaction_recipient_legal_address}
        />
      </SingleWrapper>
      <SingleWrapper label='Фактический адрес' width={'100%'} margin={'0'}>
        <Input
          error={error}
          label={'Фактический адрес'}
          action={handleChange}
          name='transaction_recipient_real_address'
          value={user?.bank_transaction?.transaction_recipient_real_address}
        />
      </SingleWrapper>


      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'ОГРН (ОГРНИП)'}
          action={handleChange}
          name='transaction_recipient_ogrn'
          value={user?.bank_transaction?.transaction_recipient_ogrn}
          error={error}
        />
        <Input
          label={'Р/С Получателя'}
          action={handleChange}
          name='transaction_recipient_account'
          value={user?.bank_transaction?.transaction_recipient_account}
          error={error}
        />
      </DoubleWrapper>


      <SingleWrapper label='Сканы уставных документов (ИНН, ОГРН)' width={'70%'} margin={'0'}>
        <ObjectFileInput
          accept_all={true}
          error={error}
          label={'Сканы уставных документов (ИНН, ОГРН)'}
          action={handleDocChange}
          name='scans'
          value={user?.bank_transaction?.scans}
        />
      </SingleWrapper>
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
  getInnData,
  resetInnData,
  clear_errors,
  getCountries,
  upload_docs
})(Transaction)