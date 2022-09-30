import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import ListPageComponent from "../../components/ListPageComponent";

const Discount = ({location}) => {

  const [page, setPage] = useState('')
  const [item, setItem] = useState('')

  useEffect(() => {
    setPage('tury-so-skidkami')
  }, [])

  return (
    <>
      {page && <ListPageComponent page={page} item={item} location={location}/>}
    </>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Discount)