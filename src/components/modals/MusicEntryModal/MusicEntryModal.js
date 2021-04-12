import { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { Chip, Modal, TextField, Typography } from '@material-ui/core';

import MSModalFooter from '../MSModalFooter';

import useStylesModal from '../modals.style';
import useStylesMusicEntryModal from './MusicEntryModal.style';

const MusicEntryModal = (props) => {
  const { open, handleClose } = props;
  const classesModal = useStylesModal();
  const classesMusicEntryModal = useStylesMusicEntryModal();
  const { t } = useTranslation();

  const onCancel = () => handleClose();

  const onConfirm = () => console.log('onConfirm');

  const tags = ['Chopin', 'piano'];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classesModal.modal}>
        <Typography variant="h5" gutterBottom>
          {t('newMusic')}
        </Typography>
        <form className={classesMusicEntryModal.form}>
          <TextField
            label={t('newMusic.title')}
            className={classesMusicEntryModal.input}
          />
          <TextField
            label={t('newMusic.author')}
            className={classesMusicEntryModal.input}
          />
          <TextField
            error
            label={t('newMusic.year')}
            className={classesMusicEntryModal.input}
          />
          <TextField
            label={t('newMusic.tags')}
            className={classesMusicEntryModal.input}
          />
          <div className={classesMusicEntryModal.chipsContainer}>
            {tags.map((tag) => (
              <Chip
                label={tag}
                onDelete={() => console.log(tag)}
                color="primary"
                variant="outlined"
                className={classesMusicEntryModal.chip}
              />
            ))}
          </div>
        </form>
        <MSModalFooter onCancel={onCancel} onConfirm={onConfirm} />
      </div>
    </Modal>
  );
};

export default MusicEntryModal;
