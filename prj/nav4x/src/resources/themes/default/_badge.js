import {
  white,
  red,
} from './colors';
import { fontSizeCaption } from './dimens';

export default () => {
  return {
    Badge: {
      backgroundColor: red,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      alignItems: 'center',
      Text: {
        color: white,
        marginLeft: 6,
        marginRight: 6,
        minHeight: 10,
      },
    },
    'Badge[type=dot]': {
      minWidth: 8,
      minHeight: 8,
      borderRadius: 4,
    },
    'Badge[type=text]': {
      minWidth: 18,
      height: 18,
      borderRadius: 9,
      Text: {
        fontSize: fontSizeCaption,
        minHeight: 10,
      },
    },
  };
};
