/* eslint-disable global-require */
/* eslint-disable default-case */
/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
/***
 * 一种语言环境仅仅加载该语言资源
 */
const LanType = {
  "zhHans": 0,//简体中文
  "zhHant": 1,//繁体中文
  "en": 2//英文
};

const Languages = {
  "en": LanType.en,
  "en-US": LanType.en,
  "en-CN": LanType.en,
  "zh-CN": LanType.zhHans,
  "zh-HK": LanType.zhHant,
  "zh-TW": LanType.zhHant,
  "zh-Hans": LanType.zhHans, // 简体中文
  "zh-Hans-CN": LanType.zhHans, // 大陆地区使用的简体中文
  "zh-Hans-HK": LanType.zhHans, // 香港地区使用的简体中文
  "zh-Hans-MO": LanType.zhHans, // 澳门使用的简体中文
  "zh-Hans-SG": LanType.zhHans, // 新加坡使用的简体中文
  "zh-Hans-TW": LanType.zhHans, // 台湾使用的简体中文
  "zh-Hant": LanType.zhHant, // 繁体中文
  "zh-Hant-CN": LanType.zhHant, // 大陆地区使用的繁体中文
  "zh-Hant-HK": LanType.zhHant, // 香港地区使用的繁体中文
  "zh-Hant-MO": LanType.zhHant, // 澳门使用的繁体中文
  "zh-Hant-SG": LanType.zhHant, // 新加坡使用的繁体中文
  "zh-Hant-TW": LanType.zhHant // 台湾使用的繁体中文
}
const LangeSource = {}
const Locals = {};
Object.keys(Languages).map((Key) => {
  Object.defineProperty(Locals, Key, {
    get() {
      if (LangeSource[Key]) {
        return LangeSource[Key];
      } else {
        const LanKey = Languages[Key];
        switch (LanKey) {
          case LanType.zhHans:
            LangeSource[Key] = require("./zh-Hans").default;
            break;
          case LanType.zhHant:
            LangeSource[Key] = require("./zh-Hant").default;
            break;
          case LanType.en:
            LangeSource[Key] = require("./en").default;
            break;
        }
        return LangeSource[Key];
      }
    },
    set(value){
      Languages[Key]= value;
    }
  })
})

export default Locals;