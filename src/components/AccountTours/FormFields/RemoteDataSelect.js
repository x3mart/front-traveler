import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'



const RemoteDataSelect = ({ remote_data }) => {
  const [data, setDate] = useState({})


  const handleChange = e => {
    setDate(e.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={data}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default RemoteDataSelect
