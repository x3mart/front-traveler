import React from 'react'
import ListPageComponent from "../../components/ListPageComponent";

const Destination = ({match, location, }) => {

  const {region, destination} = match.params

  return (
    <>
      <ListPageComponent page={region} item={destination} with_script={true} location={location} match={match}/>
    </>
  )
}

export default Destination