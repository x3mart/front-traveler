import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TourModeration from "../layouts/TourModeration";
import TourBody from "./Tour/TourBody";
import {getTourAccountReview} from "../redux/actions/toursActions";

const TourModerationPage = ({location, match, getTourAccountReview, }) => {

  useEffect(() => {
    if(match) {
      getTourAccountReview(match.params.id)
      return () => {
        getTourAccountReview(match.params.id, 'reset')
        localStorage.removeItem('admin_access')
      }
    }
  }, [match])

  const token = location.search.split('=')[1]

  localStorage.setItem('admin_access', token)


  return (
    <>
      <TourModeration tour_id={match?.params.id}>
        <TourBody/>
      </TourModeration>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {getTourAccountReview}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TourModerationPage)