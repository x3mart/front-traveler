import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {
  clearErrors,
} from '../../../redux/actions/toursActions'
import Button from "./Button";

const SubmitButton = ({
                        text,
                        color = 'button-success',
                        action,
                        action2,
                        section,
                        direction = 'forward',
                        clearErrors,
                      }) => {

  const [submitted, setSubmitted] = useState(false)

  // useEffect(() => {
  //   if (submitted && res_status && res_status >= 200 && res_status < 300) {
  //     action2(direction)
  //     action('ok')
  //     setSubmitted(false)
  //   } else if (submitted && res_status >= 400 && res_status < 500) {
  //     action('error')
  //     // setSubmitted(false)
  //   } else if (submitted && res_status >= 500 && res_status < 600) {
  //     action('popup')
  //     setSubmitted(false)
  //   }
  //   return () => {
  //     setSubmitted(false)
  //   }
  // }, [submitted, res_status])

  // const handleAction = e => {
  //   e.preventDefault()
  //   if(direction === 'submit') {
  //     tourToServer({
  //       ...tour,
  //       is_draft: false,
  //       on_moderation: true,
  //       section: section,
  //     }, tour.id)
  //   } else {
  //     tourToServer({
  //       ...tour,
  //       section: section,
  //     }, tour.id)
  //   }
  //   setSubmitted(true)
  // }

  const handleAction = async () => {
    await clearErrors().then(() => action2(direction)).then(() => action(section))
  }
  const handleModeration = async () => {
    await clearErrors().then(() => action())
  }

  return (
    <>
      <Button
        text={text}
        color={color}
        type='button'
        action={direction == 'submit' ? handleModeration : handleAction}
      />
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  res_status: state.tours.res_status,
})

export default connect(mapStateToProps, {
  clearErrors,
})(SubmitButton)