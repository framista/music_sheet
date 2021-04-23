import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import MusicListItem from './MusicListItem';

import useStyles from './MusicList.style';

const MusicList = () => {
  const [musicSheets, setMusicSheets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const musicSheets =
      JSON.parse(localStorage.getItem('musicsheet_musics')) || [];
    setMusicSheets(musicSheets);
  }, []);

  return (
    <>
      <Grid container spacing={1} className={classes.container}>
        {musicSheets.map((musicSheet) => (
          <MusicListItem key={musicSheet.id} musicSheet={musicSheet} />
        ))}
      </Grid>
    </>
  );
};

export default MusicList;
