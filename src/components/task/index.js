import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import React from 'react'

const Task = () => {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  return (
    <Container>
      <Box minHeight={300}>
        <Typography variant='h5' align='center' color='primary'>Cunter</Typography>
        <Divider />
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12} sm={6}>
            <TextField label='Counter' disabled fullWidth value={count} InputProps={{ style: { fontSize: '2rem' } }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              color='primary'
              fullWidth
              disableElevation
              variant='contained'
              onClick={handleClick}
              startIcon={<FontAwesomeIcon icon={faPlus} />}
            >
              Count
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Task
