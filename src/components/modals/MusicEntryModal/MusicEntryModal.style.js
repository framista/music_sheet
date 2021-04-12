import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  input: {
    margin: '0.4rem 0',
  },
  chipsContainer: {
    margin: '0.4rem 0',
  },
  chip: {
    marginRight: '5px',
  },
}));

export default useStyles;
