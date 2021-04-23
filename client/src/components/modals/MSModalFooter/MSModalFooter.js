import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import useStyles from './MSModalFooter.style';

const MSModalFooter = (props) => {
  const { onConfirm, onCancel } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Button variant="outlined" color="primary" onClick={onCancel}>
        {t('common.cancel')}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.confirmBtn}
        onClick={onConfirm}
      >
        {t('common.save')}
      </Button>
    </div>
  );
};

export default MSModalFooter;
