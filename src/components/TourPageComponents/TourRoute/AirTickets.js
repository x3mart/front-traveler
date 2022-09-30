import React from "react";
import styles from './TourRoute.module.css';

import dateFormat, { masks } from 'dateformat'

const AirTickets = ({start_date, start_city, start_time, finish_date, finish_city, finish_time, text}) => {

  return (
    <>
      <div className={styles.tour_route_container}>
        <h3>Авиабилеты</h3>
        {/*<div className={styles.tour_route_map}>*/}
        {/*  Карта*/}
        {/*</div>*/}
        <div className={styles.tour_route_data_container}>
          <div className={styles.tour_route_data}>
            <div className={styles.tour_route_data_title}>Старт:</div>
            <div className={styles.tour_route_data_data}>{dateFormat(new Date(start_date), 'dd.mm.yyyy')}, {start_city} {start_time ? ', ' + start_time + ' по местному времени' : ''}</div>
            {/*<div className={styles.tour_route_data_data}>{dateFormat(new Date(start_date), 'dd.mm.yyyy')}, {start_city?.full_name} {start_time ? ', ' + start_time + ' по местному времени' : ''}</div>*/}
          </div>
          <div className={styles.tour_route_data}>
            <div className={styles.tour_route_data_title}>Финиш:</div>
            <div className={styles.tour_route_data_data}>{dateFormat(new Date(finish_date), 'dd.mm.yyyy')}, {finish_city} {finish_time ? ', ' + finish_time + ' по местному времени' : ''}</div>
            {/*<div className={styles.tour_route_data_data}>{dateFormat(new Date(finish_date), 'dd.mm.yyyy')}, {finish_city?.full_name} {finish_time ? ', ' + finish_time + ' по местному времени' : ''}</div>*/}
          </div>
        </div>
        <div className={styles.air_tickets_text}>
          {text}
        </div>
      </div>

    </>)
}

export default AirTickets
