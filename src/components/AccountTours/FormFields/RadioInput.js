import React, {useState, useEffect} from 'react'
import styles from '../../TourPageComponents/TourInfoBlocks/TourInfoBlocks.module.css';


const RadioInput = ({ label, comment, action, name, value, bubbles=null }) => {
  
  const [data, setData] = useState('')
  const [bubbleActive, setBubbleActive] = useState(null)

  useEffect(() => {
    if (value) {
      setData(value)
    }
  }, [value])

  const handleData = e => {
    setData(e.target.value)
    action(name, e.target.value)
  }
  return (
    <form id={name}>
      <div className='my-tours-input-section'>
        <div className='input-label'>{label}</div>
        <div className='my-tours-input-full-radio'>
          <div className='radio-wrapper'>
            <label
              className='radio-input-container'
              onMouseOver={() => setBubbleActive(`${name}_1`)}
              onMouseOut={() => setBubbleActive(null)}
              style={{position: 'relative'}}
            >
              <input
                type='radio'
                checked={data == 1}
                name='radio'
                value={1}
                onChange={handleData}
              />
              <span className='checkmark'>1</span>
              {!!bubbles && bubbleActive == `${name}_1` && (
                <div
                className={styles.tour_info_block_language_name}
                style={{
                position: 'absolute',
                bottom: '75px',
                left: '-10px',
                minWidth: '400px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                borderRadius: 8,
                backgroundColor: '#fff',
                }}
              >
                <div>{bubbles[0]}</div>
              </div>
              )}
            </label>
            <label
              className='radio-input-container'
              onMouseOver={() => setBubbleActive(`${name}_2`)}
              onMouseOut={() => setBubbleActive(null)}
              style={{position: 'relative'}}
            >
              <input
                type='radio'
                checked={data == 2}
                name='radio'
                value={2}
                onChange={handleData}
              />
              <span className='checkmark'>2</span>
              {!!bubbles && bubbleActive == `${name}_2` && (
                <div
                className={styles.tour_info_block_language_name}
                style={{
                position: 'absolute',
                bottom: '75px',
                left: '-100px',
                minWidth: '400px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                borderRadius: 8,
                backgroundColor: '#fff',
                }}
              >
                <div>{bubbles[1]}</div>
              </div>
              )}
            </label>
            <label
              className='radio-input-container'
              onMouseOver={() => setBubbleActive(`${name}_3`)}
              onMouseOut={() => setBubbleActive(null)}
              style={{position: 'relative'}}
            >
              <input
                type='radio'
                checked={data == 3}
                name='radio'
                value={3}
                onChange={handleData}
              />
              <span className='checkmark'>3</span>
              {!!bubbles && bubbleActive == `${name}_3` && (
                <div
                className={styles.tour_info_block_language_name}
                style={{
                position: 'absolute',
                bottom: '75px',
                left: '-160px',
                minWidth: '400px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                borderRadius: 8,
                backgroundColor: '#fff',
                }}
              >
                <div>{bubbles[2]}</div>
              </div>
              )}
            </label>
            <label 
                className='radio-input-container'
                onMouseOver={() => setBubbleActive(`${name}_4`)}
                onMouseOut={() => setBubbleActive(null)}
                style={{position: 'relative'}}
            >
              <input
                type='radio'
                checked={data == 4}
                name='radio'
                value={4}
                onChange={handleData}
              />
              <span className='checkmark'>4</span>
              {!!bubbles && bubbleActive == `${name}_4` && (
                <div
                className={styles.tour_info_block_language_name}
                style={{
                position: 'absolute',
                bottom: '75px',
                left: '-160px',
                minWidth: '400px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                borderRadius: 8,
                backgroundColor: '#fff',
                }}
              >
                <div>{bubbles[3]}</div>
              </div>
              )}
            </label>
            <label 
                className='radio-input-container' 
                style={{position: 'relative'}}
                onMouseOver={() => setBubbleActive(`${name}_5`)}
                onMouseOut={() => setBubbleActive(null)}
            >
              <input
                type='radio'
                checked={data == 5}
                name='radio'
                value={5}
                onChange={handleData}              
              />
              <span className='checkmark'>5</span>
              {!!bubbles && bubbleActive == `${name}_5` && (
                <div
                className={styles.tour_info_block_language_name}
                style={{
                position: 'absolute',
                bottom: '75px',
                left: '-160px',
                minWidth: '400px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                borderRadius: 8,
                backgroundColor: '#fff',
                }}
              >
                <div>{bubbles[4]}</div>
              </div>
              )}
            </label>
          </div>
      <div className='my-tours-input-explanations'>{comment}</div>
        </div>
      </div>
    </form>
  )
}

export default RadioInput
