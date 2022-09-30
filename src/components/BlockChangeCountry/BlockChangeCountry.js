import React, {useState} from 'react'
import styles from './BlockChangeCountry.module.css'
import cn from 'classnames'
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import russia from './img/russia.svg'
import russia_active from './img/russia_active.svg'
import africa from './img/africa.svg'
import africa_active from './img/africa_active.svg'
import america from './img/america.svg'
import america_active from './img/america_active.svg'
import asia from './img/asia.svg'
import asia_active from './img/asia_active.svg'
import australia from './img/australia.svg'
import australia_active from './img/australia_active.svg'
import europe from './img/europe.svg'
import europe_active from './img/europe_active.svg'
// import EuropeIcon from '../../assets/img/europe.svg'
// import AsiaIcon from '../../assets/img/asia.svg'
// import AfricaIcon from '../../assets/img/africa.svg'
// import SouthAmericaIcon from '../../assets/img/south-america.svg'
// import AustraliaIcon from '../../assets/img/australia.svg'
// import NorthAmericaIcon from '../../assets/img/north-america.svg'
import Section from "../Section";
import Title from "../Title";
import {Link} from "react-router-dom";
import {getHomePage} from "../../redux/actions/toursActions";
import {connect} from "react-redux";
import Region from "./Region";

const BlockChangeCountry = ({language, regions}) => {

  const [active, setActive] = useState('')

  return (
    <>
      <Section padding={'30px 0'}>
        <Title title={'Мир большой, сделайте первый шаг к его покорению'} sub_title={`Континенты и страны у твоих ног`}
               border_color={'blue'}/>
        <div className={styles.change_country_block}>
          {regions?.map((item, index) => <Region key={index} name={item.name} active={active === item.name} action={setActive} language={language} data={item}/>)}
        </div>
      </Section>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BlockChangeCountry)
