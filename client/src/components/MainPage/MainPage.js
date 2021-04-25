import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import MusicEntryModal from '../modals/MusicEntryModal';
import MusicList from '../MusicList';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [resultSubmitModal, setResultSubmitModal] = useState('');
  const { t } = useTranslation();

  const handleCloseMusicEntryModal = (type = 'cancel') => {
    setShowModal(false);
    if (type === 'success') {
      return setResultSubmitModal({
        type: 'success',
        message: t('newMusic.successSaved'),
      });
    }
    if (type === 'error') {
      return setResultSubmitModal({
        type: 'error',
        message: t('newMusic.errorSaved'),
      });
    }
    setResultSubmitModal('');
  };

  return (
    <>
      <MusicEntryModal
        open={showModal}
        handleClose={handleCloseMusicEntryModal}
      />
      {resultSubmitModal?.type && (
        <Alert
          severity={resultSubmitModal.type}
          variant="filled"
          style={{ marginBottom: '1rem' }}
          onClose={() => setResultSubmitModal('')}
        >
          {resultSubmitModal.message}
        </Alert>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowModal(true)}
      >
        {t('newMusic')}
      </Button>
      <MusicList />
    </>
  );
};

export default MainPage;
