import React, {useState, useEffect} from 'react';
import styles from './InfoBlock.module.css';

const InfoBlock = ({ border_color, height_block, children }) => {

  const [borderStyle, setBorderStyle] = useState({})
  const [height, setHeight] = useState()

  useEffect(() => {
    if (border_color === 'orange') {
      setBorderStyle('orange_border')
    } else if (border_color === 'blue') {
      setBorderStyle('blue_border')
    } else if (border_color === 'white') {
      setBorderStyle('white_border')
    }
  }, [border_color])

  useEffect(() => {
    if (height_block === 'travel_page') {
      setHeight(styles.travel_page)
    }
  }, [height_block])

  return (
    <div className={`info_block_text ${borderStyle} ${height ? height : ''}`}>
      {children}
    </div>
  )
    
}

export default InfoBlock

