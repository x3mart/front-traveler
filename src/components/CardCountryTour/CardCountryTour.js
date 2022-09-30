import React from 'react'
import styles from './CardCountryTour.module.css';
import Tag from '../Tag/Tag';
import Htag from '../Htag/Htag';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
    


const CardCountryTour = ({ data, language }) => {
    return (
        <Link to={`${data?.public_url}`} className={styles.card_tour} >
            <Tag size='s' style={{backgroundImage: `url(${data?.tmb_image ? data?.tmb_image : '../../assets/img/static-img/Rectangle8.png'})`}}>
                <div className={styles.card_tour_content}>

                    <Htag tag='h4'>{data?.name_ru?.length>18 ? data?.name_ru?.substring(0, 18) + '...' : data?.name_ru}</Htag>

                </div>
            </Tag>
             
        </Link>
    );
};

const mapStateToProps = state => ({
  language: state.languages.language,
})

export default connect(mapStateToProps)(CardCountryTour)