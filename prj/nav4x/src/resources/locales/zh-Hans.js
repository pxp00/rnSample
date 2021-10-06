import images from "../images";
import { HTK_THEME } from "../../utilities/Constants";

export default {
  alert: "提示",
  appName: "Bindo Payment",
  globals: {
    messageExitAppConfirm: "再按一次可退出应用程序",
    messageNetworkRequestFailed: "网络连接超时，请检查您的网络配置。",
    messageCanNotConnectToMaster: "无法连接主终端，请检查网络连接是否正常。",
    messageCallPayCheck: "非法的数据格式",
    pendingActivationDialog: {
      title: "待激活",
      message: "请联系客户支持。"
    },
    paymentMethod: {
      all: "全部",
      cash: "现金",
      creditCard: "信用卡",
      creditCardEMI: "信用卡（分期付款）",
      creditCardManual: "信用卡（手动输入）",
      wechatPay: "微信支付",
      alipay: "支付宝",
      octopus: "八达通",
      giftCard: "礼品卡",
      check: "支票",
      other: "其他",
      qrCode: "二维码支付",
      unionPayQR: "云闪付",
      tapGo: "Tap&Go",
      unionCloudPay: "云闪付",
      unionPay: "银联",
      unionPayScan: "云闪付",
      oePay: "好易畀",
      fps: "FPS"
    },
    paymentType: {
      sale: "支付",
      preauth: "预授权",
      preauth_complete: "预授权完成",
      void: "撤销",
      refund: "退款",
      tips: "小费",
      preauth_void: "预授权撤销",
      preauth_complete_void: "预授权完成撤销",
      void_sale: "支付撤销"
    },
    shippingMethod: {
      dineIn: "堂食",
      pickup: "自取",
      delivery: "外卖"
    },
    orderInventoryState: {
      unknown: "未知",
      in_transit: "运送中",
      unfulfilled: "未履行",
      fulfilled: "已履行"
    },
    orderQuoteInvoiceState: {
      unknown: "未知",
      partial_paid: "部分付款",
      paid: "已付款",
      unpaid: "未付款",
      quoted: "Quoted"
    },
    orderState: {
      unknown: "未知",
      pending_confirmation: "Pending confirmation",
      pending_pick_up: "Pending pick up",
      pending_delivery: "Pending delivery",
      completed: "Completed",
      voided: "Voided",
      cancelled: "Cancelled",
      invoiced: "Invoiced"
    },
    partyStatus: {
      default: "默认",
      seated: "已座台",
      ordered: "已下单",
      checkDropped: "已印单",
      paid: "已付款",
      multiple: "混合台",
      reserved: "已预订",
      available: "可使用",
      cleared: "已清桌"
    }
  },
  components: {
    dialog: {
      ok: "确定",
      cancel: "取消",
      yes: "是",
      no: "否",
      CANCEL: "取消",
      CONFIRM: "确认"
    },
    passwordInputDialog: {
      cancel: "取消",
      confirm: "确定",
      inputpw: "输入密码"
    },
    loader: {
      messageLoading: "正在加载...",
      messageLoadingConfiguration: "正在加载配置项...",
      messageProcessing: "正在执行...",
      messageReversal: "请求失败，正在执行冲正...",
      messagePrinting: "打印中..."
    },
    calendarPicker: {
      buttonPrev: "上一月",
      buttonNext: "下一月",
      weekdays: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      months: {
        january: "一月",
        february: "二月",
        march: "三月",
        april: "四月",
        may: "五月",
        june: "六月",
        july: "七月",
        august: "八月",
        september: "九月",
        october: "十月",
        november: "十一月",
        december: "十二月"
      }
    },
    list: {
      messageNoMoreData: "无更多数据"
    },
    listEmptyIndicator: {
      messageLoading: "正在加载...",
      messageDataNotFound: "没有找到数据"
    },
    noActivityTimeoutModal: {
      message: "超时没有操作，将在 __countdown__ 秒后返回。",
      buttonKeep: "保持"
    }
  },
  screens: {
    initialize: {
      messageUpdatingConfiguration: "正在更新配置项..."
    },
    login: {
      title: "登录",
      usernameHint: "Bindo ID / 邮箱",
      passwordHint: "密码",
      buttonLogin: "登录",
      HKTbuttonLogin: "登录",
      buttonForgotPassword: "忘记密码？",
      buttonSettingProxyServer: "设置代理服务器",
      messageCannotVerifyYourCredentials: "无法验证您的账号密码。"
    },
    forgotPassword: {
      title: "忘记密码",
      warnMessage:
        "请输入您的 Bindo ID 或邮箱 \n我们会向您发送一封电子邮件，说明如何恢复您的密码。",
      usernameHint: "Bindo ID / 邮箱",
      buttonSend: "发送"
    },
    switchStore: {
      title: "切换商店",
      labelStoreModule: "商店设置",
      labelStorePermissions: "商店权限",
      labelAssociates: "店员",
      labelOtherPaymentInstruments: "支付方法",
      labelRooms: "房间",
      labelTables: "餐桌",
      labelFavoriteTabs: "菜单 (FT)",
      labelFavoriteSections: "菜单 (FS)",
      labelFavorites: "菜单 (F)",
      labelModifierSets: "附加选项",
      labelDiscounts: "折扣",
      labelTaxOption: "税率",
      labelListings: "商品",
      labelEmailTemplates: "邮件模板",
      labelDepartment: "部门",
      labelMerchantId: "下载商户号",
      labelSignIn: "签到",
      labelPaymentConfigs: "支付配置"
    },
    switchUser: {
      title: "切换用户",
      sectionRecentlyActiveUsers: "最近活跃用户",
      sectionAllOtherUsers: "所有其他用户"
    },
    lockScreen: {
      title: "Lock锁屏",
      buttonLogout: "登出",
      messageSingOut: "登出中..."
    },
    unlockScreen: {
      title: "解锁",
      pinHint: "输入 PIN",
      passwordHint: "输入密码",
      buttonUnlock: "解锁",
      buttonChangeToPIN: "PIN",
      buttonChangeToPassword: "密码",
      buttonForgotPassword: "忘记？",
      messagePinIncorrect: "PIN 不正确。",
      messagePasswordIncorrect: "密码不正确",
      messageCannotVerifyYourCredentials: "无法验证您的账号密码。"
    },
    home: {
      drawerMenuRowItemQuickPayment: "快速支付模式",
      drawerMenuRowItemTraditionalMode: "传统POS模式",
      drawerMenuRowItemRetail: "零售 / 快餐店模式",
      drawerMenuRowItemRestaurant: "餐厅模式",
      drawerMenuRowItemCustomer: "用户模式",
      drawerMenuRowItemSettings: "设置",
      drawerMenuRowItemSync: "同步数据",
      drawerMenuRowItemExitApp: '退出',
      messageTrainingMode: "训练模式已开启"
    },
    homeQuickPayment: {
      title: "快速支付",
      buttonCharge: "结账",
      sale: "支付",
      preAuthorization: "预授权",
      paymentHistory: "支付历史",
      settlement: "结算",
      [HTK_THEME]: {
        title: "输入金额",
        buttonConfirm: "确定"
      }
    },
    homeRetailMode: {
      title: "零售 / 快餐店",
      buttonNewSale: "新订单",
      buttonNewSaleViaPickup: "自取",
      buttonNewSaleViaDelivery: "外送",
      rowItemQuickPayment: "快速支付",
      rowItemUnpaidSales: "未付订单",
      rowItemPaymentHistory: "支付历史",
      rowItemSalesHistory: "订单历史"
    },
    homeRestaurantMode: {
      title: "餐厅",
      buttonSearchMaster: "搜索主终端",
      buttonNewSale: "新订单",
      buttonNewSaleViaDineIn: "堂食",
      buttonNewSaleViaPickup: "自取",
      buttonNewSaleViaDelivery: "外送",
      rowItemQuickPayment: "快速支付",
      rowItemUnpaidSales: "未付订单",
      rowItemPaymentHistory: "支付历史",
      rowItemSalesHistory: "订单历史"
    },
    homeTraditionalMode: {
      choosePaymentTraditional: {
        creditCard: "信用卡",
        sale: "销售",
        preAuth: "预授权",
        installment: "分期",
        unSupportWarning: "不支持此交易",
        preAuthComplete: "预授权完成",
        batchHistory: "交易历史",
        settlement: "结算",
        autoSettlementAlert: "自动结算功能已启动",
        queryBalance: "查询余额",
        querybalanceing: "查询中",
        [HTK_THEME]: {
          sale: '销售',
          batchHistory:'交易历史',
        }
      },
      transactionListTraditional: {
        title: "交易历史",
        sale: "销售",
        refund: "退款",
        unpaidSales: "未付款",
        today: "今天",
        noRecord: "没有记录",
        pleaseTryAgain: "请重试"
      },
      transactionSearch: {
        cancel: "取消",
        searchOrderNumber: "查询订单号"
      }
    },
    homeCustomerMode: {
      title: "请输入PIN码以完成校验流程",
      pairSuccess: "设备已成功连接",
      paymentDeviceModeTitle: "欢迎使用"
    },
    homeSettings: {
      title: "设置",
      rowItemEnableTrainingMode: "开启训练模式",
      rowItemEnablePhysicalKey: "启用物理键",
      rowItemPaymentMethodSettings: "支付方式设置",
      rowItemPOSSettings: "POS 设置",
      rowItemReceiptPrinter: "收据打印机",
      rowItemVersion: "版本",
      rowItemTheme: "主题",
      rowItemDevTools: "开发者工具",
      printerBuiltIn: "设备内置打印机",
      printerNotConfigPrinter: "沒有配置打印机",
      buttonQuitApp: "退出应用",
      ePayAuthFail: "未检测到 ePay"
    },
    preAuthHome: {
      preAuth: "预授权",
      preAuthInc: "预授权增加",
      preAuthVoid: "预授权撤销",
      preAuthComplete: "预授权完成",
      preAuthCompleteVoid: "预授权完成撤销"
    },
    preAuthComplete: {
      amount: "金额",
      transactionId: "交易号",
      orderNumber: "订单号",
      preAuthCompleteFailed: "授权失败"
    },
    posSettings: {
      title: "POS 设置",
      rowItemDccDownloadLocalBINs: "Download Local BINs",
      rowItemSettingProxyServer: "设置代理服务器",
      rowItemEnableAutoPrint: "启用自动打印",
      rowItemEnableAlwaysUseSwipe: "启用始终使用刷卡",
      rowItemEnableManual: "启用手动输入卡号",
      rowItemEnablePasswordAuthentication: "启用密码验证",
      rowItemEnablePinPad: "启用 PinPad",
      rowItemEnableForceOnline: "启用强制联机",
      rowItemEnableDynamicCurrencyConversion: "启用动态汇率",
      rowItemEnableAppAutoStart: "启用开机自启动",
      rowItemEnablePreauth: "启用预授权",
      rowItemEnableRefund: "启用退款",
      rowItemEnableRefundHomeMenu: "启动首页退款菜单",
      rowItemPasswordForRefundVoid: "啟用密碼退款/撤單",
      rowItemEnableTipsAdj: "启用小费调整",
      rowItemEnableCreditCardPreTips: "启用小费前置",
      rowItemEnableAutoSettlement: "自动结算",
      rowItemEnableInstallment6Months: "消费分期-6个月",
      rowItemEnableInstallment12Months: "消费分期-12个月",
      rowItemEnableInstallment18Months: "消费分期-18个月",
      rowItemEnableInstallment24Months: "消费分期-24个月",
      rowItemEnableInstallment36Months: "消费分期-36个月",
      rowItemEnableInstallment48Months: "消费分期-48个月",
      rowItemTerminalFloorLimit: "最低限额",
      rowItemTerminalContactlessNeedSignLimit: "非接触式需签名金额",
      rowItemTerminalOtherPaymentNeedSignLimit: "其他支付方式需签名金额",
      rowItemTerminalContactlessFloorLimit: "非接触式最低限额",
      rowItemTerminalContactlessCardholderVerificationLimit:
        "非接触式持卡人验证限额",
      rowItemTerminalContactlessTransactionLimit: "非接触式交易限额",
      rowItemTerminalTipsPercentLimit: "小费百分比限额",
      tipsPercentLimitAlert: "小费百分比需限额至20 ~ 100"
    },
    aboutDevice: {
      title: "关于设备",
      rowItemModel: "型号",
      rowItemSerialNo: "序列号",
      rowItemSystem: "系统",
      rowItemDeviceLocale: "设备语言",
      rowItemTimezone: "时区"
    },
    MerchantID: {
      title: "商户号码"
    },
    chooseReceiptPrinter: {
      title: "收据打印机",
      printerNotSupport: "不支持",
      labelLocalReceiptPrinter: "本地打印机",
      labelDeviceBuilt: "设备内置打印机",
      labelNetworkReceiptPrinter: "局域网打印机"
    },
    choosePaymentMethod: {
      title: "选择支付方式",
      messageTransactionAmountRestriction:
        "如果使用八达通支付，金额不得低于0.1",
      amount: "金额",
      notSupportMsg: "暂不支持该支付方式",
      paymentFPS: images.ic_payment_method_fps_zh,
      qrCode: "二维码"
    },
    payByCash: {
      title: "现金",
      labelCash: "现金",
      labelChange: "找零",
      buttonTender: "付款"
    },
    payByCreditCard: {
      title: "信用卡",
      messagePresentCard: "读卡失败，请重新尝试",
      messagePleaseSwipeCard: "请刷卡",
      messagePleaseInsertCard: "请插卡",
      messageCardIsDetected: "检测到卡",
      messageCardIsDetectedConactless: "卡片已读取，请取走卡片",
      messagePleaseConfirmApplication: "请确认应用",
      messagePleaseEntryPin: "请输入PIN",
      messageRateLookup: "执行在线汇率率查询处理...",
      messageSeePhoneForInstructions: "请查看手机指示",
      messageTryAnotherInterface: "插卡 / 刷卡",
      messageChipCannotBeRead: "芯片无法读取",
      messagePleaseRetryInsertCard: "请重新插卡",
      messagePerformOnlineAuthenticationProcessing: "执行联机授权处理...",
      messagePerformOnlineReversalProcessing: "执行联机冲正处理...",
      messageApproved: "交易批准",
      messageDeclined: "交易拒绝",
      messageReversing: "正在冲正...",
      messageReversalPerformed: "冲正执行成功",
      messageErrorCardDetectTimeout: "卡检测超时",
      messageErrorCardDetectMultipleCards: "请仅提供一张卡",
      messageErrorCardIsBlocked: "卡被锁定",
      messageErrorCannotBeRecognized: "卡片无法识别。",
      messageErrorDeviceNotSupported: "可能不支持此设备。",
      messageErrorCardNotSupport: "卡片不支持",
      messageErrorUnknown: "未知错误。",
      messageReversalCountWarning: "失败超过三次，该笔冲正已删除",
      buttonAccept: "接受",
      buttonReject: "拒绝",
      buttonRetry: "重试",
      buttonConfirm: "确定",
      buttonCancel: "返回",
      buttonReUpload: "Re-upload",
      buttonManualKeyIn: "手动输入",
      creditCardAnimation: images.creditcard_wait_animation,
      warningDialog: {
        message: "Please wait for processing."
      },
      securityKeyboard: {
        amount: "金额",
        message: "请输入PIN码",
        title: "输入PIN码"
      },
      confirm: "确认",
      close: "取消"
    },
    payByCreditCardManual: {
      title: "手动输入",
      labelCardNumber: "卡号",
      labelCardExpiryDate: "到期日 (MM/YY)",
      labelCardCVV: "CVV",
      buttonDone: "完成"
    },
    payPerSignature: {
      title: "签名",
      tipsTitle: "小费",
      "tips&Signature": "小费&签名",
      labelSubtotal: "小计",
      labelTip: "小费",
      labelTotal: "合计",
      messageNoSignatureRequired: "无需签名",
      needSignature: "请签名",
      messageReminders: "我同意根据我的发卡机构协议支付上述金额。",
      buttonSignAndTipOnReceipt: "打印签收单",
      buttonTipOnReceipt: "打印签收单",
      buttonClearSignature: "清除签名",
      buttonDone: "完成",
      quit: "退出",
      reset: "重置",
      confirm: "确认",
      [HTK_THEME]: {
        clear: "清除"
      }
    },
    tipsCustomAmount: {
      title: "自定义小费金额",
      labelSubTotal: "小计",
      labelTip: "小费",
      labelTotal: "总金额",
      buttonDone: "完成",
      tipsLimitAlert: "小费大于最大限额"
    },
    payByQRCode: {
      wechatpayTitle: "微信支付",
      alipayTitle: "支付宝",
      unionCloudTitle: "云闪付",
      aliWechatPayTitle: "支付宝/微信支付",
      tapGo: "Tap & Go",
      labelAmount: "金额",
      buttonSwitchToQRCode: "切换到二维码",
      buttonSwitchToScanner: "切换到二维码扫描器"
    },
    payByBarCodeScan: {
      wechatpayTitle: "微信支付",
      alipayTitle: "支付宝",
      labelAmount: "金额",
      tips: "请将二维码靠近扫码器"
    },
    payByOctopus: {
      title: "八达通",
      tips: "请将你的八达通拍向读卡器",
      messageErrorOctopusFrameworkNotFound:
        "未发现OctopusFramework，八达通支付将无法使用",
      messageErrorDeviceNotSupported: "暂不支持iOS设备",
      offlineOrderlimit: "八达通无法使用，请联系工作人员"
    },
    payByGiftCard: {
      title: "礼品卡",
      messagePleaseSwipeCard: "请刷卡",
      messageCardIsDetected: "检测到卡",
      messagePerformOnlineProcessing: "执行在线处理...",
      messageErrorCannotBeRecognized: "卡片无法识别。",
      messageErrorDeviceNotSupported: "可能不支持此设备。",
      buttonRetry: "重试"
    },
    performPaymentProcessing: {
      messageProcessingPayment: "正在执行支付...",
      warningDialog: {
        message: "Please wait for processing."
      }
    },
    performReturnsProcessing: {
      messageProcessingReturns: "正在执行冲正...",
      warningDialog: {
        message: "Please wait for processing."
      }
    },
    payForSuccess: {
      title: "交易成功",
      messageSuccessBegin: "交易 ",
      messageSuccessEnd: " 已完成",
      labelChange: "找零：",
      emailForReceiptHint: "输入邮箱以接收电子收据",
      buttonSend: "发送",
      buttonPrintReceipt: "打印收据",
      buttonPrintGiftReceipt: "打印礼品收据",
      buttonNoReceipt: "完成",
      sendEmailReceiptSuccess: "发送成功！",
      transactionComplete: "交易完成",
      authorizationComplete: "预授权完成",
      refundComplete: "退款成功",
      amountDeducted: "扣减金额",
      remainingValue: "余额",
      transactionAmount: "支付金額",
      dccAmount: "DCC 金額",
      email: "邮件收据",
      paymentSuccess: "支付成功",
      voidSuccess: "撤销成功",
      refundSuccess: "退款成功",
      tipsSuccess: "小费调整成功",
      preauthSuccess: "预授权成功",
      preauthIncSuccess:  "预授权增加成功",
      preauthCompleteSuccess: "预授权完成成功",
      preauthCompleteVoidSuccess: "預授權完成撤销成功",
      needReceipt: "需要打印小票?",
      [HTK_THEME]: {
        Payment: {
          title: "付款",
          successful: "成功"
        },
        buttonNoReceipt: "完成"
      }
    },
    paymentMethodSettings: {
      title: "支付方式设置",
      rowItemEnableCash: "启用现金",
      rowItemEnableCheck: "启用支票",
      rowItemEnableCreditCard: "启用信用卡",
      rowItemEnableCreditCardEMI: "启用信用卡（分期）",
      rowItemEnableCreditCardManual: "启用信用卡（手动输入）",
      rowItemEnableWeChatPay: "启用微信支付",
      rowItemEnableAlipay: "启用支付宝",
      rowItemEnableOctopus: "启用八达通",
      rowItemEnableGiftCard: "启用礼品卡"
    },
    transactionList: {
      title: "支付历史",
      labelToday: "今日",
      labelIncome: "收入"
    },
    transactionDetail: {
      title: "支付详情",
      menuButtonPrint: "打印",
      menuButtonReprint: "重新打印",
      labelAmount: "金额",
      labelOrderNo: "订单号",
      labelTraceNo: "流水号",
      labelCardNo: "卡号",
      labelOrderPayment: "支付方式",
      labelOrderTime: "时间",
      labelOrderStatus: "状态",
      labelOrderTips: "小费",
      labelBRN: "参考码",
      labelPaymentType: "支付类型",
      cardNumber: "卡号",
      labelOrderRefund: "退款总金额",
      labelOrderVoid: "撤单时间",
      capturedTime: "授权时间",
      menuButtonVoidPayment: "取消支付",
      menuButtonRefund: "退款",
      menuButtonRefundViaCardNotPresent: "退款",
      menuButtonRefundOrPartialRefund: "退款或部分退款",
      menuButtonTipAdjustment: "小费调整",
      alertDialog: {
        voidTitle: "取消支付",
        voidMessage: "确认取消支付?",
        preAuthCompleteTitle: "预授权完成",
        preAuthCompleteMessage: "确认完成预授权?",
        preAuthIncTitle: "预授权增加",
        preAuthIncMessage: "确认增加预授权?",
        preauthVoidTitle: "预授权撤销",
        preauthVoidMessage: "确认撤销预授权?",
        preauthCompleteVoidTitle: "预授权完成撤销",
        preauthCompleteVoidMessage: "确认撤销预授权完成?",
        refundTitle: "交易退款",
        refundMessage: "确认进行退款?",
        tipsTitle: "小费",
        tipsMessage: "确认添加小费?",
        customerDisplayTitle: "退出用户模式",
        customerDisplayMessage: "确认退出用户模式?",
        buttonCancel: "取消",
        buttonConfirm: "确定"
      },
      labelStatusSuccess: "成功",
      labelStatusFailed: "失败",
      labelStatusUnknown: "未知",
      pinError: "PIN码有误，请检查",
      pinNoPermission: "PIN码无权限",
      voiding: "处理中...",
      processing: "处理中..."
    },
    refund: {
      amount: "金额",
      date: "日期",
      chooseDate: "选择日期",
      enterRRN: "输入RRN",
      tip: "退款金额不能大于订单金额",
      title: "退款",
      refundFailed: "退款失败",
      refundDialog: {
        title: "退款",
        message: "请确认是否退款？",
        buttonCancel: "取消",
        buttonConfirm: "确认"
      },
      refunding: "退款处理中..."
    },
    settlement: {
      title: "结算",
      doneButton: "完成",
      settlementMessage: "确认结算?",
      message: "结算完成",
      messageLoading: "正在处理...",
      messageReversal: "交易失败，执行冲正...",
      transaction: "交易",
      count: "笔",
      total: "总金额",
      labelType: "类型",
      labelCount: "笔数",
      labelAmount: "金额",
      confirm: "确定",
      histories: "历史记录",
      processingSettlement: "结算中...",
      settlementFailed: "结算失败",
      printError: "打印错误",
      settlementCompleted: "结算成功",
      totalAmount: "总金额",
      totalCount: "总笔数"
    },
    settlementDetail: {
      orderNo: "订单编号",
      time: "时间"
    },
    orderList: {
      title: "订单历史",
      labelTable: "台号",
      labelListingItems: "个项目"
    },
    orderDetail: {
      title: "订单详情",
      menuButtonPrint: "打印",
      menuButtonReprint: "重新打印",
      labelOrderNo: "订单号",
      labelOrderPayment: "支付方式",
      labelOrderTime: "时间",
      labelOrderStatus: "订单状态",
      labelOrderTotal: "订单总额",
      labelTables: "台号",
      buttonShowItems: "显示项目",
      buttonHideItems: "隐藏项目",
      labelTotalItems: "总件数",
      labelSubTotal: "小计",
      labelDiscounts: "折扣",
      labelRounding: "取整",
      labelTax: "税额",
      labelServiceFee: "服务费",
      labelTaxIncludedInPrice: "已包含税",
      menuButtonVoidPayment: "取消支付",
      menuButtonVoidOrder: "取消订单",
      voidPaymentDialog: {
        title: "取消支付",
        message: "确认取消支付?",
        buttonCancel: "取消",
        buttonConfirm: "确定"
      },
      voidOrderDialog: {
        title: "取消订单",
        message: "你确定要取消这个订单（不可逆转）吗？"
      }
    },
    unpaidSales: {
      title: "未付款的订单",
      labelTable: "台号",
      labelListingItems: "个项目"
    },
    chooseAssociate: {
      title: "选择店员"
    },
    chooseCustomer: {
      title: "选择客户",
      customerInfoDialog: {
        selectBtn: "选择",
        firstLabelText: "概要",
        secondLabelText: "信息",
        thirdLabelText: "笔记",
        sales: "访问次数",
        averageAmount: "平均消费",
        storeCredit: "商店信用",
        lastVisit: "最近访问",
        averageVisit: "平均访问",
        totalSpent: "总共消费",
        customerHighLights: "客户亮点",
        availablePoints: "可用积分",
        lifetimePoints: "全部积分",
        redeemedPoints: "已兑换积分",
        redemptions: "兑换次数",
        lastRedemption: "最近兑换",
        qualifiedRewards: "奖励次数",
        rewardStatus: "奖励状况"
      }
    },
    newCustomer: {
      title: "新增客户",
      genderPickerDialog: {
        title: "性别",
        itemMale: "男",
        itemFemale: "女",
        itemNone: "无"
      },
      fullNameHint: "全名",
      dateOfBirthHint: "生日",
      genderHint: "性别",
      emailHint: "邮箱",
      mobileHint: "手机",
      phoneHint: "电话",
      noteHint: "备注",
      buttonSaveAndSelect: "保存并选择"
    },
    newSale: {
      title: "新订单",
      buttonSend: "发送",
      buttonHold: "保存",
      buttonCharge: "结账",
      buttonClearTable: "清桌",
      messageProductNotFound: "无此商品",
      table: "台号",
      people: "人",
      showBill: "显示账单",
      order: "点餐",
      moreActionsDialog: {
        buttonChooseCustomer: "选择客户",
        buttonAddCharge: "增加费用",
        buttonAddPercentDiscount: "增加 % 折扣",
        buttonAddAmountDiscount: "增加 $ 折扣",
        buttonAddAdvanceDiscount: "增加高级折扣",
        buttonSellStoreCredit: "销售商店代币",
        buttonSellGiftCard: "销售礼品卡",
        buttonPrintCheck: "打印"
      },
      discardDialog: {
        title: "订单未保存",
        message: "保存当前已更改的订单？",
        buttonCancel: "取消",
        buttonDiscard: "放弃",
        buttonSave: "保存"
      },
      shoppingCarPopup: {
        labelTable: "台号",
        labelTurnTimeHour: "小时",
        labelTurnTimeMinute: "分",
        labelCashier: "出纳员：",
        labelPartyOf: "人数：",
        labelTurnTimeLeft: "左右",
        labelServer: "服务员：",
        labelCourier: "配送员：",
        labelDeliverTo: "配送至：",
        deleteWarn: "该菜品已发送，是否要撤销？",
        sent: "已发送"
      },
      setPartyNumberOfPeopleDialog: {
        title: "设置就餐人数"
      }
    },
    newSaleAddCharge: {
      title: "增加费用",
      amountHint: "金额",
      noteHint: "备注",
      buttonAddCharge: "增加费用"
    },
    newSaleAddAmountDiscount: {
      title: "添加 $ 折扣",
      labelSectionRegular: "定期折扣",
      labelSectionMixAndMatch: "混合折扣",
      labelVariable: "可变的"
    },
    NewSaleAddRegularDiscountsSetVariable: {
      title: "$ 折扣",
      labelDiscountTilte: "折扣标题",
      labelAmount: "金额",
      buttonDone: "完成"
    },
    newSaleAddPercentDiscount: {
      title: "添加 % 折扣",
      labelSectionRegular: "定期折扣",
      labelSectionMixAndMatch: "混合折扣",
      labelVariable: "可变的"
    },
    newSaleAddPercentDiscountSetVariable: {
      title: "% 折扣",
      labelDiscountTilte: "折扣标题",
      labelAmount: "折扣值",
      buttonDone: "完成"
    },
    newSaleAddRegularDiscount: {
      title: "普通折扣"
    },
    newSaleAddAdvanceDiscount: {
      title: "高级折扣"
    },
    newSaleSellStoreCredit: {
      title: "销售商店代币",
      amountHint: "金额",
      noteHint: "备注",
      buttonSellStoreCredit: "销售商店代币"
    },
    newSaleSellGiftCard: {
      title: "销售礼品卡",
      swipeHint: "刷一张全新的礼品卡开始体验",
      buttonRetry: "重试",
      buttonNext: "下一步",
      messageOfRecogizeFail: "识别失败",
      messageOfRecogizeSuccess: "已识别"
    },
    newSaleSellGiftCardAddAmount: {
      title: "添加金额",
      labelAmount: "金额",
      buttonAddAmount: "增加金额"
    },
    newSaleEditShippingMethod: {
      title: "修改配送方式",
      displayDineIn: {
        setTurnTimeDialog: {
          title: "设置限时"
        },
        labelTable: "台号",
        labelPartySize: "人数",
        labelServer: "服务员",
        labelTurnTime: "限时",
        labelTurnTimeHour: "小时",
        labelTurnTimeMinute: "分",
        buttonDone: "完成"
      },
      displayPickup: {
        labelCashier: "出纳员",
        buttonDone: "完成"
      },
      displayDelivery: {
        labelDeliveryInfo: "配送信息",
        labelCourier: "配送员",
        labelCashier: "出纳员",
        buttonDone: "完成"
      },
      menuButtonVoidOrder: "取消订单",
      voidOrderDialog: {
        title: "取消订单",
        message: "你确定要取消这个订单（不可逆转）吗？"
      }
    },
    newSaleEditDeliveryInfo: {
      title: "编辑配送信息",
      fullNameHint: "全名",
      mobileHint: "手机",
      shippingAddressHint: "配送地址",
      noteHint: "备注",
      buttonDone: "完成"
    },
    newSaleEditLineItem: {
      title: "编辑项目",
      labelQuantity: "数量",
      labelDiscounts: "折扣",
      labelAdvancedDiscounts: "高级折扣",
      labelTaxOptions: "税率",
      labelOverwriteName: "覆盖商品名",
      labelOverwritePrice: "覆盖价格",
      labelNote: "备注",
      placeholderDiscountsNone: "无",
      placeholderDiscountsMultiple: "多种",
      placeholderTaxOptionsNone: "无",
      placeholderTaxOptionsMultiple: "多种",
      buttonDone: "完成"
    },
    newSaleEditLineItemOverwritePrice: {
      title: "覆盖价格",
      amountHint: "金额",
      noteHint: "备注",
      buttonDone: "完成"
    },
    newSaleEditLineItemWeight: {
      title: "设置重量",
      amountHint: "重量",
      noteHint: "备注",
      buttonDone: "完成"
    },
    newSaleEditLineItemModifier: {
      title: "附加选项",
      labelChoose: "已选",
      labelItemOptions: "选项",
      messageYouMustChooseAtLeastOptions:
        '您必须至少为附加选项 "___title___" 选择 ___chooseAtLeast___  个选项。',
      modifierPrefix: {
        add: "加",
        less: "少",
        more: "多",
        change: "转",
        with: "跟",
        no: "免",
        side: "放边"
      },
      buttonCancel: "取消",
      buttonConfirm: "确认",
      buttonReset: "重置",
      LeastChoice: "最少选择",
      MostChoice: "最多选择"
    },
    newSaleEditLineItemModifierOverwritePrice: {
      title: "覆盖价格",
      amountHint: "金额",
      noteHint: "备注",
      buttonDone: "完成"
    },
    newSaleEditLineItemDiscounts: {
      title: "折扣"
    },
    newSaleEditLineItemTaxOptions: {
      title: "税率"
    },
    newSaleCheckout: {
      title: "结账",
      labelTable: "台号",
      labelTurnTimeHour: "小时",
      labelTurnTimeMinute: "分",
      labelCashier: "出纳员：",
      labelPartyOf: "人数：",
      labelTurnTimeLeft: "左右",
      labelServer: "服务员：",
      labelDeliverTo: "配送至：",
      labelTotalItems: "总件数",
      labelSubTotal: "小计",
      labelDiscounts: "折扣",
      labelTax: "税额",
      labelServiceFee: "服务费",
      labelTaxIncludedInPrice: "已包含税",
      buttonCharge: "结账"
    },
    searchFavorite: {
      title: "搜索产品",
      keywordHint: "输入关键词"
    },
    searchMaster: {
      title: "搜索主终端",
      messageSearching: "正在搜索主终端...",
      messageSuccess: "成功",
      messageFailed: "失败",
      buttonOk: "确定",
      buttonCancel: "取消",
      buttonRetry: "重试"
    },
    chooseTable: {
      title: "选择桌子",
      filterDialog: {
        title: "按状态过滤"
      },
      sectionAvailable: "可使用",
      sectionOccupied: "使用中",
      labelTable: "台号",
      labelAvailableSeats: "个可用座位"
    },
    chooseTableParty: {
      title: "选择桌子（Party）",
      sectionCurrentParties: "现时客人",
      sectionUpcoming: "即将到来客人",
      labelTable: "台号",
      labelPartyOf: "人数："
    },
    themeSelect: {
      title: "主题"
    },
    devTools: {
      title: "开发者工具"
    },
    addTips: {
      adjusting: "调整中...",
      adjustingFailed: "小费调整失败",
      availablePercent: "超过最大比例{percent}%",
      [HTK_THEME]: {
        tip: "小费"
      }
    },
    payFailed: {
      title: "交易失败",
      back: "返回",
      failedTitle: "交易失败"
    }
  }
};
