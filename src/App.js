import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Modal from './components/Modal';

const styles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  table: {
    height: '750px',
    width: '75%'
  }
})

function App() {
  const classes = styles()
  const [data, setData] = useState([])
  const [songsClicked, setSongsClicked] = useState([])
  const [open, setOpen] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/0cb08877-e723-4b1b-a5ef-c23dc49e7e90')
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleOpenAndClose = (songs) => {
    setSongsClicked(songs)
    setOpen(!open)
  }



  return (
    <div className="App">
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
          <TableRow>
              <TableCell>Albumes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {data.map(({ title, artist, year, songs }) => (
              <TableRow onClick={() => handleOpenAndClose(songs)} key={title}>
                <TableCell scope='row'>
                  {title}
                </TableCell>
                <TableCell align="right">{artist}</TableCell>
                <TableCell align="right">{year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal songs={songsClicked} initialOpen={open} toggle={() => setOpen(!open)} />
    </div>
  );
}

export default App;
