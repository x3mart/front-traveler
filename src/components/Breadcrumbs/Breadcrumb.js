import React from 'react';
import styles from './Breadcrumbs.module.css';
import {connect} from 'react-redux';

const Breadcrumb = ({ isLast, children }) => {
  return (
    <>
      <li>
        {children}
      </li>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Breadcrumb)