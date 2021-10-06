import {
  transparent,
  white,
  themePrimary,
  themeAccent,
} from './colors';
import { fontSizeButton } from './dimens';

export default () => {
  return {
    Button: {
      activeOpacity: 0.8,
      backgroundColor: themeAccent(),
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      ActivityIndicator: {
      },
      Text: {
        alignItems: 'stretch',
        fontSize: fontSizeButton,
        fontWeight: '500',
        color: white,
        margin: 5,
        minHeight: 12,
      },
      AmountText: {
        alignItems: 'stretch',
        fontSize: fontSizeButton,
        fontWeight: '500',
        color: white,
        margin: 5,
      },
    },
    'Button[styleName=dark]': {
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      Text: {
        color: themePrimary(),
      },
      AmountText: {
        color: themePrimary(),
      },
    },
    'Button[styleName=flat-primary]': {
      backgroundColor: themePrimary(),
    },
    'Button[styleName=flat-accent]': {
      backgroundColor: themeAccent(),
    },
    'Button[styleName=outline-primary]': {
      borderWidth: 1,
      borderColor: themePrimary(),
      backgroundColor: transparent,
      Text: {
        color: themePrimary(),
      },
      AmountText: {
        color: themePrimary(),
      },
    },
    'Button[styleName=outline-accent]': {
      borderWidth: 1,
      borderColor: themeAccent(),
      backgroundColor: transparent,
      Text: {
        color: themeAccent(),
      },
      AmountText: {
        color: themeAccent(),
      },
    },
    'Button[size=mini]': {
      height: 34,
      Text: {
        fontSize: fontSizeButton - 2,
      },
      AmountText: {
        fontSize: fontSizeButton - 2,
      },
    },
    'Button[size=small]': {
      height: 40,
      Text: {
        fontSize: fontSizeButton - 1,
      },
      AmountText: {
        fontSize: fontSizeButton - 1,
      },
    },
    'Button[size=medium]': {
      height: 46,
      Text: {
        fontSize: fontSizeButton,
      },
      AmountText: {
        fontSize: fontSizeButton,
      },
    },
    'Button[size=large]': {
      height: 52,
      Text: {
        fontSize: fontSizeButton + 1,
      },
      AmountText: {
        fontSize: fontSizeButton + 1,
      },
    },
    'Button[size=big]': {
      height: 58,
      Text: {
        fontSize: fontSizeButton + 2,
      },
      AmountText: {
        fontSize: fontSizeButton + 2,
      },
    },
    'Button[rounded=true]': {
      borderRadius: 2,
    },
    'Button[rounded=false]': {
      borderRadius: 0,
    },
    'Button[fluid=true]': {
      flex: 1,
      margin: 0,
    },
    'Button[disabled=true]': {
      opacity: 0.5,
    },
    'Button[disabled=false]': {
      opacity: 1,
    },
    'Button[loading=true]': {

    },
  };
};
