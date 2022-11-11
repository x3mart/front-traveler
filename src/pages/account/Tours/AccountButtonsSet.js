import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getExpertToursFilterset} from "../../../redux/actions/toursActions";
import AccountButton from "./AccountButton";
import {useHistory} from "react-router-dom";

const AccountButtonsSet = ({filterset, current, language, getExpertToursFilterset,}) => {

  const history = useHistory()

  const [active, setActive] = useState(null)

  const handleActive = (n) => {
    if(n) {
      history.push(`/account/tours/list?filter=${n}`)
    } else {
      history.push(`/account/tours/list`)
    }
  }

  useEffect(() => {
    setActive(current)
  },[current])

  useEffect(() => {
    console.log(filterset?.length === 0)
    if(filterset?.length === 0) {
      getExpertToursFilterset()
    }
  }, [filterset])

  return (
    <>
      <div className='control-buttons-set'>
        <button className={!active ? 'active' : ''} onClick={() => handleActive()}>Все</button>
        {filterset?.map((item, index) =>
          <AccountButton
            active={active === item.id}
            action={handleActive}
            key={index}
            data={item}
          />)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  language: state.languages.language,
  filterset: state.tours.expert_tours_filterset,
})
const mapDispatchToProps = {
  getExpertToursFilterset,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountButtonsSet)