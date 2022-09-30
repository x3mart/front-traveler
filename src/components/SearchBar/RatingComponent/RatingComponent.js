import React, {useEffect, useState} from 'react'
import styles from './RatingComponent.module.css'
import {connect} from 'react-redux'
import Rating from 'react-rating'
import check from "./img/check.svg";
import empty_star from "./img/empty_star.svg";
import full_star from "./img/full_star.svg";

const RatingComponent = ({type, data, onChange}) => {


  const [rating, setRating] = useState(data ? data : 5)
  const [number, setNumber] = useState(5)
  const [numArr, setNumArr] = useState([])


  useEffect(() => {
    let arr = []
    for(let i = 1; i <= number; i++) {
      arr = [...arr, i]
    }
    setNumArr(arr)
  }, [])

  const handleRating = (rate) => {
    setRating(rate)
    onChange(rate)
    // other logic
  }

  return (
    <>
      <div className={styles.rating_wrapper}>
        {type === 'rating'
          ?
          <Rating
            onClick={handleRating}
            initialRating={rating}
            className={styles.rating_wrapper}
            emptySymbol={numArr.map(i => <img className={`${styles.rating_star} ${i !== 1 ? styles.not_first : ''}`} src={empty_star} alt=""/>)}
            fullSymbol={numArr.map(i => <img className={`${styles.rating_star} ${i !== 1 ? styles.not_first : ''}`} src={full_star} alt=""/>)}
          />
          :
          <Rating
          onClick={handleRating}
          initialRating={rating}
          fillColor={'#84BB59'}
          className={styles.rating_wrapper}
          emptySymbol={numArr.map(i => <div key={i}
                                            className={`${styles.radio_button} ${i !== 1 ? styles.uncut : ''}`}></div>)}
          fullSymbol={numArr.map(i => <div key={i}
                                           className={`${styles.radio_button} ${i !== 1 ? styles.uncut : ''} ${styles.active}`}>{i === rating &&
            <img src={check} alt=""/>}</div>)}
        />}
        {/*{numArr.map(i => <Radio key={i} uncut={i !== 1} active={i <= rating} set={i === rating} hoverAction={} index={i}/>)}*/}

      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RatingComponent)