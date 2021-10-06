import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BorderStyles from '../Utils/BorderStyles';
/*
  Q: class component this keyword ?
*/

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
       
        <Button
          title="nav Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  render() {
    console.log("BorderStyle = ", BorderStyles);
    return (
      // aliginItems: center, will need items' width, without width defval = 0,
      <View style={{ flex: 1,  justifyContent: 'center', ...BorderStyles.yellow}}>
        
        <Text>Details Screen</Text>
        <Button
          style = {styles.button}
          title="push Details"
          onPress={() => this.props.navigation.push('Details')} 
        />
        <Button
          style = {styles.button}
          title="nav Detatils"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          style = {styles.button}
          title="nav home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        
        <Button
          style = {styles.button}
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
// createAppContainer, createStak

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },

  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  button:{
    width:"100%",
  }
});

export default createAppContainer(RootStack);