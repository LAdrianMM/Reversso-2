import { Button, Dialog, DialogActions, DialogTitle, List, ListItem, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const styles = makeStyles({
  container: {
    height: '800px',
    width: '500px',

  }
})

const Modal = ({ songs, toggle, initialOpen }) => {
  const classes = styles()
  const [fav, setFav] = useState([])

  console.log(fav)

  return (
    <div>
      <Dialog className={classes.container} onClose={toggle} aria-labelledby="simple-dialog-title" open={initialOpen}>
        <DialogTitle id="simple-dialog-title">Canciones del Album </DialogTitle>
        <List>
          {songs.map((item) => (
            <ListItem button onClick={() => setFav([...fav, item])} key={item.id}>
              {
                item.title
              }
            </ListItem>
          ))}
        </List>
        <DialogActions>
          <Button onClick={toggle} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal
