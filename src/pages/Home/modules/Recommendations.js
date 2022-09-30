import React, {useEffect} from 'react';
import styles from './Recommendations.module.css';
import {connect} from 'react-redux';
import useScript from "../../../hooks/useScript";

const Recommendations = () => {

  // useEffect(() => {
  //
  //   const inlineScript = document.createElement('script');
  //   inlineScript.innerHTML = `
  //       document.addEventListener('DOMContentLoaded', function () {
  //         console.log('script executed')
  //         retailrocket.markup.render();
  //       }, false);
  //     `;
  //   document.body.append(inlineScript);
  //
  //   // componentWillUnmount() {}
  //   return () => {
  //     inlineScript.remove();
  //   };
  // }, []);

  useEffect(() => {

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
        retailrocket.markup.render();
      `;
    document.body.append(inlineScript);

    // componentWillUnmount() {}
    return () => {
      inlineScript.remove();
    };
  }, []);

  // useScript(`
  //   document.addEventListener('DOMContentLoaded', function () {
  //     retailrocket.markup.render();
  //   }, false);
  // `);

  return (
    <>
      <div data-retailrocket-markup-block="62d9916f3c4bedd3ab07a55a" ></div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recommendations)