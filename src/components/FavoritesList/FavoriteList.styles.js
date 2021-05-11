import { makeStyles } from "@material-ui/core";

export const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px'
  },
  title: {
    fontSize: '42px'
  },
  table: {
    height: '100%',
    width: '500px'
  },
  row: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#eee',
    },
    '&:active': {
      backgroundColor: '#ddd',
    }
  }
})
