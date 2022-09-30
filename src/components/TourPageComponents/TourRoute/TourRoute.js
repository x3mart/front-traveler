import React, {useEffect, useState} from "react";
import styles from './TourRoute.module.css';

import dateFormat, { masks } from 'dateformat'
import {Map, Placemark, Polyline, ZoomControl, SearchControl} from "react-yandex-maps";

const TourRoute = ({start_date, start_city, start_time, finish_date, finish_city, finish_time, ya_map = null}) => {

  const [yaMap, setYaMap] = useState(null)

  useEffect(() => {
    if(yaMap) {
      yaMap.behaviors.disable('scrollZoom')
    }
  }, [yaMap])

  return (
    <>
      <div className={styles.tour_route_container}>
        <h3>Маршрут</h3>
        {ya_map && <div className={styles.tour_route_map}>
          <Map
            width={728}
            height={398}
            className={styles.tour_route_map_map}
            state={{center: ya_map && ya_map.center, zoom: ya_map && ya_map.zoom, }}
            instanceRef={r => setYaMap(r)}
            // onClick={handleMapClick} className={'map-section-map'}
            // instanceRef={map => setMap(map)}
            // onBoundsChange={onBoundsChange}
          >
            {ya_map && ya_map.coords && ya_map.coords.map((item, index) => (
              <Placemark
                key={index}
                geometry={item}
                properties={{iconContent: index + 1}}
                options={{draggable: false}}
                // ref={`mark${index+1}`}
                // onGeometryChange={(e) => handlePlaceMarkDrag(e, index)}
              />
            ))}


            <Polyline
              // instanceRef={ref => ref && draw(ref)}
              geometry={ya_map && ya_map.coords}
              options={{
                // Цвет обводки.
                strokeColor: "#0000FF",
                // Ширина обводки.
                strokeWidth: 5
              }}
            />
            <ZoomControl options={{float: 'right'}}/>
          </Map>
        </div>}
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
      </div>

    </>)
}

export default TourRoute
