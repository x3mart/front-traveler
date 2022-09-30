import React, { useState, useEffect } from 'react'

const SideBarTours = () => {

    const [status, setStatus] = useState({
        common: false,
        prices: false,
        options: false,
        details: false,
        day: false,
        leader: false,
        conditions: false,
        services: false,
        important: false,
        photos: false,
    })

    

  return (
    <>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>
          Общее
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.common ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg>
        </div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>
          Цены и даты
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.prices ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg>
        </div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>Условия отмены<svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.options ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg></div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>Детали<svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.details ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg></div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>День за днем<svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.day ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg></div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>Турлидер<svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.leader ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg></div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>Условия<svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.conditions ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg></div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>Доп. услуги<svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.services ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg></div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>Важно знать<svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.important ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg></div>
      </li>
      <li className='li-border-none'>
        <div className='tours-submenu-name-wrap'>Фотографии<svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='8.5'
              cy='8.5'
              r='8.5'
              fill={status.photos ? '#84BB59' : '#BFBFBF'}
            />
            <path
              d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
              fill='white'
            />
          </svg></div>
      </li>
    </>
  )
}

export default SideBarTours
