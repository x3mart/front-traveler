import React, {useEffect, useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import MetaTags from "react-meta-tags";
import MainLayout from "../../../layouts/MainLayout";
import {Link, Redirect, useHistory} from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import {
  clear_single_order,
  get_single_order,
} from "../../../redux/actions/orderActions";
import Section from "../../../components/Section";
import useScript from "../../../hooks/useScript";

const OrderSuccess = ({
                        language,
                        match,
                        get_single_order,
                        clear_single_order,
                        order,
                      }) => {

  const history = useHistory()

  useEffect(() => {
    get_single_order(match.params.id)
    const timer = setTimeout(() => history.push(`/${language}/account/orders`), 3000)
    return () => {
      clear_single_order()
      clearTimeout(timer)
    }
  }, [])

  useScript(`
            (window["rrApiOnReady"] = window["rrApiOnReady"] || []).push(function() {
            try {
                rrApi.order({
                    transaction: "${match.params.id}",
                    items: [
                        { id: ${order?.tour}, qnt: ${order?.travelers_number},  price: ${order?.price} },
                    ]
                });
            } catch(e) {}
        })

  `);


  return (
    <>
      <MetaTags>
        <title>Удачная транзакция</title>
        <meta name='description' content=''/>
        <link rel='icon' href='/favicon.ico'/>
      </MetaTags>
      <MainLayout page={'orders'}>

        <Section padding={'0px'}>
          <div className={styles.success_page_wrapper}>
            <div className={styles.success_page_title}>
              Транзакция успешно завершена
            </div>
            <Link to={`/${language}/account/orders`} className={styles.success_page_button}>
              Перейти в заказы
            </Link>
          </div>
        </Section>
      </MainLayout>
    </>
  );
};

const mapStateToProps = state => ({
  language: state.languages.language,
  tour: state.tours.current_tour,
  order: state.orders.order,
})
const mapDispatchToProps = {
  get_single_order,
  clear_single_order,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderSuccess)