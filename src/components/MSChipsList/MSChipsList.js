import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

import useStyles from './MSChipsList.style';

const MSChipsList = ({ tags }) => {
  const classes = useStyles();
  return (
    <>
      {tags.map((tag) => (
        <Chip
          label={tag}
          onDelete={() => console.log(tag)}
          color="primary"
          variant="outlined"
          className={classes.chip}
        />
      ))}
    </>
  );
};

MSChipsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default MSChipsList;
