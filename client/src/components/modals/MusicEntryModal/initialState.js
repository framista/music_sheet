import { v4 as uuidv4 } from 'uuid';

const initialState = {
  id: uuidv4(),
  title: '',
  author: '',
  year: '',
  file: '',
  tags: [],
  currentTag: '',
  errorTitle: '',
  errorAuthor: '',
  errorYear: '',
  errorFile: '',
  errorCurrentTag: '',
};

export default initialState;
