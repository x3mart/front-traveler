import React from 'react';
import styles from './Home.module.css';
import {connect} from 'react-redux';
import ToursSet from "../../components/BlockRecent/ToursSet";
import Slider from "./modules/Slider";
import Recommendations from "./modules/Recommendations";
import TileCard from "./modules/TileCard";
import Advantages from "./modules/Advantages";
import Regions from "./modules/Regions";
import Experts from "./modules/Experts";
import Reviews from "./modules/Reviews";
import Tile from "./modules/Tile";

const DataSection = ({type, content}) => {

  switch (type) {
    case 'slider': {
      return <Slider data={content}/>
    }
    case 'tile': {
      return <Tile data={content}/>
    }
    case 'recomendations': {
      return <Recommendations data={content} />
    }
    case 'advantages': {
      return <Advantages data={content} />
    }
    case 'regions': {
      return <Regions data={content} />
    }
    case 'experts': {
      return <Experts data={content} />
    }
    case 'reviews': {
      return <Reviews data={content} />
    }
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataSection)