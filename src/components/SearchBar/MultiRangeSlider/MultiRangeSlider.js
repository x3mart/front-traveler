import React, { useCallback, useEffect, useState, useRef } from 'react'
import styles from './MultiRangeSlider.module.css'
import {connect} from 'react-redux'
// import MultiRangeSlider from "multi-range-slider-react";

const MultiRangeSlider = ({ min, max, value_min, value_max, onChange }) => {

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  useEffect(() => {
    if(value_min) {
      setMinVal(value_min)
    } else {
      setMinVal(min)
    }
  }, [])

  useEffect(() => {
    if(value_max) {
      setMaxVal(value_max)
    } else {
      setMaxVal(max)
    }
  }, [])


  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const handleSubmit = () => {
    onChange(minVal, maxVal);
  }

  // Get min and max values when their state changes
  // useEffect(() => {
  //   onChange(minVal, maxVal);
  //   // onChange({ min: minVal, max: maxVal });
  // }, [minVal, maxVal]);

  return (
    <>
      <div className={styles.range_wrapper}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          onMouseUp={handleSubmit}
          className={`${styles.thumb} ${styles.thumb__left}`}
          style={{ zIndex: value_min > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          onMouseUp={handleSubmit}
          className={`${styles.thumb} ${styles.thumb__right}`}
        />

        <div className={styles.slider}>
          <div className={styles.slider__track} />
          <div ref={range} className={styles.slider__range} />
        </div>

      </div>
      <div className={styles.slider_values}>
        <div className={styles.slider__left_value}>{minVal}</div>
        <div className={styles.slider__right_value}>{maxVal}</div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MultiRangeSlider)