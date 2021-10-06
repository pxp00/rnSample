import { fontSizeBody } from "./dimens";
import { themePrimary } from "./colors";

export default () => {
  return {
    TextInput: {
      height: 46,
      borderRadius: 4,
      paddingHorizontal: 15,
      paddingVertical: 6,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: "#ffffff",
      color: "#000000",
      fontSize: fontSizeBody,
      selectionColor: "#000000",
      placeholderTextColor: "#999999",
      marginBottom: 10
    },
    "TextInput[styleName=dark]": {
      selectionColor: "#ffffff",
      color: "#ffffff",
      backgroundColor: "#ffffffa0",
      placeholderTextColor: themePrimary() + "c0"
    }
  };
};
