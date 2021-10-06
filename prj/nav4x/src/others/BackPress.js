import { Component } from "react";
import { BackHandler } from "react-native";


class BackPress extends Component{

  constructor(props) {
    super(props);
    // add didFocus lsr on constructor, after componentDidMount will call didFocus
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  componentDidMount() {
     // don't destory curPage, switch to otherPage will call willBlur
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)  
    );
  }
  
  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
    // destroy curPage
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressAndroid);
  }

  onBackButtonPressAndroid = () => {
    // ... do something
  };

  render() {
    // ...
  }
}
