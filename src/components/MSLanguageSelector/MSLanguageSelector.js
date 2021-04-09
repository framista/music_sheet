import { useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { languages } from '../../constants/languages';

import useStyles from './MSLanguageSelector.style';

const MSLanguageSelector = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect value={language} name="language" onChange={handleChange}>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default MSLanguageSelector;
