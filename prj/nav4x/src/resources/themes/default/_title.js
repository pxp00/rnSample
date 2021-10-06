import { textPrimary } from './colors';
import { fontSizeTitle } from './dimens';

export default () => {
  return {
    Title: {
      backgroundColor: 'transparent',
      color: textPrimary,
      fontSize: fontSizeTitle,
      fontWeight: '500',
      marginBottom: 4,
    },
  };
};
