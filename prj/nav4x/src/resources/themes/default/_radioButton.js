import {
  transparent,
  themePrimary,
  textPrimary,
  textSecondary,
} from './colors';

export default () => {
  return {
    RadioButton: {
      flexDirection: 'row',
      activeOpacity: 0.8,
      alignItems: 'center',
      OuterCircle: {
        margin: 4,
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: themePrimary(),
        alignItems: 'center',
        justifyContent: 'center',
        InnerCircle: {
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: themePrimary(),
        },
      },
      Text: {
        color: textPrimary,
      },
    },
    'RadioButton[disabled=true]': {
      opacity: 0.4,
    },
    'RadioButton[checked=true]': {
      OuterCircle: {
        borderColor: themePrimary(),
        InnerCircle: {
          borderColor: themePrimary(),
        },
      },
    },
    'RadioButton[checked=false]': {
      OuterCircle: {
        borderColor: textSecondary,
        InnerCircle: {
          backgroundColor: transparent,
        },
      },
    },
  };
};
