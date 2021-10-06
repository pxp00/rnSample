
import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"

export default class  FloatDisp extends Component{

    constructor(props){
      super()
    } 

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
      return(
        <View>
          <View style = {styles.v1}/>
          <View style = {styles.v2}/>
          <View style = {styles.v3}/>
        </View>
      )
    }
}


const styles = StyleSheet.create({
  v1:{
    width: 150,
    height: 60,  
    backgroundColor: 'red',
    zIndex: 3,
    marginLeft: 20,
  },

  v2:{
    width: 300,
    height: 300,  
    backgroundColor: 'yellow',
  },
  
  v3:{
    width: 300,
    height: 300,  
    backgroundColor: 'blue',
    // overlay
    zIndex: 1,
    // quiet normal flow
    position:'absolute',  // default "relative"
    top: 30,
    left: 50,
  },
  
  
});
