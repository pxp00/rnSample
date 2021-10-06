import {
  transparent,
  white,
  themePrimary,
} from './colors';
import { fontSizeButton } from './dimens';

export default () => {
  return {
    HyperlinkButton: {
      activeOpacity: 0.8,
      backgroundColor: transparent,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 0,
      paddingBottom: 0,
      marginRight: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      ActivityIndicator: {
        marginLeft: 5,
        color: themePrimary(),
      },
      Text: {
        alignItems: 'stretch',
        fontSize: fontSizeButton,
        fontWeight: '500',
        color: themePrimary(),
        margin: 4,
      },
    },
    'HyperlinkButton[styleName=dark]': {
      Text: {
        color: white,
      },
    },
    'HyperlinkButton[disabled=true]': {
      opacity: 0.5,
    },
    'HyperlinkButton[disabled=false]': {
      opacity: 1,
    },
    'HyperlinkButton[loading=true]': {
      opacity: 0.5,
    },
    'HyperlinkButton[size=mini]': {
      minHeight: 30,
      Text: {
        fontSize: fontSizeButton - 4,
      },
    },
    'HyperlinkButton[size=small]': {
      minHeight: 36,
      Text: {
        fontSize: fontSizeButton - 2,
      },
    },
    'HyperlinkButton[size=medium]': {
      minHeight: 42,
      Text: {
        fontSize: fontSizeButton,
      },
    },
    'HyperlinkButton[size=large]': {
      minHeight: 48,
      Text: {
        fontSize: fontSizeButton + 2,
      },
    },
    'HyperlinkButton[size=big]': {
      minHeight: 54,
      Text: {
        fontSize: fontSizeButton + 4,
      },
    },
  };
};
