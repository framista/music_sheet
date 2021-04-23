import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: 'calc(100vh - theme.mixins.toolbar)',
    overflow: 'auto',
    padding: '30px 20px 20px',
  },
}));

export default useStyles;
