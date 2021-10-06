import { StyleSheet, Text, View } from "react-native";

// styleSheet 
const styles = StyleSheet.create({
  container:{
  }
});

export const BaseFuncComponent = ({children, style}) =>{
  return(
    <>
      <Text>sd(hb), vmkp, t0_Iget_abg_gh</Text>
      <View style = {[styles.container, style]}>{children}</View>
    </>
  );
}

BaseFuncComponent.PropTypes = {
  children: PropTypes.node,
  sytle: PropTypes.object,
}