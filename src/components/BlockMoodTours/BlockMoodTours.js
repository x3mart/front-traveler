import React from 'react'
import styles from './BlockMoodTours.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import Title from "../Title";
import Section from "../Section";
import {Link} from "react-router-dom";

const BlockMoodTours = ({ types, block_style, children, className, ...props }) => {
    return (
      <>
          <Section background={'transparent'} padding={'30px 0 0'}>
              <Title title={'Поиск туров по настроению'} sub_title={`А какое настроение сегодня у вас?`} border_color={'blue'}/>

              <div className={styles.types_wrapper}>
                  {types?.map((item, index) => (
                    <Link key={index} to={item.public_url}>
                        {item.name}
                    </Link>
                  ))}
              </div>

          </Section>



      </>
    );
};

export default BlockMoodTours
