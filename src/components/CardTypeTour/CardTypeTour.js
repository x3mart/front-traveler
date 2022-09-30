import React from 'react'
import styles from './CardTypeTour.module.css';
import cn from 'classnames';
import Tag from '../Tag/Tag'
import Htag from '../Htag/Htag'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
    


const CardTypeTour = ({ data, block_style, children, className, language }) => {
    return (
      <>

        <Link to={`${data?.public_url}`} className={styles.card_tour} >
            <Tag size='m' style={{backgroundImage: `url(${data?.tmb_image ? data?.tmb_image : '../../assets/img/static-img/Rectangle8.png'})`}}>
                <div className={styles.card_type_tour_content}>

                    <Htag tag='h4'>{data?.name?.length>18 ? data?.name?.substring(0, 18) + '...' : data?.name}</Htag>
                    <Htag tag='h3'>туры: {data?.tours_count}</Htag>

                </div>
            </Tag>

        </Link>

    </>
    );
};

const mapStateToProps = state => ({
    language: state.languages.language,
})

export default connect(mapStateToProps)(CardTypeTour)
