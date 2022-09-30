import React, {useState, useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import NameInput from '../FormFields/NameInput'
import FileInput from '../FormFields/FileInput'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'

import {connect} from 'react-redux'
import {
  updateTour,
  updateTourWallpaper,
  setName,
  deleteKey,
  clearErrors,
} from '../../../redux/actions/toursActions'

import ToursFormLayout from "../../../layouts/account/ToursFormLayout";

const Main = ({
                tour,
                toursTypes,
                updateTour,
                updateTourWallpaper,
                tour_name,
                members,
                match,
                error,
                field_key,
                deleteKey,
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
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  const handleWallpaperInput = value => {
    updateTourWallpaper(value, tour.id)
  }

  return (
    <>
      <ToursFormLayout
        section_slug={'main'}
        section_name={'Основное'}
        tour_id={match.params.id}
        forward_url={'review'}
        backward_url={''}
        submit_url={''}
      >

        <SingleWrapper label='Название тура' comment='Максимум 50 символов' tour={tour} name={'name'}>
          <NameInput
            action={handleInput}
            name='name'
            value={tour_name ? tour_name : tour && tour.name}
            error={error}
          />
        </SingleWrapper>
        <SingleWrapper label='Обложка тура' comment='' tour={tour} name={'wallpaper'}>
          <FileInput
            action={handleWallpaperInput}
            name='wallpaper'
            max={1}
            value={tour && tour.tmb_wallpaper}
            error={error}
          />
        </SingleWrapper>
        <DoubleWrapper ratio='1-2' tour={tour}>
          <Input
            action={handleInput}
            name='members_number'
            label='Всего мест'
            value={tour && tour.members_number}
            error={error}
          />
          <Input
            action={handleInput}
            name='vacants_number'
            label='Осталось мест'
            value={tour && tour.vacants_number}
            error={error}
          />
        </DoubleWrapper>

        <SingleWrapper label='Основной тип тура' comment='' tour={tour} name={'basic_type'}>
          <SelectInput
            action={handleInput}
            name='basic_type'
            label='Основной тип тура'
            val={tour && tour.basic_type}
            options={toursTypes}
            error={error}
          />
        </SingleWrapper>

        <SingleWrapper
          label='Дополнительные типы тура'
          comment='Основной тип тура отображается в карточке тура в каталоге. Все возможные типы туров вы можете посмотреть здесь'
          tour={tour} name={'additional_types'}
        >
          <SelectInput
            basic_type={tour && tour.basic_type}
            action={handleInput}
            name='additional_types'
            label='Дополнительные типы тура'
            comment=''
            val={tour && tour.additional_types}
            options={toursTypes}
            multiple
            error={error}
          />
        </SingleWrapper>

        <CheckboxInput
          action={handleInput}
          name='instant_booking'
          label='Возможно моментальное бронирование'
          comment='Если вы выбираете моментальное бронирование - оплата с клиента будет списываться в момент бронирования без вашего подтверждения. '
          value={tour && tour.instant_booking}
        />

        <CheckboxInput
          action={handleInput}
          name='is_guaranteed'
          label='Тур гарантирован'
          comment='
“Тур гарантирован“ означает, что он точно состоится и дополнительного подтверждения с вашей стороны не требуется. Отмена гарантированного тура после получения предоплаты влечет начисление штрафа (см. раздел VI. Изменение бронирования, отмена и возврат)
'
          value={tour && tour.is_guaranteed}
        />

        <SingleWrapper
          label='Выберите гида из списка'
          comment={<div>
            <p>
              Путешественники очень расстраиваются, когда вместо обещанного гида
              видят другого.
            </p>
            <p>
              Путешественники очень расстраиваются, когда вместо обещанного гида
              видят другого. Пожалуйста, добавляйте актуальную информацию о том,
              кто будет сопровождать группу.
            </p>
            <p>
              Можно выбрать из выпадающего списка ИЛИ внести информацию в полях
              ниже.
            </p>
          </div>}
          tour={tour} name={'team_member'}
        >
          <SelectInput
            action={handleInput}
            name='team_member'
            label='Выберите гида из списка, либо укажите его данные ниже'
            val={tour && tour.team_member}
            options={members ? members : []}
            labelField='full_name'
            error={error}
          />
        </SingleWrapper>

        <CheckboxInput
          action={handleInput}
          name='direct_link'
          label='Доступ к туру только по прямой ссылке'
          comment='Выбор этой опции уберет ваш тур из выдачи на сайте. Подходит для заказов на индивидуальные программы '
          value={tour && tour.direct_link}
        />
        <SingleWrapper label='Ссылка на тур:' comment='' tour={tour} name={'tour_url'}>
          <Input
            action={handleInput}
            name='tour_url'
            value={tour && tour.tour_url}
            error={error}
          />
        </SingleWrapper>
      </ToursFormLayout>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  tour: state.tours.current_tour,
  error: state.tours.error,
  field_key: state.tours.key,
  tour_name: state.tours.tour_name,
  members: state.profile.members,
})

export default connect(mapStateToProps, {
  updateTour,
  updateTourWallpaper,
  setName,
  deleteKey,
  clearErrors,
})(Main)
