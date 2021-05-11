import { 
  Button, 
  CircularProgress, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableFooter, 
  TableHead, 
  TableRow 
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { styles } from './AlbumList.styles'
import Modal from '../Modal';
import FavoritesList from '../FavoritesList';

function AlbumList() {
  const classes = styles()
  const [data, setData] = useState([])
  const [songsClicked, setSongsClicked] = useState([])
  const [fav, setFav] = useState([])
  const [open, setOpen] = useState(false)
  const [openFav, setOpenFav] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/0cb08877-e723-4b1b-a5ef-c23dc49e7e90')
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleOpenAndCloseModal = (songs) => {
    setSongsClicked(songs)
    setOpen(!open)
  }

  const handleOpenAndCloseFav = () => {
    setOpenFav(!openFav)
  }

  return (
    <>
      {
        loading 
          ? <CircularProgress className={classes.spinner} />
          : <TableContainer className={classes.container}>
              <h1 className={classes.title}>Albumes</h1>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Image Album</TableCell>
                    <TableCell>Titulo</TableCell>
                    <TableCell align="center">Artista</TableCell>
                    <TableCell align="center">Año</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data.map(({ title, artist, year, coverArt, songs }) => (
                      <TableRow className={classes.row} onClick={() => handleOpenAndCloseModal(songs)} key={title}>
                        <TableCell>
                            <img className={classes.img} src={coverArt} alt={title}/>
                        </TableCell>
                        <TableCell scope='row'>
                          {title}
                        </TableCell>
                        <TableCell align="center">{artist}</TableCell>
                        <TableCell align="center">{year}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell>
                      <Button 
                        onClick={handleOpenAndCloseFav} 
                        variant='contained' 
                        color='secondary' 
                        className={classes.buttonFav}
                      >
                          Ver Favoritos
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
      }
      <Modal 
        fav={fav} 
        setFav={setFav} 
        songs={songsClicked} 
        initialOpen={open} 
        toggle={() => setOpen(!open)} 
      />
      <FavoritesList 
        toggle={handleOpenAndCloseFav}
        initialOpen={openFav} 
        items={fav}   
      />
    </>
  );
}

export default AlbumList;