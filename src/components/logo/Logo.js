import React, { useEffect, useState } from 'react'
import Logo1 from '../../assets/img/TM.svg'
import Logo2 from '../../assets/img/Logoname.svg'
import LogoWhite from '../../assets/img/Logonamewhite.svg'
import {Link} from 'react-router-dom'

const Logo = ({ text_color, language }) => {
  const [logoStyle, setLogoStyle] = useState(Logo2)
  useEffect(() => {
    text_color === 'white' ? setLogoStyle(LogoWhite) : setLogoStyle(Logo2)
  }, [text_color])
  return (
    <Link to={`/${language}`} className='header_logo_block'>
        <div className='header_logo_block_main_icon'>
          <img src={Logo1} alt='logo' />
        </div>
        <div className='header_logo_block_second_icon'>
          <img src={logoStyle} alt='logo name' />
        </div>
    </Link>
  )
}

export default Logo
