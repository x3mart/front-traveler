import React from 'react';
import styles from './Breadcrumbs.module.css';
import {connect} from 'react-redux';

const Breadcrumb = ({ isLast, children }) => {
  return (
    <>
      <span>
        {children}
      </span>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Breadcrumb)