import { AppBar, Switch, Toolbar, Typography } from '@material-ui/core';

import useStyles from './MSAppBar.style';

const MSAppBar = ({ darkState, toogleTheme }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Music Sheet
          </Typography>
          <Switch checked={darkState} onChange={toogleTheme} />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default MSAppBar;
