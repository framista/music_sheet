import { Grid } from '@material-ui/core';

import MusicListItem from './MusicListItem';

import useStyles from './MusicList.style';

const MusicList = ({ musicSheets}) => {
  const classes = useStyles();

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
