import { Avatar, ListItem } from '@material-ui/core'
import React from 'react'
import { styles } from './ItemModal.styles'

const ItemList = ({ item, onClick }) => {
  const classes = styles()

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar} alt={item.title} src={item.coverArt} />
      <ListItem className={classes.item} button onClick={onClick} key={item.id}>
        {
          item.title
        }
      </ListItem>
    </div>
  )
}

export default ItemList
