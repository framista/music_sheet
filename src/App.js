import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography } from '@material-ui/core';

import MSAppBar from './components/MSAppBar';

import useTheme from './hooks/useTheme';

import 'normalize.css';
import useStyles from './App.style';
import './App.css';

const App = () => {
  const [darkState, theme, toogleTheme] = useTheme();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MSAppBar darkState={darkState} toogleTheme={toogleTheme} />
      <main className={classes.content}>
        <Container>
          adaffds
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            cookolwiek
          </Typography>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default App;
