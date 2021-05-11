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
    height: '750px',
    width: '800px'
  },
  row: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#eee',
    },
    '&:active': {
      backgroundColor: '#ddd',
    }
  },
  img: {
    height: '100px',
    width: '100px'
  },
  spinner: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: 'auto'
  },
  buttonFav: {
    marginTop: '30px',
    marginBottom: '30px',
  }
})
