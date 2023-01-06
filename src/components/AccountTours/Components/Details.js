import React, {useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import RadioInput from '../FormFields/RadioInput'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'

import {connect} from 'react-redux'
import {
  updateTour,
  deleteKey,
  clearErrors,
} from '../../../redux/actions/toursActions'

import ToursFormLayout from "../../../layouts/account/ToursFormLayout";

const comfort_level_bubbles = [
  'Туристы живут в палатках, кемпингах или хижинах. Удобств нет или они находятся на улице',
  'Гостевые дома или гостиницы 1*. Удобства могут быть в каждом номере или на этаже',
  'Апартаменты, коттеджи или гостиницы 2*. Есть дополнительный сервис, например: питание или уборка',
  'Гостиницы 3* или виллы. Удобства в каждом номере, на территории могут быть спа-зона, бассейн и тренажерный зал',
  'Гостиницы 4 и 5*, бутик-отели или глэмпинги. Есть все услуги, включая эксклюзивные вроде собственного бассейна'
]

const difficulty_level_bubbles = [
  'Подходит для всех вне зависимости от физической подготовки и возраста',
  'Предполагает умеренную физическую нагрузку, подходящую новичкам',
  'Не требует специальных навыков, но туристы должны быть в хорошей физической форме: экспедиции, продолжительные сплавы и т.п.',
  'Необходим опыт, специальные навыки и отличная физическая форма: восхождения, сложные сплавы и т.п.',
  'Обязателен опыт и спортивная подготовка. Маршруты категорийной сложности: экстремальные экспедиции, категорийные сплавы и т.п.'
]

const Details = ({
                   tour,
                   updateTour,
                   languages,
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

  const handleCantBlancInput = (name, value) => {
    updateTour({...tour, [name]: value ? value : null})
  }

  return (
    <>
      <ToursFormLayout
        section_slug={'details'}
        section_name={'Детали'}
        tour_id={match.params.id}
        forward_url={'important'}
        backward_url={'accommodation'}
        submit_url={''}
      >
        <SingleWrapper
          label='На каком языке говорят в путешествии'
          comment='Выбирайте языки, на которых будут говорить в путешествии. Не более трёх языков..'
          tour={tour} name='languages'
        >
          <SelectInput
            action={handleInput}
            name='languages'
            label=''
            val={tour && tour.languages}
            options={languages}
            multiple={true}
            error={error}
          />
        </SingleWrapper>
        <RadioInput
          action={handleInput}
          name='difficulty_level'
          label='Укажите сложность программы'
          value={tour && tour.difficulty_level}
          comment='Уровень сложности должен соответствовать нагрузкам, которые ожидаются в путешествии. Градацию уровней сложности можно посмотреть при наведении на оценку..'
          bubbles={difficulty_level_bubbles}
        />
        <SingleWrapper
          label='Кратко опишите в чем заключается сложность тура'
          comment='Будет показан в описании тура вместо стандартного текста'
          tour={tour} name='difficulty_description'
        >
          <TextArea
            action={handleInput}
            name='difficulty_description'
            label=''
            value={tour && tour.difficulty_description}
            rows='7'
            error={error}
          />
        </SingleWrapper>
        <RadioInput
          action={handleInput}
          name='comfort_level'
          label='Как вы оцениваете уровень комфорта в путешествии?'
          value={tour && tour.comfort_level}
          comment='Комфорт - один из главных критериев выбора путешествия. Градацию уровней комфорта можно посмотреть при наведении на оценку.'
          bubbles={comfort_level_bubbles}
        />
        <DoubleWrapper ratio='1-2' tour={tour}>
          <Input
            action={handleCantBlancInput}
            name='age_starts'
            label='Возраст участников от:'
            value={tour && tour.age_starts}
            error={error}
          />
          <Input
            action={handleCantBlancInput}
            name='age_ends'
            label='Возраст участников до:'
            value={tour && tour.age_ends}
            error={error}
          />
        </DoubleWrapper>

        <CheckboxInput
          action={handleInput}
          name='babies_alowed'
          label='Возможно участие с маленькими детьми'
          comment=''
          value={tour && tour.babies_alowed}
        />
      </ToursFormLayout>
    </>
  )
}

const mapStateToProps = state => ({
  languages: state.tours.languages,
  tour: state.tours.current_tour,
  error: state.tours.error,
  field_key: state.tours.key,
})

export {difficulty_level_bubbles}
export  default connect(mapStateToProps, {
  updateTour,
  deleteKey,
  clearErrors,
})(Details)
