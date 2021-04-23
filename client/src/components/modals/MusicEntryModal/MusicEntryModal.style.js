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
    marginTop: '0.4rem',
  },
  fileChoose: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fileInput: {
    flex: 1,
  },
}));

export default useStyles;
