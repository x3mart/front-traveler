import React from 'react'
import styles from './LoaderComponent.module.css'
import {connect} from 'react-redux'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoaderComponent = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
        <CircularProgress />
      </Box>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderComponent)