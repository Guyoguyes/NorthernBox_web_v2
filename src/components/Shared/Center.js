import React from 'react'
import { Box, Grid } from '@mui/material'

function CenterComponent({children}) {
  return (
    <Box style={{ maxHeight: '100vh', overflow: 'auto' }}>
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={3}>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}

export default CenterComponent
