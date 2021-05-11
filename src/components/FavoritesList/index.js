import { Button, Dialog, DialogActions, DialogTitle, List } from '@material-ui/core'
import React from 'react'
import ItemList from '../ItemModal'
import { styles } from './FavoriteList.styles'

const FavoritesList = ({ items, toggle, initialOpen }) => {
  const classes = styles()
  const list = []

  items.forEach(item => {
    if(!list.includes(item)) {
      list.push(item)
    }
  })

  return (
    <Dialog 
      open={initialOpen} 
      onClose={toggle} 
      className={classes.container} 
      aria-labelledby="simple-dialog-title" 
    >
      <DialogTitle id="simple-dialog-title" className={classes.title}>Tus Favoritos</DialogTitle>
      <List className={classes.table}>
        {
          list.map((item) => (
              <ItemList className={classes.row} key={item.id} item={item} onClick={() => console.log('fav')} />
          ))
        }
      </List>
      <DialogActions>
        <Button onClick={toggle} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FavoritesList
