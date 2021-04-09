import { AppBar, Switch, Toolbar, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import MSLanguageSelector from '../MSLanguageSelector';

import useStyles from './MSAppBar.style';

const MSAppBar = ({ darkState, toogleTheme }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {t('appBar.title')}
          </Typography>
          <Switch checked={darkState} onChange={toogleTheme} />
          <MSLanguageSelector />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default MSAppBar;
