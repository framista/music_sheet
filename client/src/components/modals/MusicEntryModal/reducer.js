import validateField from '../../../utils/validation';

const reducer = (state, action) => {
  switch (action.type) {
    case 'init': {
      return { ...action.payload };
    }
    case 'validate_all': {
      const { title, author, year, file } = state;
      const errorTitle = validateField('title', title);
      const errorAuthor = validateField('author', author);
      const errorYear = validateField('year', year);
      const errorFile = validateField('file', file);
      const errors = errorTitle || errorAuthor || errorYear || errorFile;
      return {
        ...state,
        errorTitle,
        errorAuthor,
        errorYear,
        errorFile,
        canBeSaved: !errors,
      };
    }
    case 'change_title': {
      const title = action.payload;
      const errorTitle = validateField('title', title);
      return {
        ...state,
        title,
        errorTitle,
      };
    }
    case 'change_author': {
      const author = action.payload;
      const errorAuthor = validateField('author', author);
      return { ...state, author, errorAuthor };
    }
    case 'change_year': {
      const year = action.payload;
      if (year.match(/\D/)) return state;
      const errorYear = validateField('year', year);
      return { ...state, year, errorYear };
    }
    case 'change_file': {
      const file = action.payload;
      const errorFile = validateField('file', file);
      return { ...state, file, errorFile };
    }
    case 'add_tag': {
      if (action.payload !== 'Enter') return state;
      const currentTag = state.currentTag.trim();
      const errorCurrentTag = validateField('currentTag', currentTag, {
        tags: state.tags,
      });
      if (errorCurrentTag) return { ...state, errorCurrentTag };
      return {
        ...state,
        tags: [...state.tags, currentTag],
        currentTag: '',
      };
    }
    case 'change_tag': {
      const currentTag = action.payload;
      const errorCurrentTag = validateField('currentTag', currentTag, {
        tags: state.tags,
      });
      return { ...state, currentTag, errorCurrentTag };
    }
    case 'remove_tag': {
      const tags = state.tags.filter((tag) => tag !== action.payload);
      const errorCurrentTag =
        action.payload === state.currentTag ? '' : state.errorCurrentTag;
      return { ...state, tags, errorCurrentTag };
    }
    default:
      return state;
  }
};

export default reducer;
