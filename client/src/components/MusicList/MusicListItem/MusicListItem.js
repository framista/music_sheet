import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useTranslation } from 'react-i18next';

import useStyles from './MusicListItem.style';

const MusicListItem = ({ musicSheet }) => {
  const { title, author, year, id } = musicSheet;
  const classes = useStyles();
  const { t } = useTranslation();

  const openMusicSheet = () => {
    // const url = `http://127.0.0.1:5500/client/music/index.html?file=${id}`;
    const url = `https://framista.github.io/music_sheet/client/music/index.html?file=${id}`;
    window.open(url, '_blank');
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardContent>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {author || t('mucic.authorUnknown')} ({year})
          </Typography>
        </CardContent>
        <PlayCircleOutlineIcon
          color="primary"
          className={classes.icon}
          onClick={openMusicSheet}
        />
      </Card>
    </Grid>
  );
};

export default MusicListItem;
