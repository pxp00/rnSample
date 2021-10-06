import {
  transparent,
  white,
  textSecondary,
} from './colors';
import { fontSizeBody } from './dimens';

export default () => {
  return {
    AmountText: {
      backgroundColor: transparent,
      color: textSecondary,
      fontSize: fontSizeBody,
    },
    'AmountText[styleName=dark]': {
      color: white,
    },
  };
};
