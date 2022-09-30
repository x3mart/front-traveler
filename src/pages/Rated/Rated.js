import React, {useEffect, useState} from 'react'
import styles from './Rated.module.css'
import {connect} from 'react-redux'
import ListPageComponent from "../../components/ListPageComponent";

const Rated = ({location}) => {
  const [page, setPage] = useState('')
  const [item, setItem] = useState('')

  useEffect(() => {
    setPage('populiarnye-tury')
  }, [])

  return (
    <>
      {page && <ListPageComponent page={page} item={item} location={location}/>}
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Rated)