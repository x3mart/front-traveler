import React from 'react'
import styles from './FormGetTour.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button'
import BlockChangePlace from '../BlockChangePlace/BlockChangePlace'
import BlockCalendar from '../BlockCalendar/BlockCalendar'
import MagnifierIcon from '../../assets/img/magnifier.svg';
import cn from 'classnames';

const FormGetTour = ({ form_style, className, children }) => {    
    return (
        <div
            className={ cn(styles.FormGetTour, className, {
                [styles.first_form_get_tour]: form_style == 'first_form_get_tour',
                [styles.second_form_get_tour]: form_style == 'second_form_get_tour',
                [styles.third_form_get_tour]: form_style == 'third_form_get_tour'
            })}
        >
            {children}
            <Input choice="place" placeholder="Страна, регион или город" />
            <BlockChangePlace /> 
            <Input choice="calendar" placeholder="Выберите даты" />
            <BlockCalendar />
            <Button appearance='primary'><MagnifierIcon />Подобрать тур</Button>  
        </div>
    );
};

export default FormGetTour