import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const MSFileChooser = ({ handleFile }) => {
  const { t } = useTranslation();
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <>
      <Button onClick={handleClick} size="small">
        {t('common.chooseFile')}
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        accept=".pdf"
        style={{ display: 'none' }}
      />
    </>
  );
};

MSFileChooser.propTypes = {
  handleFile: PropTypes.func,
};

export default MSFileChooser;
