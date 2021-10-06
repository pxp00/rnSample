import { IOS_IS_IPHONE_X } from '../../../utilities/Constants';
import {
  backgroundLight,
  themePrimary,
  themeCustomerPrimary,
} from './colors';

export default () => {
  return {
    Screen: {
      backgroundColor: backgroundLight,
      flex: 1,
      paddingBottom: IOS_IS_IPHONE_X ? 34 : 0,
    },
    'Screen[styleName=dark]': {
      backgroundColor: themePrimary(),
    },
    'Screen[styleName=customerMode]': {
      backgroundColor: themeCustomerPrimary(),
    },
  };
};
