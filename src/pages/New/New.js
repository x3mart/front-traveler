import React, {useEffect, useState} from 'react'
import ListPageComponent from "../../components/ListPageComponent";

const New = ({location}) => {

  const [page, setPage] = useState('')
  const [item, setItem] = useState('')

  useEffect(() => {
    setPage('novinki')
  }, [])

  return (
    <>
      {page && <ListPageComponent page={page} item={item} location={location}/>}
    </>
  )
}

export default New