import React from "react";
import { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import BorderStyles from "../Utils/BorderStyles";

export default class ButtonSample extends Component{
  render(){
    return(
      <View style = {{flex:1}}>

      
        <View style = {{flex:1, ...BorderStyles.red}}>
          {/* button width same as parentView */}
          <Button
            title = "t0_ftasko_iget_abg_hb"
          />
          <View style = {{backgroundColor: 'grey', height: 20, width: "50%"}}/>
        </View>


        <View style = {[{flex:2, alignItems: "center"}, BorderStyles.yellow]}>
          {/* use alignItems, button will be squeezd smaller */}
          <Button
            title = "t0_iget_abg_hb"
          />
          <Button
            title = "hb_sd"
          />
        </View>


      </View>
    )
  }
}