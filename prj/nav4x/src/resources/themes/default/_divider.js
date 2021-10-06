export default () => {
  return {
    Divider: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.12)',
    },
    'Divider[orientation=vertical]': {
      minHeight: 20,
      width: 1,
    },
    'Divider[orientation=horizontal]': {
      minWidth: 20,
      height: 1,
    },
  };
};
