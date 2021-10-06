import { useFocusEffect } from '@react-navigation/native';
import { View } from 'react-native';

function Profile() {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused, onFocus

      return () => {
        // Do something when the screen is unfocused, onBlur
        // Useful for cleanup functions
      };
    }, [])
  );

  return <View></View>;
}