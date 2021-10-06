/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*
  react-native start --reset-cache

  yarn add react-navigation
  npm install react-navigation

  yarn upgrade element-ui@2.9.1  // update 

  npm ls react-navigation  // check current version of

  
  1.yarn add react-navigation
  2.yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
  3.yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
  
*/

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Init from './stackNav/Init';
import LifeCycle from './stackNav/LifeCycle';
import MovingBetweenScreen from './stackNav/MovingBetweenScreen';
import PassParams from './stackNav/PassParams';
import ButtonSample from './Components/ButtonSample'
import FloatDisp from './Components/FloatDisp';
import BorderStyles from './Utils/BorderStyles';
import HeaderBar from './stackNav/HeaderBar';

const App = () => {
  return (
    <SafeAreaView style = {{flex:1, ...BorderStyles.blue}}>
      {/* <Init/> */}
      {/* <MovingBetweenScreen/> */}
      {/* <LifeCycle/> */}
      {/* <PassParams/> */}
      <HeaderBar/>


      {/* <FloatDisp/> */}

    </SafeAreaView>
  );
};

export default App;
