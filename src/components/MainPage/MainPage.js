import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';

import MusicEntryModal from '../modals/MusicEntryModal';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <MusicEntryModal open={showModal} handleClose={() => setShowModal(false)} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowModal(true)}
      >
        {t('newMusic')}
      </Button>
    </>
  );
};

export default MainPage;
