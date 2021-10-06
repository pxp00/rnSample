import {
  transparent,
  textSecondary,
} from './colors';
import { fontSizeSubheading } from './dimens';

export default () => {
  return {
    Subtitle: {
      color: textSecondary,
      backgroundColor: transparent,
      fontSize: fontSizeSubheading,
      marginBottom: 2,
    },
  };
};
