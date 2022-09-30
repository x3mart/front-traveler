import React, {useEffect, useState} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'

import {connect} from 'react-redux'
import {
  updateTour,
  deleteKey,
  clearErrors,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import ExtraServicesComponent from "./ExtraServicesComponent";
import TextArea from "../FormFields/TextArea";
import Button from "./Button";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import PopUp from "../../PopUp/PopUp";
import SubmitButton from "./SubmitButton";
import CircularProgress from "@mui/material/CircularProgress";
import ToursFormLayout from "../../../layouts/account/ToursFormLayout";
import PrcSelectInput from "../FormFields/PrcSelectInput";


const Prices = ({
                  tour,
                  updateTour,
                  currencies,
                  match,
                  error,
                  deleteKey,
                  field_key,
                  clearErrors,
                }) => {

  useEffect(() => {
    const scrollTo = async (el) => {
      let anchor = document.getElementById(el)
      anchor && anchor.scrollIntoView({block: "center", behavior: "smooth"})
    }
    if (field_key) {
      scrollTo(field_key).then(() => deleteKey())
    }
    return () => clearErrors()
  }, [field_key])

  const handleInput = (name, value) => {
    updateTour({...tour, [name]: value})
  }

  const handlePrcInput = (name, value) => {
    value && value.id === 0 ? updateTour({...tour, [name]: false}) : updateTour({...tour, [name]: true})
  }

  return (
    <>
      <ToursFormLayout
        section_slug={'prices'}
        section_name={'Цены'}
        tour_id={match.params.id}
        forward_url={'gallery'}
        backward_url={'review'}
        submit_url={''}
      >
        <DoubleWrapper ratio='2-3' tour={tour}>
          <Input
            action={handleInput}
            name='price'
            label='Стоимость'
            value={tour && tour.price}
            error={error}
          />
          <SelectInput
            action={handleInput}
            name='currency'
            label='Валюта тура'
            val={tour && tour.currency}
            options={currencies}
            error={error}
          />
        </DoubleWrapper>

        <SingleWrapper label='Комментарий к стоимости' comment='' name='price_comment'>
          <Input
            action={handleInput}
            name='price_comment'
            label='Комментарий к стоимости'
            value={tour && tour.price_comment}
            error={error}
          />
        </SingleWrapper>

        <DoubleWrapper ratio='2-3' tour={tour}>
          <Input
            action={handleInput}
            name='discount'
            label='Размер скидки'
            value={tour && tour.discount}
            error={error}
          />
          <PrcSelectInput
            name='discount_in_prc'
            label={tour && tour.currency ? 'Номинал' : 'Выберите валюту тура'}
            val={tour && tour.discount_in_prc}
            action={handlePrcInput}
            currency={tour && tour.currency && tour.currency.short_name}
            error={error}
          />
        </DoubleWrapper>

        <DoubleWrapper ratio='1-2' tour={tour}>
          <Input
            action={handleInput}
            name='discount_starts'
            label='Скидка действует с:'
            value={tour && tour.discount_starts}
            type='date'
            error={error}
          />
          <Input
            action={handleInput}
            name='discount_finish'
            label='Скидка действует до:'
            value={tour && tour.discount_finish}
            type='date'
            error={error}
          />
        </DoubleWrapper>

        <DoubleWrapper ratio='2-3' tour={tour}>
          <Input
            action={handleInput}
            name='prepay_amount'
            label='Предоплата'
            value={tour && tour.prepay_amount}
            error={error}
          />
          <PrcSelectInput
            name='prepay_in_prc'
            label={tour && tour.currency ? 'Номинал' : 'Выберите валюту тура'}
            val={tour && tour.prepay_in_prc}
            action={handlePrcInput}
            currency={tour && tour.currency && tour.currency.short_name}
            error={error}
          />
        </DoubleWrapper>

        {tour && !tour.postpay_days_before_start && (
          <CheckboxInput
            action={handleInput}
            name='postpay_on_start_day'
            label='Постоплата в день старта'
            comment=''
            value={tour && tour.postpay_on_start_day}
          />
        )}

        {tour && !tour.postpay_on_start_day && (
          <SingleWrapper label='Вносится за дней до старта ' comment='' name='postpay_days_before_start'>
            <Input
              action={handleInput}
              name='postpay_days_before_start'
              label='Вносится за дней до старта'
              value={tour && tour.postpay_days_before_start}
              error={error}
            />
          </SingleWrapper>
        )}

        <div className='my-tours-section-heading'>
          <h4>Дополнительные услуги</h4>
        </div>

        <ExtraServicesComponent/>

        <SingleWrapper label='В стоимость включено' comment='Вводить через точку с запятой.' tour={tour} name='tour_included_services' >
          <TextArea
            action={handleInput}
            name='tour_included_services'
            label=''
            value={tour && tour.tour_included_services}
            rows='7'
            error={error}
          />
        </SingleWrapper>

        <SingleWrapper label='В стоимость не включено' comment='Вводить через точку с запятой.' tour={tour} name='tour_excluded_services'>
          <TextArea
            action={handleInput}
            name='tour_excluded_services'
            label=''
            value={tour && tour.tour_excluded_services}
            rows='7'
            error={error}
          />
        </SingleWrapper>

        <SingleWrapper label='Авиабилеты' comment='' tour={tour} name='air_tickets'>
          <TextArea
            action={handleInput}
            name='air_tickets'
            label=''
            value={tour && tour.air_tickets}
            rows='7'
            error={error}
          />
        </SingleWrapper>

        <CheckboxInput
          action={handleInput}
          name='flight_included'
          label='В стоимость включен перелёт'
          comment=''
          value={tour && tour.flight_included}
        />

        <SingleWrapper
          tour={tour}
          name='cancellation_terms'
          label='Укажите свои условия отмены:'
          comment='Расскажите клиентам, какая у вас политика возвратов. Какая сумма вернется пользователю в случае отмены по инициативе путешественника? Обратите внимание, что сервисный сбор платит тревел-эксперт и он является фактически понесенными расходами.'
        >
          <TextArea
            action={handleInput}
            name='cancellation_terms'
            label=''
            value={tour && tour.cancellation_terms}
            rows='7'
            error={error}
          />
        </SingleWrapper>
      </ToursFormLayout>
    </>
  )
}

const mapStateToProps = state => ({
  currencies: state.tours.currencies,
  tour: state.tours.current_tour,
  error: state.tours.error,
  field_key: state.tours.key,
})

export default connect(mapStateToProps, {
  updateTour,
  deleteKey,
  clearErrors,
})(Prices)
