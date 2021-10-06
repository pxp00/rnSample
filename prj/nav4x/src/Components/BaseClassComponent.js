
import React, { Component } from "react"
import { Text, View } from "react-native"

export default class  BaseClassComponent extends Component{

    constructor(props){
      super(props) // super must be called
    } 

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
      return(
        <View>
          <Text>t0_ftasko_iget_abg_jain</Text>
        </View>
      )
    }
}