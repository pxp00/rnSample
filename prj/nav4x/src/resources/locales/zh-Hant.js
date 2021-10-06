import images from "../images";
import { HTK_THEME } from "../../utilities/Constants";

export default {
  alert: "提示",
  appName: "Bindo Payment",
  globals: {
    messageExitAppConfirm: "再按一次可退出應用程式",
    messageNetworkRequestFailed: "網絡連接超時，請檢查您的網絡配置。",
    messageCanNotConnectToMaster: "無法連接到主終端，請檢查網絡連接是否正常。",
    messageCallPayCheck: "非法的數據格式",
    pendingActivationDialog: {
      title: "待激活",
      message: "請聯繫客戶支持。"
    },
    paymentMethod: {
      all: "全部",
      cash: "現金",
      creditCard: "信用卡",
      creditCardEMI: "信用卡（分期付款）",
      creditCardManual: "信用卡（手動輸入）",
      wechatPay: "微信支付",
      alipay: "支付寶",
      octopus: "八達通",
      giftCard: "禮品卡",
      check: "支票",
      other: "其他",
      qrCode: "二維碼支付",
      tapGo: "Tap&Go",
      unionPayQR: "雲閃付",
      unionCloudPay: "雲閃付",
      unionPay: "銀聯",
      unionPayScan: "雲閃付",
      oePay: "Octopus Wallet 八達通銀包",
      fps: "FPS"
    },
    paymentType: {
      sale: "支付",
      preauth: "預授權",
      preauth_complete: "預授權完成",
      void: "撤銷",
      refund: "退款",
      tips: "小費",
      preauth_void: "預授權撤銷",
      preauth_complete_void: "預授權完成撤銷",
      void_sale: "支付撤銷"
    },
    shippingMethod: {
      dineIn: "堂食",
      pickup: "自取",
      delivery: "外賣"
    },
    orderInventoryState: {
      unknown: "未知",
      in_transit: "運送中",
      unfulfilled: "未收貨",
      fulfilled: "已收貨"
    },
    orderQuoteInvoiceState: {
      unknown: "未知",
      partial_paid: "部分已付款",
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
      default: "默認",
      seated: "已座台",
      ordered: "已下單",
      checkDropped: "已印單",
      paid: "已付款",
      multiple: "混合台",
      reserved: "已預訂",
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
      CONFIRM: "确定"
    },
    passwordInputDialog: {
      cancel: "取消",
      confirm: "確定",
      inputpw: "輸入密碼"
    },
    loader: {
      messageLoading: "正在加載...",
      messageLoadingConfiguration: "正在加載配置項...",
      messageProcessing: "正在執行...",
      messageReversal: "請求失敗，正在執行沖正...",
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
      messageNoMoreData: "無更多數據"
    },
    listEmptyIndicator: {
      messageLoading: "正在加載...",
      messageDataNotFound: "沒有找到數據"
    },
    noActivityTimeoutModal: {
      message: "超時沒有操作，將在 __countdown__ 秒後返回。",
      buttonKeep: "保持"
    }
  },
  screens: {
    initialize: {
      messageUpdatingConfiguration: "正在更新配置項..."
    },
    login: {
      title: "登錄",
      usernameHint: "Bindo ID / 郵箱",
      passwordHint: "密碼",
      buttonLogin: "登錄",
      HKTbuttonLogin: "登錄",
      buttonForgotPassword: "忘記密碼？",
      buttonSettingProxyServer: "設置代理服務器",
      messageCannotVerifyYourCredentials: "無法驗證您的賬號密碼。"
    },
    forgotPassword: {
      title: "忘記密碼",
      warnMessage:
        "請輸入您的 Bindo ID 或郵箱 \n我們會向您發送一封電子郵件，說明如何恢復您的密碼。",
      usernameHint: "Bindo ID / 郵箱",
      buttonSend: "發送"
    },
    switchStore: {
      title: "切換商店",
      labelStoreModule: "商店設置",
      labelStorePermissions: "商店權限",
      labelAssociates: "店員",
      labelOtherPaymentInstruments: "付款方法",
      labelRooms: "房間",
      labelTables: "餐桌",
      labelFavoriteTabs: "菜單 (FT)",
      labelFavoriteSections: "菜單 (FS)",
      labelFavorites: "菜單 (F)",
      labelModifierSets: "附加選項",
      labelDiscounts: "折扣",
      labelTaxOption: "稅率",
      labelListings: "商品",
      labelEmailTemplates: "郵件模板",
      labelDepartment: "部門",
      labelMerchantId: "下載商戶號",
      labelSignIn: "簽到",
      labelPaymentConfigs: "付款配置"
    },
    switchUser: {
      title: "切換用戶",
      sectionRecentlyActiveUsers: "最近活躍用戶",
      sectionAllOtherUsers: "所有其他用戶"
    },
    lockScreen: {
      title: "鎖屏",
      buttonLogout: "登出",
      messageSingOut: "登出中..."
    },
    unlockScreen: {
      title: "解鎖",
      pinHint: "輸入 PIN",
      passwordHint: "輸入密碼",
      buttonUnlock: "解鎖",
      buttonChangeToPIN: "PIN",
      buttonChangeToPassword: "密碼",
      buttonForgotPassword: "忘記？",
      messagePinIncorrect: "PIN 不正確。",
      messagePasswordIncorrect: "密碼不正確",
      messageCannotVerifyYourCredentials: "無法驗證您的賬號密碼。"
    },
    home: {
      drawerMenuRowItemQuickPayment: "快速支付模式",
      drawerMenuRowItemTraditionalMode: "傳統POS模式",
      drawerMenuRowItemRetail: "零售 / 快餐店模式",
      drawerMenuRowItemRestaurant: "餐廳模式",
      drawerMenuRowItemCustomer: "用戶模式",
      drawerMenuRowItemSettings: "設定",
      drawerMenuRowItemSync: "同步數據",
      drawerMenuRowItemExitApp: "退出",
      messageTrainingMode: "訓練模式已開啟"
    },
    homeQuickPayment: {
      title: "快速支付",
      buttonCharge: "結賬",
      sale: "支付",
      preAuthorization: "預授權",
      paymentHistory: "支付歷史",
      settlement: "結算",
      [HTK_THEME]: {
        title: "輸入金額",
        buttonConfirm: "確定"
      }
    },
    homeRetailMode: {
      title: "零售 / 快餐店",
      buttonNewSale: "新訂單",
      buttonNewSaleViaPickup: "自取",
      buttonNewSaleViaDelivery: "外送",
      rowItemQuickPayment: "快速支付",
      rowItemUnpaidSales: "未付訂單",
      rowItemPaymentHistory: "支付歷史",
      rowItemSalesHistory: "訂單歷史"
    },
    homeRestaurantMode: {
      title: "餐廳",
      buttonSearchMaster: "搜索主終端",
      buttonNewSale: "新訂單",
      buttonNewSaleViaDineIn: "堂食",
      buttonNewSaleViaPickup: "自取",
      buttonNewSaleViaDelivery: "外送",
      rowItemQuickPayment: "快速支付",
      rowItemUnpaidSales: "未付訂單",
      rowItemPaymentHistory: "支付歷史",
      rowItemSalesHistory: "訂單歷史"
    },
    homeTraditionalMode: {
      choosePaymentTraditional: {
        creditCard: "信用卡",
        sale: "銷售",
        preAuth: "預授權",
        installment: "分期",
        unSupportWarning: "不支持此交易",
        preAuthComplete: "預授權完成",
        batchHistory: "交易歷史",
        settlement: "結算",
        autoSettlementAlert: "自動結算功能已啟動",
        queryBalance: "查詢余額",
        queryBalanceing: "查詢中",
        [HTK_THEME]: {
          sale: "銷售",
          batchHistory: "交易歷史"
        }
      },
      transactionListTraditional: {
        title: "交易歷史",
        sale: "銷售",
        refund: "退款",
        unpaidSales: "未付款",
        today: "今天",
        noRecord: "沒有記錄",
        pleaseTryAgain: "請重試"
      },
      transactionSearch: {
        cancel: "取消",
        searchOrderNumber: "查詢訂單號"
      }
    },
    homeCustomerMode: {
      title: "請輸入PIN碼以完成校驗流程",
      pairSuccess: "設備已成功連接",
      paymentDeviceModeTitle: "歡迎使用"
    },
    homeSettings: {
      title: "設定",
      rowItemEnableTrainingMode: "開啟訓練模式",
      rowItemEnablePhysicalKey: "啟用物理鍵",
      rowItemPaymentMethodSettings: "支付方式設定",
      rowItemPOSSettings: "POS 設定",
      rowItemReceiptPrinter: "收據打印機",
      rowItemVersion: "版本",
      rowItemTheme: "主題",
      rowItemDevTools: "開發者工具",
      printerBuiltIn: "設備內置打印機",
      printerNotConfigPrinter: "沒有配置打印機",
      buttonQuitApp: "退出應用",
      ePayAuthFail: "未檢測到 ePay"
    },
    preAuthHome: {
      preAuth: "預授權",
      preAuthInc: "預授權增加",
      preAuthVoid: "預授權撤銷",
      preAuthComplete: "預授權完成",
      preAuthCompleteVoid: "預授權完成撤銷"
    },
    preAuthComplete: {
      amount: "金額",
      transactionId: "交易號",
      orderNumber: "訂單號",
      preAuthCompleteFailed: "授權失敗，\n預授權完成金額不能大於訂單金額"
    },
    posSettings: {
      title: "POS 設定",
      rowItemDccDownloadLocalBINs: "Download Local BINs",
      rowItemSettingProxyServer: "設置代理服務器",
      rowItemEnableAlwaysUseSwipe: "啟用始終使用刷卡",
      rowItemEnableManual: "啟用手動輸入卡號",
      rowItemEnablePasswordAuthentication: "啟用密碼驗證",
      rowItemEnablePinPad: "啟用 PinPad",
      rowItemEnableForceOnline: "啟用強制聯機",
      rowItemEnableDynamicCurrencyConversion: "啟用動態匯率",
      rowItemEnableAppAutoStart: "啟用開機自啟動",
      rowItemEnablePreauth: "啟用預授權",
      rowItemEnableRefund: "啟用退款",
      rowItemEnableRefundHomeMenu: "啟動首頁退款選單",
      rowItemPasswordForRefundVoid: "啟用退款",
      rowItemEnableTipsAdj: "啟用小費調整",
      rowItemEnableCreditCardPreTips: "啟用小費前置",
      rowItemEnableAutoSettlement: "自動結算",
      rowItemEnableInstallment6Months: "消費分期-6個月",
      rowItemEnableInstallment12Months: "消費分期-12個月",
      rowItemEnableInstallment18Months: "消費分期-18個月",
      rowItemEnableInstallment24Months: "消費分期-24個月",
      rowItemEnableInstallment36Months: "消費分期-36個月",
      rowItemEnableInstallment48Months: "消費分期-48個月",
      rowItemTerminalFloorLimit: "最低限額",
      rowItemTerminalContactlessNeedSignLimit: "非接觸式需簽名金額",
      rowItemTerminalOtherPaymentNeedSignLimit: "其他支付方式需簽名金額",
      rowItemTerminalContactlessFloorLimit: "非接觸式最低限額",
      rowItemTerminalContactlessCardholderVerificationLimit:
        "非接觸式持卡人驗證限額",
      rowItemTerminalContactlessTransactionLimit: "非接觸式交易限額",
      rowItemTerminalTipsPercentLimit: "小費百分比限額",
      tipsPercentLimitAlert: "小費百分比需限額至20 ~ 100"
    },
    aboutDevice: {
      title: "關於設備",
      rowItemModel: "型號",
      rowItemSerialNo: "序列號",
      rowItemSystem: "系統",
      rowItemDeviceLocale: "設備語言",
      rowItemTimezone: "時區"
    },
    MerchantID: {
      title: "商戶號碼"
    },
    chooseReceiptPrinter: {
      title: "收據打印機",
      printerNotSupport: "不支持",
      labelLocalReceiptPrinter: "本地打印機",
      labelDeviceBuilt: "設備內置打印機",
      labelNetworkReceiptPrinter: "局域網打印機"
    },
    choosePaymentMethod: {
      title: "選擇支付方式",
      messageTransactionAmountRestriction:
        "如果使用八達通支付，金額不得低於0.1",
      amount: "金額",
      notSupportMsg: "暫不支持該支付方式",
      paymentFPS: images.ic_payment_method_fps_zh,
      qrCode: "二維碼"
    },
    payByCash: {
      title: "現金",
      labelCash: "現金",
      labelChange: "找零",
      buttonTender: "付款"
    },
    payByCreditCard: {
      title: "信用卡",
      messagePresentCard: "讀卡失敗，請重新嘗試",
      messagePleaseSwipeCard: "請刷卡",
      messagePleaseInsertCard: "請插卡",
      messageCardIsDetected: "檢測到卡",
      messageCardIsDetectedConactless: "卡片已讀取，請取走卡片",
      messagePleaseConfirmApplication: "請確認應用",
      messagePleaseEntryPin: "請輸入PIN",
      messageRateLookup: "執行在線匯率率查詢處理...",
      messageSeePhoneForInstructions: "請查看手機指示",
      messageTryAnotherInterface: "插卡 / 刷卡",
      messageChipCannotBeRead: "芯片無法讀取",
      messagePleaseRetryInsertCard: "請重新插卡",
      messagePerformOnlineAuthenticationProcessing: "執行聯機授權處理...",
      messagePerformOnlineReversalProcessing: "執行聯機沖正處理...",
      messageApproved: "交易批准",
      messageDeclined: "交易拒絕",
      messageReversing: "正在衝正...",
      messageReversalPerformed: "衝正執行成功",
      messageErrorCardDetectTimeout: "卡檢測超時",
      messageErrorCardDetectMultipleCards: "請僅提供一張卡",
      messageErrorCardIsBlocked: "卡被鎖定",
      messageErrorCannotBeRecognized: "卡片無法識別。",
      messageErrorDeviceNotSupported: "可能不支持此設備。",
      messageErrorCardNotSupport: "卡片不支持",
      messageErrorUnknown: "未知錯誤。",
      messageReversalCountWarning: "失敗超過三次，該筆沖正已刪除",
      buttonAccept: "接受",
      buttonReject: "拒绝",
      buttonRetry: "重試",
      buttonConfirm: "確定",
      buttonCancel: "返回",
      buttonReUpload: "Re-upload",
      buttonManualKeyIn: "手動輸入",
      creditCardAnimation: images.creditcard_wait_animation,
      warningDialog: {
        message: "Please wait for processing."
      },
      securityKeyboard: {
        amount: "金額",
        message: "請輸入PIN碼",
        title: "輸入PIN碼"
      },
      confirm: "确认",
      close: "取消"
    },
    payByCreditCardManual: {
      title: "手動輸入",
      labelCardNumber: "卡號",
      labelCardExpiryDate: "到期日 (MM/YY)",
      labelCardCVV: "CVV",
      buttonDone: "完成"
    },
    payPerSignature: {
      title: "簽名",
      tipsTitle: "小費",
      "tips&Signature": "小費&簽名",
      labelSubtotal: "小計",
      labelTip: "小費",
      labelTotal: "合計",
      messageNoSignatureRequired: "無需簽名",
      needSignature: "請簽名",
      messageReminders: "我同意根據我的發卡機構協議支付上述金額。",
      buttonSignAndTipOnReceipt: "打印簽收單",
      buttonTipOnReceipt: "打印簽收單",
      buttonClearSignature: "清除簽名",
      buttonDone: "完成",
      quit: "退出",
      reset: "重置",
      confirm: "確認",
      [HTK_THEME]: {
        clear: "清除"
      }
    },
    tipsCustomAmount: {
      title: "自定義小費金額",
      labelSubTotal: "小計",
      labelTip: "小費",
      labelTotal: "總金額",
      buttonDone: "完成",
      tipsLimitAlert: "小費大於最大限額"
    },
    payByQRCode: {
      wechatpayTitle: "微信支付",
      alipayTitle: "支付寶",
      unionCloudTitle: "云閃付",
      aliWechatPayTitle: "支付寶/微信支付",
      tapGo: "Tap & Go",
      labelAmount: "金額",
      buttonSwitchToQRCode: "切換到二維碼",
      buttonSwitchToScanner: "切換到二維碼掃描器"
    },
    payByBarCodeScan: {
      wechatpayTitle: "微信支付",
      alipayTitle: "支付寶",
      labelAmount: "金額",
      tips: "請將二維碼靠近掃碼器"
    },
    payByOctopus: {
      title: "八達通",
      tips: "請將你的八達通拍向讀卡器",
      messageErrorOctopusFrameworkNotFound:
        "未發現OctopusFramework，八達通支付將無法使用",
      messageErrorDeviceNotSupported: "暫不支持iOS設備",
      offlineOrderlimit: "八達通無法使用，請聯繫工作人員"
    },
    payByGiftCard: {
      title: "禮品卡",
      messagePleaseSwipeCard: "請刷卡",
      messageCardIsDetected: "檢測到卡",
      messagePerformOnlineProcessing: "執行在線處理",
      messageErrorCannotBeRecognized: "卡片無法識別。",
      messageErrorDeviceNotSupported: "可能不支持此設備。",
      buttonRetry: "重試"
    },
    performPaymentProcessing: {
      messageProcessingPayment: "正在執行支付...",
      warningDialog: {
        message: "Please wait for processing."
      }
    },
    performReturnsProcessing: {
      messageProcessingReturns: "正在執行沖正...",
      warningDialog: {
        message: "Please wait for processing."
      }
    },
    payForSuccess: {
      title: "交易成功",
      messageSuccessBegin: "交易 ",
      messageSuccessEnd: " 已完成",
      labelChange: "找零：",
      emailForReceiptHint: "輸入郵箱以接收電子收據",
      buttonSend: "發送",
      buttonPrintReceipt: "打印收據",
      buttonPrintGiftReceipt: "打印禮品收據",
      buttonNoReceipt: "完成",
      sendEmailReceiptSuccess: "發送成功！",
      transactionComplete: "交易完成",
      authorizationComplete: "預授權完成",
      refundComplete: "退款成功",
      amountDeducted: "扣減金額",
      remainingValue: "餘額",
      transactionAmount: "支付金額",
      dccAmount: "DCC 金額",
      paymentSuccess: "支付成功",
      voidSuccess: "撤銷成功",
      refundSuccess: "退款成功",
      tipsSuccess: "小費調整成功",
      preauthSuccess: "預授權成功",
      preauthIncSuccess: "預授權增加成功",
      preauthCompleteSuccess: "預授權完成成功",
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
      title: "支付方式設置",
      rowItemEnableCash: "啟用現金",
      rowItemEnableCheck: "啟用支票",
      rowItemEnableCreditCard: "啟用信用卡",
      rowItemEnableCreditCardEMI: "啟用信用卡（分期）",
      rowItemEnableCreditCardManual: "啟用信用卡（手動輸入）",
      rowItemEnableWeChatPay: "啟用微信支付",
      rowItemEnableAlipay: "啟用支付寶",
      rowItemEnableOctopus: "啟用八達通",
      rowItemEnableGiftCard: "啟用禮品卡"
    },
    transactionList: {
      title: "支付歷史",
      labelToday: "今日",
      labelIncome: "收入"
    },
    transactionDetail: {
      title: "支付詳情",
      menuButtonPrint: "打印",
      menuButtonReprint: "重新打印",
      labelAmount: "金額",
      labelOrderNo: "訂單號",
      labelTraceNo: "流水號",
      labelCardNo: "卡號",
      labelOrderPayment: "支付方式",
      labelOrderTime: "時間",
      labelOrderStatus: "狀態",
      labelOrderTips: "小費",
      labelBRN: "參考碼",
      cardNumber: "卡號",
      labelPaymentType: "支付類型",
      labelOrderRefund: "退款金额",
      labelOrderVoid: "撤單時間",
      capturedTime: "授權時間",
      menuButtonVoidPayment: "取消支付",
      menuButtonRefund: "退款",
      menuButtonRefundViaCardNotPresent: "退款",
      menuButtonRefundOrPartialRefund: "退款或部分退款",
      preAuthComplete: "預授權完成",
      menuButtonTipAdjustment: "小費調整",
      alertDialog: {
        voidTitle: "取消支付",
        voidMessage: "確認取消支付?",
        preAuthCompleteTitle: "預授權完成",
        preAuthCompleteMessage: "確認完成預授權?",

        preAuthIncTitle: "預授權增加",
        preAuthIncMessage: "確認增加預授權?",

        preauthVoidTitle: "預授權撤銷",
        preauthVoidMessage: "確認撤銷預授權?",
        preauthCompleteVoidTitle: "預授權完成撤銷",
        preauthCompleteVoidMessage: "確認撤銷預授權完成?",
        refundTitle: "交易退款",
        refundMessage: "確認進行退款?",
        customerDisplayTitle: "退出用戶模式",
        customerDisplayMessage: "確認退出用戶模式?",
        tipsTitle: "小費",
        tipsMessage: "確認添加小費?",

        buttonCancel: "取消",
        buttonConfirm: "確定"
      },
      labelStatusSuccess: "成功",
      labelStatusFailed: "失敗",
      labelStatusUnknown: "未知",
      pinError: "PIN碼有誤，請檢查",
      pinNoPermission: "PIN碼無權限",
      voiding: "處理中...",
      processing: "處理中..."
    },
    refund: {
      amount: "金額",
      date: "日期",
      chooseDate: "選擇日期",
      enterRRN: "輸入RRN",
      tip: "退款金額不能大於訂單金額",
      title: "退款",
      refundFailed: "退款失敗",
      refundDialog: {
        title: "退款",
        message: "請確認是否退款？",
        buttonCancel: "取消",
        buttonConfirm: "確認"
      },
      refunding: "退款處理中..."
    },
    settlement: {
      title: "結算",
      doneButton: "完成",
      message: "結算完成",
      settlementMessage: "確認結算?",
      messageLoading: "正在處理...",
      messageReversal: "交易失敗，執行沖正...",
      transaction: "交易",
      count: "筆",
      total: "總金額",
      labelType: "類型",
      labelCount: "筆數",
      labelAmount: "金額",
      confirm: "確定",
      histories: "歷史記錄",
      processingSettlement: "結算中...",
      settlementFailed: "結算失敗",
      printError: "打印錯誤",
      settlementCompleted: "結算成功",
      totalAmount: "總金額",
      totalCount: "總筆數"
    },
    settlementDetail: {
      orderNo: "訂單編號",
      time: "時間"
    },
    orderList: {
      title: "訂單歷史",
      labelTable: "台號",
      labelListingItems: "個項目"
    },
    orderDetail: {
      title: "訂單詳情",
      menuButtonPrint: "打印",
      menuButtonReprint: "重新打印",
      labelOrderNo: "訂單號",
      labelOrderPayment: "支付方式",
      labelOrderTime: "時間",
      labelOrderStatus: "訂單狀態",
      labelOrderTotal: "訂單總額",
      labelTables: "臺號",
      buttonShowItems: "顯示項目",
      buttonHideItems: "隱藏項目",
      labelTotalItems: "總件數",
      labelSubTotal: "小計",
      labelDiscounts: "折扣",
      labelRounding: "取整",
      labelTax: "稅額",
      labelServiceFee: "服務費",
      labelTaxIncludedInPrice: "已包含稅",
      menuButtonVoidPayment: "取消支付",
      menuButtonVoidOrder: "取消訂單",
      voidPaymentDialog: {
        title: "取消支付",
        message: "確認取消支付?",
        buttonCancel: "取消",
        buttonConfirm: "確定"
      },
      voidOrderDialog: {
        title: "取消訂單",
        message: "你確定要取消這個訂單（不可逆轉）嗎？"
      }
    },
    unpaidSales: {
      title: "未付款的訂單",
      labelTable: "台號",
      labelListingItems: "個項目"
    },
    chooseAssociate: {
      title: "選擇店員"
    },
    chooseCustomer: {
      title: "選擇客戶",
      customerInfoDialog: {
        selectBtn: "選擇",
        firstLabelText: "概要",
        secondLabelText: "信息",
        thirdLabelText: "筆記",
        sales: "訪問次數",
        averageAmount: "平均消費",
        storeCredit: "商店信用",
        lastVisit: "最近訪問",
        averageVisit: "平均訪問",
        totalSpent: "總共消費",
        customerHighLights: "客戶亮點",
        availablePoints: "可用積分",
        lifetimePoints: "全部積分",
        redeemedPoints: "已兌換積分",
        redemptions: "兌換次數",
        lastRedemption: "最近兌換",
        qualifiedRewards: "獎勵次數",
        rewardStatus: "獎勵狀況"
      }
    },
    newCustomer: {
      title: "新增客戶",
      genderPickerDialog: {
        title: "性別",
        itemMale: "男",
        itemFemale: "女",
        itemNone: "無"
      },
      fullNameHint: "全名",
      dateOfBirthHint: "生日",
      genderHint: "性別",
      emailHint: "郵箱",
      mobileHint: "手機",
      phoneHint: "電話",
      noteHint: "備註",
      buttonSaveAndSelect: "保存並選擇"
    },
    newSale: {
      title: "新訂單",
      buttonSend: "發送",
      buttonHold: "保存",
      buttonCharge: "結賬",
      buttonClearTable: "清桌",
      messageProductNotFound: "無此商品",
      table: "枱號",
      people: "人",
      showBill: "顯示帳單",
      order: "點餐",
      moreActionsDialog: {
        buttonChooseCustomer: "選擇客戶",
        buttonAddCharge: "增加費用",
        buttonAddPercentDiscount: "增加 % 折扣",
        buttonAddAmountDiscount: "增加 $ 折扣",
        buttonAddAdvanceDiscount: "增加高級折扣",
        buttonSellStoreCredit: "銷售商店代幣",
        buttonSellGiftCard: "銷售禮品卡",
        buttonPrintCheck: "打印"
      },
      discardDialog: {
        title: "訂單未保存",
        message: "保存當前已更改的訂單？",
        buttonCancel: "取消",
        buttonDiscard: "放棄",
        buttonSave: "保存"
      },
      shoppingCarPopup: {
        labelTable: "台號",
        labelTurnTimeHour: "小時",
        labelTurnTimeMinute: "分",
        labelCashier: "出納員：",
        labelPartyOf: "人數：",
        labelTurnTimeLeft: "左右",
        labelServer: "服務員：",
        labelCourier: "配送員：",
        labelDeliverTo: "配送至：",
        deleteWarn: "該菜品已發送，是否要撤銷？",
        sent: "已發送"
      },
      setPartyNumberOfPeopleDialog: {
        title: "設置就餐人數"
      }
    },
    newSaleAddCharge: {
      title: "增加費用",
      amountHint: "金額",
      noteHint: "備註",
      buttonAddCharge: "增加費用"
    },
    newSaleAddAmountDiscount: {
      title: "添加 $ 折扣",
      labelSectionRegular: "定期折扣",
      labelSectionMixAndMatch: "混合折扣",
      labelVariable: "可變的"
    },
    NewSaleAddRegularDiscountsSetVariable: {
      title: "$ 折扣",
      labelDiscountTilte: "折扣標題",
      labelAmount: "金額",
      buttonDone: "完成"
    },
    newSaleAddPercentDiscount: {
      title: "添加 % 折扣",
      labelSectionRegular: "定期折扣",
      labelSectionMixAndMatch: "混合折扣",
      labelVariable: "可變的"
    },
    newSaleAddPercentDiscountSetVariable: {
      title: "% 折扣",
      labelDiscountTilte: "折扣標題",
      labelAmount: "折扣值",
      buttonDone: "完成"
    },
    newSaleAddRegularDiscount: {
      title: "Regular Discount"
    },
    newSaleAddAdvanceDiscount: {
      title: "Advanced Discounts"
    },
    newSaleSellStoreCredit: {
      title: "銷售商店代幣",
      amountHint: "Amount",
      noteHint: "Note",
      buttonSellStoreCredit: "銷售商店代幣"
    },
    newSaleSellGiftCard: {
      title: "銷售禮品卡",
      swipeHint: "刷一張全新的禮品卡開始體驗",
      buttonRetry: "重試",
      buttonNext: "下一步",
      messageOfRecogizeFail: "識別失敗",
      messageOfRecogizeSuccess: "已識別"
    },
    newSaleSellGiftCardAddAmount: {
      title: "添加金額",
      labelAmount: "金額",
      buttonAddAmount: "增加金額"
    },
    newSaleEditShippingMethod: {
      title: "修改配送方式",
      displayDineIn: {
        setTurnTimeDialog: {
          title: "設定限時"
        },
        labelTable: "台號",
        labelPartySize: "人數",
        labelServer: "服務員",
        labelTurnTime: "限時",
        labelTurnTimeHour: "小時",
        labelTurnTimeMinute: "分",
        buttonDone: "完成"
      },
      displayPickup: {
        labelCashier: "出納員",
        buttonDone: "完成"
      },
      displayDelivery: {
        labelDeliveryInfo: "配送信息",
        labelCourier: "配送員",
        labelCashier: "出納員",
        buttonDone: "完成"
      },
      menuButtonVoidOrder: "取消訂單",
      voidOrderDialog: {
        title: "取消訂單",
        message: "你確定要取消這個訂單（不可逆轉）嗎？"
      }
    },
    newSaleEditDeliveryInfo: {
      title: "編輯配送信息",
      fullNameHint: "全名",
      mobileHint: "手機",
      shippingAddressHint: "配送地址",
      noteHint: "備註",
      buttonDone: "完成"
    },
    newSaleEditLineItem: {
      title: "編輯項目",
      labelQuantity: "數量",
      labelDiscounts: "折扣",
      labelAdvancedDiscounts: "高級折扣",
      labelTaxOptions: "稅率",
      labelOverwriteName: "覆蓋商品名",
      labelOverwritePrice: "覆蓋價格",
      labelNote: "備註",
      placeholderDiscountsNone: "無",
      placeholderDiscountsMultiple: "多種",
      placeholderTaxOptionsNone: "無",
      placeholderTaxOptionsMultiple: "多種",
      buttonDone: "完成"
    },
    newSaleEditLineItemOverwritePrice: {
      title: "覆蓋價格",
      amountHint: "金額",
      noteHint: "備註",
      buttonDone: "完成"
    },
    newSaleEditLineItemWeight: {
      title: "設置重量",
      amountHint: "重量",
      noteHint: "備註",
      buttonDone: "完成"
    },
    newSaleEditLineItemModifier: {
      title: "附加選項",
      labelChoose: "已選",
      labelItemOptions: "選項",
      messageYouMustChooseAtLeastOptions:
        '您必須至少為附加選項 "___title___" 選擇 ___chooseAtLeast___ 個選項。',
      modifierPrefix: {
        add: "加",
        less: "少",
        more: "多",
        change: "轉",
        with: "跟",
        no: "免",
        side: "放邊"
      },
      buttonCancel: "取消",
      buttonConfirm: "確認",
      buttonReset: "重置",
      LeastChoice: "最少選擇",
      MostChoice: "最多選擇"
    },
    newSaleEditLineItemModifierOverwritePrice: {
      title: "覆蓋價格",
      amountHint: "金額",
      noteHint: "備註",
      buttonDone: "完成"
    },
    newSaleEditLineItemDiscounts: {
      title: "折扣"
    },
    newSaleEditLineItemTaxOptions: {
      title: "稅率"
    },
    newSaleCheckout: {
      title: "結賬",
      labelTable: "台號",
      labelTurnTimeHour: "小時",
      labelTurnTimeMinute: "分",
      labelCashier: "配送員：",
      labelPartyOf: "人數",
      labelTurnTimeLeft: "左右",
      labelServer: "服務員：",
      labelDeliverTo: "配送至：",
      labelTotalItems: "總件數",
      labelSubTotal: "小計",
      labelDiscounts: "折扣",
      labelTax: "稅額",
      labelServiceFee: "服務費",
      labelTaxIncludedInPrice: "已包含稅",
      buttonCharge: "結賬"
    },
    searchFavorite: {
      title: "搜索產品",
      keywordHint: "輸入關鍵詞"
    },
    searchMaster: {
      title: "搜索主終端",
      messageSearching: "正在搜索主終端...",
      messageSuccess: "成功",
      messageFailed: "失敗",
      buttonOk: "確定",
      buttonCancel: "取消",
      buttonRetry: "重試"
    },
    chooseTable: {
      title: "選擇桌子",
      filterDialog: {
        title: "按狀態過濾"
      },
      sectionAvailable: "可使用",
      sectionOccupied: "使用中",
      labelTable: "台號",
      labelAvailableSeats: "個可用座位"
    },
    chooseTableParty: {
      title: "選擇桌子（Party）",
      sectionCurrentParties: "現時客人",
      sectionUpcoming: "即將到來客人",
      labelTable: "台號",
      labelPartyOf: "人數："
    },
    themeSelect: {
      title: "主題"
    },
    devTools: {
      title: "開發者工具"
    },
    addTips: {
      adjusting: "調整中...",
      adjustingFailed: "小費調整失敗",
      availablePercent: "超过最大比例{percent}%",
      [HTK_THEME]: {
        tip: "小費"
      }
    },
    payFailed: {
      title: "交易失敗",
      back: "返回",
      failedTitle: "交易失敗"
    }
  }
};
