import React, {useEffect, useState} from 'react';
// import styles from './MapSection.module.css';

import {connect} from 'react-redux'
import {
  updateTour,
} from '../../../redux/actions/toursActions'

import {Map, Polyline, Placemark, ZoomControl, SearchControl} from 'react-yandex-maps';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const MapSection = ({tour, updateTour, }) => {

  const [coords, setCoords] = useState([])
  const [newCoords, setNewCoords] = useState(false)
  const [ind, setInd] = useState(null)
  const [loading, setLoading] = useState(false)
  const [map, setMap] = useState(null)
  const [center, setCenter] = useState([55.76, 37.64])
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if(tour && tour.map) {
      setCoords(tour.map.coords)
      setCenter(tour.map.center)
      setZoom(tour.map.zoom)
    }
  }, [tour])

  // useEffect(() => {
  //   if(map) {
  //     map.behaviors.disable('scrollZoom')
  //   }
  // }, [map])

  useEffect(() => {
    updateTour({
      ...tour,
      map: {
        ...tour.map,
        coords: coords,
        center: center,
        zoom: zoom,
      }
    })
  }, [coords, center, zoom])

  useEffect(() => {
    if((loading && ind) || (loading && ind === 0)) {
      let arr = coords
      arr.splice(ind, 1)
      setCoords(arr)
      setInd(null)
      setLoading(false)
    }
  }, [ind, loading, coords])

  useEffect(() => {
    if(newCoords && loading) {
      setNewCoords(false)
      setLoading(false)
    }
  }, [newCoords, ind, loading])

  const handleMapClick = (e) => {
    setCoords([
      ...coords,
      e.get('coords')
    ])
  }

  const handlePlaceMarkDrag = (e, i) => {
    setLoading(true)
    let arr = coords
    arr[i] = e.get('target').geometry.getCoordinates()
    setCoords(arr)
    setNewCoords(true)

  }

  const handleDotDelete = (i) => {
    setLoading(true)
    setInd(i)
  }

  const onBoundsChange = () => {
    setCenter(map.getCenter())
    setZoom(map.getZoom())
  };


  return (
    <>
      <div className={'map-section'}>
        <Map
          state={{ center: center, zoom: zoom, controls: [], }}
          onClick={handleMapClick} className={'map-section-map'}
          instanceRef={map => setMap(map)}
          onBoundsChange={onBoundsChange}
        >
          {coords.map((item, index) => (
            <>
              <Placemark
                key={index}
                geometry={item}
                properties={{iconContent: index+1}}
                options={{draggable: true}}
                onGeometryChange={(e) => handlePlaceMarkDrag(e, index)}
              />
            </>
          ))}


          {!loading && <Polyline
            // instanceRef={ref => ref && draw(ref)}
            geometry={coords}
            options={{
              // Цвет обводки.
              strokeColor: "#0000FF",
              // Ширина обводки.
              strokeWidth: 5
            }}
          />}
          <ZoomControl options={{ float: 'right' }} />
          <SearchControl options={{ float: 'right', provider: 'yandex#search' }} />
        </Map>
        <div className="map-section-dots">
          {!loading && coords.map((item, i) => (
            <>
              <div key={i} className="map-section-dot">
                <div>Точка{' '}{i+1}</div>
                <div className={'delete-dot-button'} onClick={() => handleDotDelete(i)}>×</div>
              </div>
            </>
          ))}

          {loading && <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress/>
          </Box>}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  updateTour,
})(MapSection)