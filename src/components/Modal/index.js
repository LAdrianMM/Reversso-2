import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogTitle, 
  List 
} from '@material-ui/core'
import React from 'react'
import ItemList from '../ItemModal'
import { styles } from './Modal.styles'

const Modal = ({ songs, toggle, initialOpen, setFav, fav }) => {
  const classes = styles()

  return (
    <div>
      <Dialog 
        className={classes.container} 
        onClose={toggle} 
        aria-labelledby="simple-dialog-title" 
        open={initialOpen}
      >
        <DialogTitle id="simple-dialog-title">Canciones del Album </DialogTitle>
        <List className={classes.list}>
          {
            songs.map((item) => (
              <ItemList onClick={() => setFav([...fav, item])} key={item.id} item={item} /> 
            ))
          }
        </List>
        <DialogActions>
          <Button onClick={toggle} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal
