import React, {useState, useEffect} from 'react'



const RadioInput = ({ label, comment, action, name, value }) => {
  const [data, setData] = useState('')


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
            <label className='radio-input-container'>
              <input
                type='radio'
                checked={data == 1}
                name='radio'
                value={1}
                onChange={handleData}
              />
              <span className='checkmark'>1</span>
            </label>
            <label className='radio-input-container'>
              <input
                type='radio'
                checked={data == 2}
                name='radio'
                value={2}
                onChange={handleData}
              />
              <span className='checkmark'>2</span>
            </label>
            <label className='radio-input-container'>
              <input
                type='radio'
                checked={data == 3}
                name='radio'
                value={3}
                onChange={handleData}
              />
              <span className='checkmark'>3</span>
            </label>
            <label className='radio-input-container'>
              <input
                type='radio'
                checked={data == 4}
                name='radio'
                value={4}
                onChange={handleData}
              />
              <span className='checkmark'>4</span>
            </label>
            <label className='radio-input-container'>
              <input
                type='radio'
                checked={data == 5}
                name='radio'
                value={5}
                onChange={handleData}
              />
              <span className='checkmark'>5</span>
            </label>
          </div>
      <div className='my-tours-input-explanations'>{comment}</div>
        </div>
      </div>
    </form>
  )
}

export default RadioInput
