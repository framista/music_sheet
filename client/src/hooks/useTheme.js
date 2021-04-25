import { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const colors = {
  primary: {
    main: orange[400],
  },
  secondary: {
    main: orange[200],
  },
};

const useTheme = () => {
  const [darkState, setDarkState] = useState(true);
  const [theme, setTheme] = useState(
    createMuiTheme({
      palette: {
        ...colors,
        type: 'dark',
      },
    })
  );

  const toogleTheme = () => {
    setDarkState(!darkState);
    const palletType = !darkState ? 'dark' : 'light';
    const newTheme = createMuiTheme({
      palette: {
        ...colors,
        type: palletType,
      },
    });
    setTheme(newTheme);
  };

  return [darkState, theme, toogleTheme];
};

export default useTheme;
