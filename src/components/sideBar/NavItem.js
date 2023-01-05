import React, {useState, useEffect} from 'react'
import {
  HomeOutlined,
  GlobalOutlined,
  CommentOutlined,
  UserOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  setPage,
} from '../../redux/actions/authActions'
import SecondaryNav from './SecondaryNav'
// import SvgColor from 'react-svg-color'

const NavItem = ({
                   language,
                   setPage,
                   name,
                   active,
                   title,
                   secondary_nav,
                   secondary,
                   secondary_item,
                   tour_id,
                   verifications_confirmed
                 }) => {
  
  const [request_icon_default_color, setRequestIconDefaultColor] = useState('#000000')

  useEffect(() => {
    let color
    if (verifications_confirmed == 'aproved') {
      color = '#84bb59'
    } else if (verifications_confirmed == 'declined') {
      color = '#ef2178'
    } else {
      color = '#000000'
    }
    setRequestIconDefaultColor(color)
  }, [verifications_confirmed]) 
  
  console.log(request_icon_default_color)

  return (
    <>
      <li
        className={`sidebar-menu-items ${active === name ? 'active' : ''} ${
          name === active && secondary_nav && secondary && 'with-submenu'
        }`}
      >
        <Link to={`/${name === 'account' ? '' + name : 'account/' + name}`}>
          <div
            className={`account-sidebar-menu-icon ${
              name === active ? 'active' : ''
            }`}
          >
            {name === 'account' && (
              <HomeOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'tours/list' && (
              <GlobalOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'history' && (
              <GlobalOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'chat' && (
              <CommentOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'profile' && (
              <UserOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'orders' && (
              <UnorderedListOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'bookings' && (
              <UnorderedListOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'settings' && (
              <SettingOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'props' && (
              <CreditCardOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
            {name === 'requests' && (
              <CheckCircleOutlined
                style={{
                  color: `${name === active ? '#2898cd' : request_icon_default_color}`,
                }}
              />
            )}
            {name === 'team' && (
              <TeamOutlined
                style={{
                  color: `${name === active ? '#2898cd' : '#000'}`,
                }}
              />
            )}
          </div>
          {title}
        </Link>
      </li>
      {secondary_nav && name === active && <SecondaryNav data={secondary_nav} secondary_item={secondary_item} tour_id={tour_id}/>}
    </>
  )
}

const mapStateToProps = state => ({
  page: state.auth.page,
  language: state.languages.language,
  secondary: state.tours.secondary,
  verifications_confirmed: state.auth.user?.verifications.status,
})

export default connect(mapStateToProps, {setPage})(NavItem)
