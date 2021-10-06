import { reactotron } from 'reactotron-react-native';
import config from "src/resources/themes/ThemeConfig.json";
import realm from "src/realm";
import {
  USERSHARED_SCHEMA_NAME,
  UserSharedModelType
} from "src/realm/locals/UserSharedModel";

export const transparent = "rgba(0, 0, 0, 0)";
export const white = "#FFFFFF";
export const black = "#000000";
export const gray = "#808080";
export const blue = "#0000FF";
export const green = "#008000";
export const red = "#FF0000";
export const yellow = "#FFFF00";

const UserSharedModel = realm.objects<UserSharedModelType>(USERSHARED_SCHEMA_NAME);

/**
 * 获取主题id
 */
export const themeID = () => {
  return config.stuff[UserSharedModel?.[0]?.theme].id
}

/**
 * 获取主题深色的配色
 */
export const themeDark = () => {
  const theme = themeName();
  return config.stuff[theme].dark;
}

export const themePrimary = () => {
  const theme = themeName();
  return config.stuff[theme].primary;
};
export const themeAccent = () => {
  const theme = themeName();
  return config.stuff[theme].accent;
};
export const themeCustomerPrimary = () => {
  const theme = themeName();
  return config.stuff[theme].primary;
};
export const themeCustomerAccent = () => {
  const theme = themeName();
  return config.stuff[theme].accent;
};
export const themeName = () => {
  return UserSharedModel?.[0]?.theme || 'default'
}

export const isHKT = () => {
  return UserSharedModel?.[0]?.theme === 'HKT'
}

export const isBOC = () => {
  return UserSharedModel?.[0]?.theme === 'BOC'
}

export const backgroundDark = "#00a2ff";
export const backgroundLight = "#ffffff";

export const textPrimary = "rgba(0, 0, 0, 0.87)";
export const textSecondary = "rgba(0, 0, 0, 0.54)";
export const textHint = "rgba(0, 0, 0, 0.38)";
export const textDisabled = "rgba(0, 0, 0, 0.38)";
