import React, {useEffect, useState} from 'react';
import styles from './Tile.module.css';
import {connect} from 'react-redux';
import CardTypeTour from "../../../components/CardTypeTour/CardTypeTour";
import TileCard from "./TileCard";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Tile = ({data}) => {

  const [quantity, setQuantity] = useState(3)

  const { width } = useWindowDimensions();

  useEffect(() => {
    if(width >= 1024) {
      setQuantity(data?.desktop_quantity)
    } else if(width < 1024 && width >= 568) {
      setQuantity(data?.tablet_quantity)
    } else {
      setQuantity(data?.mobile_quantity)
    }
  }, [width])

  return (
    <>
      <div
      className={styles.card_collection_type}
    >
      {data?.data?.map((item, index) => <TileCard key={index} data={item} quantity={quantity}/>)}
    </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile)