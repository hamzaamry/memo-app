import React from 'react'
import { Container , AppBar , Typography , Grow , Grid} from '@material-ui/core'


import Posts from './Posts'
import Form from './components/Form/Form.js'
const App = () => {
  return (
    <Container>
      <AppBar position="static" color='inherit'>
        <Typography variant='h2' align='center'>
          Memories
          {/*memo image*/}
        </Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
            <Grid item xs={12} sm={7} >
              <Posts />
            </Grid>
              <Form />
            <Grid item xs={12} sm={4} >
              
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}

export default App