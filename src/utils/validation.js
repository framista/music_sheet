export const validateField = (field, value, additional) => {
  switch (field) {
    case 'title':
      if (value.trim().length < 3) return 'newMusic.title.tooShort';
      if (value.length > 40) return 'newMusic.title.tooLong';
      break;
    case 'author':
      if (value.length > 40) return 'newMusic.author.tooLong';
      break;
    case 'year':
      if (!value.match(/^\d{4}$/) || parseInt(value) > new Date().getFullYear())
        return 'newMusic.year.incorrect';
      break;
    case 'file':
      if (value.length < 5) return 'newMusic.file.tooShort';
      break;
    case 'currentTag':
      if (value.length < 3) return 'newMusic.tag.tooShort';
      if (value.length > 20) return 'newMusic.tag.tooLong';
      if (additional.tags.includes(value)) return 'newMusic.tag.unique';
      break;
    default:
      return '';
  }
  return '';
};

export default validateField;
