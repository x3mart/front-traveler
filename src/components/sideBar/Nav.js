import React, { useState, useEffect } from 'react'

import NavItem from './NavItem'

const Nav = ({ status, menu_item, secondary_item, tour_id }) => {
  const [name, setName] = useState('account')

  const expert = [
    {
      name: 'account',
      title: 'Личный кабинет',
    },
    {
      name: 'tours/list',
      title: 'Мои туры',
      secondary: true,
    },
    {
      name: 'chat',
      title: 'Чат',
    },
    {
      name: 'profile',
      title: 'Мой профиль',
    },
    {
      name: 'orders',
      title: 'Заказы',
    },
    {
      name: 'settings',
      title: 'Настройка',
    },
    {
      name: 'props',
      title: 'Реквизиты',
    },
    {
      name: 'requests',
      title: 'Запросы на проверку',
    },
    {
      name: 'team',
      title: 'Моя команда',
    },
  ]

  const customer = [
    {
      name: 'account',
      title: 'Личный кабинет',
    },
    {
      name: 'history',
      title: 'История путешествий',
    },
    {
      name: 'orders',
      title: 'Мои брони',
    },
    {
      name: 'chat',
      title: 'Чат',
    },
    {
      name: 'profile',
      title: 'Настройки профиля',
    },
  ]

  return (
    <>
      <ul style={{ position: 'relative' }}>
        {status === 'experts' &&
          expert.map(item => (
            <NavItem
              key={item.name}
              action={setName}
              name={item.name}
              active={menu_item}
              title={item.title}
              secondary_nav={item.secondary}
              secondary_item={secondary_item}
              tour_id={tour_id}
            />
          ))}
        {status === 'customers' &&
          customer.map(item => (
            <NavItem
              key={item.name}
              action={setName}
              name={item.name}
              active={menu_item}
              title={item.title}
              secondary_nav={item.secondary}
            />
          ))}
      </ul>
    </>
  )
}

export default Nav
