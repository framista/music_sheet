const reducer = (state, action) => {
  switch (action.type) {
    case 'init': {
      return { ...action.payload };
    }
    case 'change_title': {
      const title = action.payload;
      if (title.trim().length < 3)
        return { ...state, errorTitle: 'newMusic.title.tooShort', title };
      if (title.length > 30)
        return { ...state, errorTitle: 'newMusic.title.tooLong', title };
      return {
        ...state,
        title,
        errorTitle: '',
      };
    }
    case 'change_author': {
      const author = action.payload;
      return { ...state, author };
    }
    case 'change_year': {
      const year = action.payload;
      if (year.match(/\D/)) return state;
      if (!year.match(/^\d{4}$/) || parseInt(year) > new Date().getFullYear())
        return { ...state, errorYear: 'newMusic.year.incorrect', year };
      return { ...state, year, errorYear: '' };
    }
    case 'change_file': {
      return { ...state, file: action.payload };
    }
    case 'add_tag': {
      if (action.payload !== 'Enter') return state;
      const currentTag = state.currentTag.trim();
      if (state.tags.includes(currentTag))
        return { ...state, errorCurrentTag: 'newMusic.tag.unique' };
      if (currentTag.length < 3)
        return { ...state, errorCurrentTag: 'newMusic.tag.tooShort' };
      if (currentTag.length > 20)
        return { ...state, errorCurrentTag: 'newMusic.tag.tooLong' };
      return {
        ...state,
        tags: [...state.tags, currentTag],
        currentTag: '',
      };
    }
    case 'change_tag': {
      return { ...state, currentTag: action.payload, errorCurrentTag: '' };
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
