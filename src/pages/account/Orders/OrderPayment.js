import React, {useEffect, useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import MetaTags from "react-meta-tags";
import MainLayout from "../../../layouts/MainLayout";
import {Link, Redirect, useHistory} from "react-router-dom";
import SideBar from "../../../components/sideBar/SideBar";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import ok from './img/ok.svg'
import cancel from './img/cancel.svg'
import flash from './img/flash.svg'
import team from './img/team.svg'
import wallet from './img/wallet.svg'
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";
import Button from "../../../components/AccountTours/Components/Button";
import {getTourReview} from "../../../redux/actions/toursActions";
import {proper_date, properNumber, setConfig} from "../../../functions";
import {
  clear_errors,
  clear_single_order,
  get_single_order,
  update_local_order,
  update_order,
  update_order_actions,
} from "../../../redux/actions/orderActions";
import OrderPaymentForm from "./OrderPaymentForm";
import axios from "axios";
import * as t from "../../../redux/types";
import PopUp from "../../../components/PopUp/PopUp";

const OrderPayment = ({
                        match,
                        get_single_order,
                        clear_single_order,
                        update_local_order,
                        update_order,
                        update_order_actions,
                        clear_errors,
                        order,
                        error,
                      }) => {

  const  history = useHistory()

  const [fieldError, setFieldError] = useState({})
  const [travelersError, setTravelersError] = useState([])
  const [actionUrl, setActionUrl] = useState('')
  const [active, setActive] = useState(false)
  const [title, setTitle] = useState('')

  const getErrors = (errors) => {
    let data = errors?.filter(error => error.index_number == 1)[0]
    return data?.errors
  }

  useEffect(() => {
    get_single_order(match.params.id)
    return () => clear_single_order()
  }, [])

  useEffect(() => {
    if(error) {
      setFieldError({phone: error?.phone, email: error?.email})
      setTravelersError(error?.travelers)
    }
  }, [error])


  // useEffect(() => {
  //   if(order?.travelers_number){
  //     setPlaces(order?.travelers_number)
  //     let arr = []
  //     for (let i = 1; i <= order?.travelers_number; i++) {
  //       arr = [...arr, i]
  //     }
  //     setTravelersCount(arr)
  //     setTravelers(arr.map(item => {
  //       let traveler = {}
  //       traveler.id = item
  //       return traveler
  //     }))
  //   }
  // }, [order])

  // const [places, setPlaces] = useState(1)
  // const [travelersCount, setTravelersCount] = useState([])
  // const [travelers, setTravelers] = useState([])
  // const [newTourDate, setNewTourDate] = useState({})

  // useEffect(() => {
  //   if(newTourDate) {
  //     update_local_order({tour: newTourDate?.id})
  //   }
  // }, [newTourDate])

  const handleDateChange = (name, value) => {
    update_order(match.params.id, {
      ...order,
      tour: value.id,
    })
  }

  const handleSubmit = async (action) => {

    const config = setConfig(!!localStorage.getItem('access'))

    const body = JSON.stringify(order)

    try {
      const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/orders/${match.params.id}/${action}`, body, config)


      window.location.replace(res?.data?.redirect_url)

    } catch (err) {
      update_order_actions('fail', err)
    }

  }


  const handleAction = async (action, confirmation, name) => {
    setActionUrl(action)
    if(name){
      setTitle(name)
    }
    if(confirmation) {
      setActive(true)
    } else {
      await handleSubmit(action)
    }

  }

  const handleAdd = () => {
    if (order?.travelers_number < order?.vacants_number) {
      update_local_order({
        travelers_number: order?.travelers_number + 1,
        travelers: [...order?.travelers, {index_number: order?.travelers_number + 1}]
      })
    }
  }

  const handleSubtract = () => {
    if (order?.travelers_number > 1) {
      let travelers_set = order?.travelers
      travelers_set.pop()
      update_local_order({
        travelers_number: order?.travelers_number - 1,
        travelers: travelers_set
      })
    }
  }

  const handleTravelers = (traveler) => {
    update_local_order({
      travelers: order?.travelers?.map(item => {
        if (item.index_number === traveler.index_number) {
          return traveler
        } else {
          return item
        }
      })
    })
  }

  const handleForm = (name, value) => {
    update_local_order({[name]: value})
  }

  return (
    <>
      <MetaTags>
        <title>???????????? ????????????????????????</title>
        <meta name='description' content=''/>
        <link rel='icon' href='/favicon.ico'/>
      </MetaTags>
      <MainLayout page={'orders'}>
        {active && <PopUp
          second_color={'button-primary'}
          first_color={'button-danger'}
          button2={'????????????????'}
          button={'????????????????????'}
          action={() => handleSubmit(actionUrl)}
          status={'danger'}
          title={title}
          text={'???????????? ???????????????? ????????????????????. ??????????????, ?????? ???????????? ?????????????????????'}
          second_action={() => setActive(false)}
          close_action={() => setActive(false)}
        />}
        <section>
          <div className='wrapper'>
            <Breadcrumbs>
              <Breadcrumb
                link="/"
              >
                ??????????????
              </Breadcrumb>
              <Breadcrumb
                link="/account"
              >
                ???????????? ??????????????
              </Breadcrumb>
              <Breadcrumb
                link="/account/orders"
              >
                ?????? ??????????
              </Breadcrumb>
              <Breadcrumb>
                ???????????? ????????????????????????
              </Breadcrumb>
            </Breadcrumbs>
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <div className='global-h2-heading'><h2>???????????? ????????????????????????</h2></div>
            <div className={styles.order_payment_section}>
              <div className={styles.order_payment_section_main}>
                <div className={styles.order_payment_section_main_upper}>
                  <div>
                    <div className={styles.order_payment_section_main_upper_heading}>
                      ???????? ??????????????????????
                    </div>
                    <div className={styles.order_payment_section_main_upper_dates}>
                      <div>{order?.start_date}</div>
                      <div>{order?.finish_date}</div>
                    </div>
                    <div className={styles.order_payment_section_main_upper_select_heading}>
                      ?????????????? ????????
                    </div>
                    <div className={styles.order_payment_section_main_upper_select}>
                      <SelectInput options={order?.tour_dates} labelField={'tour_date'} action={handleDateChange} name={'tour_dates'}/>
                    </div>
                    <div className={styles.order_payment_section_main_upper_ok}>
                      <img src={ok} alt="ok"/>
                      <div>???????????????????????????? ???????????? ????????</div>
                    </div>
                  </div>
                  <div>

                    <div className={styles.order_payment_section_main_upper_list}>
                      <div className={styles.order_payment_section_main_upper_list_item}>
                        <img src={team} alt="team"/>
                        <div className={styles.order_payment_section_main_upper_list_item_text}>
                          <div className={styles.order_payment_section_main_upper_list_item_text_heading}>
                            {`${order?.vacants_number}/${order?.members_number} ???????? ????????????????.`}
                          </div>
                          <div className={styles.order_payment_section_main_upper_list_item_text_text}>
                            ???????? ?????????? ?????????? ?????????????????????????? ?? ?????????????? 30 ?????????? ?????????? ????????????.
                          </div>
                        </div>
                      </div>
                      <div className={styles.order_payment_section_main_upper_list_item}>
                        <img src={wallet} alt="wallet"/>
                        <div className={styles.order_payment_section_main_upper_list_item_text}>
                          <div className={styles.order_payment_section_main_upper_list_item_text_heading}>
                            ???????????? ??????????????
                          </div>
                          <div className={styles.order_payment_section_main_upper_list_item_text_text}>
                            {`${properNumber(order?.book_price)} ???? 1 ??????????????????, ?????? ???????????? ???????????????????????? ????????????????????????`}
                          </div>
                        </div>
                      </div>
                      <div className={styles.order_payment_section_main_upper_list_item}>
                        <img src={flash} alt="flash"/>
                        <div className={styles.order_payment_section_main_upper_list_item_text}>
                          <div className={styles.order_payment_section_main_upper_list_item_text_heading}>
                            ???????????????????????? ????????????????????????
                          </div>
                          <div className={styles.order_payment_section_main_upper_list_item_text_text}>
                            ???????? ?????????????? ?????????? ???????????????????????? ?????????? ????????????
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.order_payment_section_main_upper_ok}>
                      <img src={ok} alt="ok"/>
                      <div>?????????????? ?????????????? ????????????????</div>
                    </div>
                  </div>
                </div>


                <div className={styles.order_payment_section_main_body}>
                  <div>
                    <div className={styles.order_payment_section_main_upper_heading}>
                      ???????????? ?? ????????????????????????????????
                    </div>
                    <div className={styles.order_payment_section_main_upper_select_heading}>
                      ???????????????????? ????????????????????????????????
                    </div>

                    <div className={styles.inputs_row_date_input}>
                      <div className={styles.inputs_row_date_input_button_minus} onClick={handleSubtract}>
                        ???
                      </div>
                      <div className={styles.inputs_row_date_input_text}>
                        ????????:
                        {' '}
                        {order?.travelers_number}
                      </div>
                      <div className={styles.inputs_row_date_input_button} onClick={handleAdd}>
                        +
                      </div>
                    </div>

                    <div className={styles.order_payment_section_main_upper_traveler_form}>
                      <div className={styles.order_payment_section_main_upper_traveler_form_heading}>
                        ???????????????????? ????????????????????
                      </div>
                      <SingleWrapper margin_bottom={'0'} label={'E-mail'} full={true} width={'100%'} margin={'0'}>
                        <Input disabled={order?.status !== 'new'} value={order?.email} name={'email'} action={handleForm} type={'email'} error={fieldError}/>
                      </SingleWrapper>
                      <SingleWrapper margin_bottom={'0'} label={'?????????????? '} full={true} width={'100%'} margin={'0'}>
                        <Input disabled={order?.status !== 'new'} value={order?.phone} name={'phone'} action={handleForm} error={fieldError}/>
                      </SingleWrapper>
                    </div>

                    {order?.travelers?.map(item => (
                      <>
                        <div key={item?.index_number} className={styles.order_payment_section_main_upper_traveler_form}>
                          <div className={styles.order_payment_section_main_upper_traveler_form_heading}>
                            {item?.index_number === 1 ? '???????????????? ????????????????????????????' : '???????????????????????????? ???' + item?.index_number}
                          </div>
                          <OrderPaymentForm data={item} status={order?.status} action={handleTravelers} error={getErrors(travelersError)}/>
                        </div>
                      </>
                    ))}


                    {/*<div className={styles.order_payment_section_main_upper_traveler_form}>*/}
                    {/*  <div className={styles.order_payment_section_main_upper_traveler_form_heading}>*/}
                    {/*    ???????????????????????????? ???2*/}
                    {/*  </div>*/}
                    {/*  <SingleWrapper margin_bottom={'0'} label={'??????????????'} full={true} width={'100%'} margin={'0'}>*/}
                    {/*    <Input/>*/}
                    {/*  </SingleWrapper>*/}
                    {/*  <SingleWrapper margin_bottom={'0'} label={'??????'} full={true} width={'100%'} margin={'0'}>*/}
                    {/*    <Input/>*/}
                    {/*  </SingleWrapper>*/}
                    {/*  <SingleWrapper margin_bottom={'0'} label={'????????????????'} full={true} width={'100%'} margin={'0'}>*/}
                    {/*    <Input/>*/}
                    {/*  </SingleWrapper>*/}
                    {/*  <SingleWrapper margin_bottom={'0'} label={'???????? ????????????????'} full={true} width={'100%'} margin={'0'}>*/}
                    {/*    <Input/>*/}
                    {/*  </SingleWrapper>*/}
                    {/*</div>*/}


                  </div>
                </div>

                <div className={styles.order_payment_section_main_upper_traveler_checkbox}>
                  <CheckboxInput
                    label={'?? ???????????????????? ???????????????? ?? ?????????????????? ?????????????????? ???????????? ?? ?????????????? ???????? ???????????????? ???? ?????????????????? ???????????????????????? ????????????.'}/>
                </div>

                {order?.actions?.map((item, index) => <Button key={index} color={item.color} width={'100%'} text={item.title} margin={'0 0 30px 0'} action={() => handleAction(item.action, item.confirmation, item.title)}/>)}



                <div className={styles.order_payment_section_main_upper_traveler_notes}>
                  <div>???????? ??????????????????????, ???? ?? ?????????????? 24 ?????????? ?????????? ???????????? ?????????????? 100% ??????????????</div>
                  <div>?????????????? ?????????????? ????????????????, ???????????? ???????????????? {properNumber(order?.book_price)}</div>
                  <div> ?????????????????? ?????????? ???????????? ???????? ???????????????? ???? {order?.postpay_final_date} ????????</div>
                </div>


              </div>
              <div className={styles.order_payment_section_sidebar}>
                <div className={styles.order_payment_section_sidebar_section}>
                  <div className={styles.order_payment_section_main_upper_heading}>
                    ?????? ??????????????????????
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_name}>
                    {`???${order?.id} ${order?.name}`}
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_duration}>
                    {`${order?.duration} ????????`}
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_start_finish}>
                    <div>
                      {`??????????: ${order?.start_date}`}
                    </div>
                    <div>
                      {`??????????: ${order?.finish_date}`}
                    </div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_travelers}>
                    <div>???????????????????? ????????????????????:</div>
                    <div>{order?.travelers_number}</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_price}>
                    <div>???????? ???? ????????????</div>
                    <div>{properNumber(order?.price)}{order?.currency}</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_price}>
                    <div>???????????????? ??????????????</div>
                    <div>0</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_total}>
                    <div>??????????:</div>
                    <div>{properNumber(order?.price * order?.travelers_number)}{order?.currency}</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_deposit}>
                    <div>
                      <div>
                        ??????????????
                      </div>
                      <div>
                        ?? ???????????? ????????????
                      </div>
                    </div>
                    <div>{properNumber(order?.book_price * order?.travelers_number)}{order?.currency}</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_tour_deposit}>
                    <div>
                      <div>
                        ?????????????????? ????????????
                      </div>
                      <div>
                        {`???????????? ???? ${order?.postpay_on_start_day ? proper_date(order?.start_date) : order?.postpay_final_date}`}
                      </div>
                    </div>
                    <div>{properNumber((order?.postpay * order?.travelers_number))}{order?.currency}</div>
                  </div>
                </div>


                <div className={styles.order_payment_section_sidebar_section}>
                  <div className={styles.order_payment_section_main_upper_heading}>
                    ???????????? ??????????????????????
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>????????????-??????????????</div>
                    <div>{order?.expert?.full_name}</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>??????????</div>
                    <div>
                      <ul>
                        {order?.languages?.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>?????????????? ??????????????????</div>
                    <div>{`${order?.difficulty_level}/5 - ${order?.difficulty_level < 2 ? '????????????' : order?.difficulty_level > 4 ? '??????????????' : '??????????????'} ??????????????`}</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>?????????????? ????????????????</div>
                    <div>{`${order?.comfort_level}/5 - ${order?.comfort_level < 2 ? '????????????' : order?.comfort_level > 4 ? '??????????????' : '??????????????'} ??????????????`}</div>
                  </div>
                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>???????????????? ?? ??????????:</div>
                    <div>
                      <ul>
                        {order?.tour_included_services?.map((item, index) => (
                          <li key={index}>
                            <img src={ok} alt="ok"/>
                            <div>
                              {item}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.order_payment_section_sidebar_section_row}>
                    <div>???? ???????????????? ?? ??????????:</div>
                    <div>
                      <ul>
                        {order?.tour_excluded_services.map((item, index) => (
                          <li key={index}>
                            <img src={cancel} alt="cancel"/>
                            <div>
                              {item}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  order: state.orders.order,
  error: state.orders.error,
})
const mapDispatchToProps = {
  get_single_order,
  clear_single_order,
  update_local_order,
  update_order,
  update_order_actions,
  clear_errors,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPayment)