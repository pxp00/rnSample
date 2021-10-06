import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

/* 
  1. didFocus只会在当前页面的constructor函数和componentDidMount函数后面执行;
  2. didBlur只会在当前页面没有调用componentWillUnmount函数,然后离开当前页面才执行,也意味着,这个页面没有死但是去了另外一个页面才会调用,如果自己页面死了,就不会调用到这里.
  
  ComponetWillUnmout vs onWillBlur ?
    A: 
      1. destory curComponent(nav.goBack()): call componentWillUnmount, won't call onWillBlur
      2. switch to other Page but don't destroy curPage(nav.push(...)): call onWillBlur, won't call componetWillUnmount;
    
  ComponentDidMount vs onDidFoucus ?
    A: 
      1. enter curPage at any time, will call onDidFocus;  // multiple times
      2. create curPage at first time, will call ComponentDidMount; // once only


  sum:
    use onDidFoucus, onWillBlur; // ComponentDidMount -> onDidFocus -> ComponentWillUnmount(destroy component) / onWillBlur(don't destroy curPage, switch only) 
*/
class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log('HomeScreen   ===0===    constructor');
        // addListener on constructor, after ComponentDidMount will call didFocus event
        this.didFocusListener = this.props.navigation.addListener(
            'didFocus',
            (obj) => {
                console.log('HomeScreen   ===3===    didFocus', obj);
            },
        );
        this.didBlurListener = this.props.navigation.addListener(
            'didBlur',
            (obj) => {
                console.log('HomeScreen   ===4===    didBlur', obj);
            },
        );

        this.willFocusListener = this.props.navigation.addListener(
          'willFocus',
          (obj) => {
              console.log('HomeScreen   ===3===    willFocus');
          },
      );
      this.willBlurListener = this.props.navigation.addListener(
          'willBlur',
          (obj) => {
              console.log('HomeScreen   ===4===    willBlur');
          },
      );
    }

    static navigationOptions = {
        title: 'HomeScreen',
    };


    componentDidMount = () => {
        console.log('HomeScreen   ===2===    componentDidMount');
    };

    componentWillUnmount() {
        console.log('HomeScreen   ===5===    componentWillUnmount');
        this.didFocusListener.remove();
        this.didBlurListener.remove();
        this.willBlurListener.remove();
        this.willFocusListener.remove();
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>

                <Button onPress={() => this.props.navigation.navigate('Details', {
                    itemId: 100,
                    otherParam: 'detail param',
                })} title="go to Details"/>

                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );

    }
}

class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor ----------------------0');
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam', 'no-values'),
        };
    };

    componentDidMount = () => {
        console.log('componentDidMount ----------------------2');
    };

    _onWillFocus() {
        console.log('onWillFocus ----------------------3');
    }

    _onDidFocus() {
        console.log('onDidFocus ----------------------4');
    }

    _onWillBlur() {
        console.log('onWillBlur ----------------------5');
    }

    _onDidBlur() {
        console.log('onDidBlur ----------------------6');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount ----------------------7');
    }

    render() {
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'no-values');
        const otherParam = navigation.getParam('otherParam', 'no-values');

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <NavigationEvents
                    onWillFocus={() => this._onWillFocus()}
                    onDidFocus={() => this._onDidFocus()}
                    onWillBlur={() => this._onWillBlur()}
                    onDidBlur={() => this._onDidBlur()}/>

                <Text>Details Screen</Text>
                <Text>itemId:{JSON.stringify(itemId)}</Text>
                <Text>otherParam:{JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Go popToTop"
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }

}

const StackNavigatorConfig = {
    initialRouteName: 'Home',
};

const RouteConfigs = {
    Home: HomeScreen,
    Details: DetailsScreen,
};

const StackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default createAppContainer(StackNavigator);



