import React, {useState} from 'react';
import styles from './Regions.module.css';
import {connect} from 'react-redux';
// import Region from "../../../components/BlockChangeCountry/Region";
import {Link} from "react-router-dom";
import Region from "./Region";

const Regions = ({language, data}) => {

    const [active, setActive] = useState('')

    return (
      <>
          <div className={styles.regions_block}>
              {data?.data?.map((item, index) => <Region key={index} active={active === item.name} action={setActive} content={item}/>)}
          </div>
      </>
    );
};

const mapStateToProps = state => ({
    language: state.languages.language,
})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Regions)