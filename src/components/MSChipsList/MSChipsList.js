import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

import useStyles from './MSChipsList.style';

const MSChipsList = ({ tags, onDelete }) => {
  const classes = useStyles();
  return (
    <>
      {tags.map((tag) => (
        <Chip
          label={tag}
          onDelete={() => onDelete(tag)}
          color="primary"
          variant="outlined"
          className={classes.chip}
          key={tag}
        />
      ))}
    </>
  );
};

MSChipsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onDelete: PropTypes.func,
};

export default MSChipsList;
