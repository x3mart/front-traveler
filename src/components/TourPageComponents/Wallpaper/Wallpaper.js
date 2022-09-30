import React from "react";
import styles from './Wallpaper.module.css';
import TourPage from "../../../pages/TourPage/TourPage";

const Wallpaper = ({image}) => {
  return (
    <>
      <div className={styles.wallpaper_container} style={{backgroundImage: 'url(' + image + ')'}}/>
    </>
  )
}

export default Wallpaper
