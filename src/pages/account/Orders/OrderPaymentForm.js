import React, {useEffect, useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";

const OrderPaymentForm = ({action, data, error, status, }) => {

  // const [traveler, setTraveler] = useState(data)

  // useEffect(() => {
  //   if(traveler) {
  //     action(traveler)
  //   }
  // }, [traveler])

  const handleForm = (name, value) => {
    action({
      ...data,
      [name]: value,
    })
    // setTraveler(traveler => ({
    //   ...traveler,
    //   [name]: value,
    // }))
  }

  return (
    <>
      <SingleWrapper margin_bottom={'0'} label={'Фамилия'} full={true} width={'100%'} margin={'0'}>
        <Input disabled={status !== 'new'} value={data.last_name} name={'last_name'} action={handleForm} error={error}/>
      </SingleWrapper>
      <SingleWrapper margin_bottom={'0'} label={'Имя'} full={true} width={'100%'} margin={'0'}>
        <Input disabled={status !== 'new'} value={data.first_name} name={'first_name'} action={handleForm} error={error}/>
      </SingleWrapper>
      <SingleWrapper margin_bottom={'0'} label={'Отчество'} full={true} width={'100%'} margin={'0'}>
        <Input disabled={status !== 'new'} value={data.middle_name} name={'middle_name'} action={handleForm} error={error}/>
      </SingleWrapper>
      {/*{is_first && <SingleWrapper margin_bottom={'0'} label={'E-mail'} full={true} width={'100%'} margin={'0'}>*/}
      {/*  <Input disabled={status !== 'new'} value={data.email} name={'email'} action={handleForm}/>*/}
      {/*</SingleWrapper>}*/}
      {/*{is_first && <SingleWrapper margin_bottom={'0'} label={'Телефон '} full={true} width={'100%'} margin={'0'}>*/}
      {/*  <Input disabled={status !== 'new'} value={data.phone} name={'phone'} action={handleForm}/>*/}
      {/*</SingleWrapper>}*/}
      <SingleWrapper margin_bottom={'0'} label={'Дата рождения'} full={true} width={'100%'} margin={'0'}>
        <Input disabled={status !== 'new'} type={'date'} value={data.birth_date} name={'birth_date'} action={handleForm} error={error}/>
      </SingleWrapper>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPaymentForm)