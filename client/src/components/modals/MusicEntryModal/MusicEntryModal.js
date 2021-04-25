import { useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, TextField, Typography } from '@material-ui/core';
import clsx from 'clsx';
import axios from 'axios';

import MSModalFooter from '../MSModalFooter';
import MSFileChooser from '../../MSFileChooser';
import MSChipsList from '../../MSChipsList';

import reducer from './reducer';
import initialState from './initialState';

import useStylesModal from '../modals.style';
import useStylesMusicEntryModal from './MusicEntryModal.style';

const MusicEntryModal = (props) => {
  const { open, handleClose } = props;
  const classesModal = useStylesModal();
  const classesMusicEntryModal = useStylesMusicEntryModal();
  const { t } = useTranslation();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { id, author, title, year, file, tags, currentTag, canBeSaved } = state;

  useEffect(() => {
    if (open) {
      dispatch({ type: 'init', payload: initialState });
    }
  }, [open]);

  useEffect(() => {
    if (state.canBeSaved) {
      const formData = new FormData();
      formData.append('file', state.fileContent);
      axios
        .post('http://localhost:5000/musicsheet', formData, {
          params: { id },
        })
        .then(() => {
          const musics =
            JSON.parse(localStorage.getItem('musicsheet_musics')) || [];
          localStorage.setItem(
            'musicsheet_musics',
            JSON.stringify([...musics, { id, title, author, year, file, tags }])
          );
          handleClose('success');
        })
        .catch(() => handleClose('error'));
    }
  }, [canBeSaved]);

  const onCancel = () => handleClose();

  const onConfirm = () => {
    dispatch({ type: 'validate_all' });
  };

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
            value={title}
            error={!!state.errorTitle}
            helperText={t(state.errorTitle)}
            onChange={(e) =>
              dispatch({ type: 'change_title', payload: e.target.value })
            }
          />
          <TextField
            label={t('newMusic.author')}
            className={classesMusicEntryModal.input}
            value={author}
            error={!!state.errorAuthor}
            helperText={t(state.errorAuthor)}
            onChange={(e) =>
              dispatch({ type: 'change_author', payload: e.target.value })
            }
          />
          <TextField
            label={t('newMusic.year')}
            className={classesMusicEntryModal.input}
            value={year}
            error={!!state.errorYear}
            helperText={t(state.errorYear)}
            onChange={(e) =>
              dispatch({ type: 'change_year', payload: e.target.value })
            }
          />
          <div className={classesMusicEntryModal.fileChoose}>
            <TextField
              label={t('newMusic.file')}
              className={clsx(
                classesMusicEntryModal.fileInput,
                classesMusicEntryModal.input
              )}
              value={file}
              error={!!state.errorFile}
              helperText={t(state.errorFile)}
              disabled
            />
            <MSFileChooser
              handleFile={(fileContent) =>
                dispatch({ type: 'change_file', payload: fileContent })
              }
            />
          </div>
          <TextField
            label={t('newMusic.tags')}
            className={classesMusicEntryModal.input}
            value={currentTag}
            error={!!state.errorCurrentTag}
            helperText={t(state.errorCurrentTag)}
            onKeyDown={(e) => dispatch({ type: 'add_tag', payload: e.key })}
            onChange={(e) =>
              dispatch({ type: 'change_tag', payload: e.target.value })
            }
          />
          <div className={classesMusicEntryModal.chipsContainer}>
            <MSChipsList
              tags={tags}
              onDelete={(tag) => dispatch({ type: 'remove_tag', payload: tag })}
            />
          </div>
        </form>
        <MSModalFooter onCancel={onCancel} onConfirm={onConfirm} />
      </div>
    </Modal>
  );
};

export default MusicEntryModal;
