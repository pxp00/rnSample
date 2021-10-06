import {
  transparent,
  white,
  textSecondary,
} from './colors';
import { fontSizeBody } from './dimens';

export default () => {
  return {
    Text: {
      backgroundColor: transparent,
      color: textSecondary,
      fontSize: fontSizeBody,
      minHeight: 18,
    },
    'Text[styleName=dark]': {
      color: white,
    },
  };
};
