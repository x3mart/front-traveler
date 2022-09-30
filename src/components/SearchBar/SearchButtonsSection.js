import React from 'react';
import {connect} from 'react-redux';
import SearchData from "./SearchPopUp/SearchData";

const SearchButtonsSection = ({
                                submit_action,
                                reset_action,
                                filters,
                                // current_filters,
                              }) => {


  return (
    <>
      {filters?.map((item, index) => item.type !== 'start_destination' && <SearchData
        key={index}
        filter={item}
        submit_action={submit_action}
        reset_action={reset_action}
        // current_filters={current_filters}
      />)}
    </>
  );
};

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchButtonsSection)