import React from 'react';
import {connect} from 'react-redux';

const AccountButton = ({action, active, data}) => {
  return (
    <>
      <button className={active ? 'active' : ''}
              onClick={() => action(data.id)}>{data.display_str}
      </button>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountButton)