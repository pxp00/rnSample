import images from "../images";
import{HTK_THEME} from "../../utilities/Constants";

export default {
  alert: "Alert",
  appName: "Bindo Payment",
  globals: {
    messageExitAppConfirm: "Press Again To Exit App",
    messageNetworkRequestFailed:
      "Network Connection Is Overtime, Please Check Your Network Configuration",
    messageCanNotConnectToMaster:
      "Unable To Connect To Host Terminal. Please Check Your Network.",
    messageCallPayCheck: "False Data Requesting Format",
    pendingActivationDialog: {
      title: "Pending Activation",
      message: "Please Contact Customer Support"
    },
    paymentMethod: {
      all: "All",
      cash: "Cash",
      creditCard: "Credit Card",
      creditCardEMI: "Credit Card (Installment)",
      creditCardManual: "Credit Card (Manual)",
      wechatPay: "WeChat Pay",
      alipay: "Alipay",
      octopus: "Octopus",
      giftCard: "Gift Card",
      check: "Cheque",
      other: "Other",
      qrCode: "QRCode",
      unionPayQR: "UnionPay QR",
      tapGo: "Tap&Go",
      unionCloudPay: "UnionPay QR",
      unionPay: "UnionPay",
      unionPayScan: "UnionPay QR",
      oePay: "Octopus Wallet",
      fps: "FPS"
    },
    paymentType: {
      sale: "Sale",
      preauth: "Pre-Auth",
      preauth_complete: "Pre-Auth Completed",
      void: "Void",
      refund: "Refund",
      tips: "Tips",
      preauth_void: "Pre-Auth Voided",
      preauth_complete_void: "Pre-Auth Complete Voided",
      void_sale: "Sale Voided"
    },
    shippingMethod: {
      dineIn: "Dine-In",
      pickup: "Pickup",
      delivery: "Delivery"
    },
    orderInventoryState: {
      unknown: "Unknown",
      in_transit: "Transmitting",
      unfulfilled: "Unfulfilled",
      fulfilled: "Fulfilled"
    },
    orderQuoteInvoiceState: {
      unknown: "Unknown",
      partial_paid: "Partial Paid",
      paid: "Paid",
      unpaid: "Unpaid",
      quoted: "Quoted"
    },
    orderState: {
      unknown: "Unknown",
      pending_confirmation: "Pending Confirmation",
      pending_pick_up: "Pending Pick Up",
      pending_delivery: "Pending Delivery",
      completed: "Completed",
      voided: "Voided",
      cancelled: "Cancelled",
      invoiced: "Invoiced"
    },
    partyStatus: {
      default: "DEFAULT",
      seated: "SEATED",
      ordered: "ORDERED",
      checkDropped: "CHECK DROPPED",
      paid: "PAID",
      multiple: "MULTIPLE",
      reserved: "RESERVED",
      booked: "BOOKED",
      available: "AVAILABLE",
      cleared: "CLEARED"
    }
  },
  components: {
    dialog: {
      ok: "OK",
      cancel: "Cancel",
      yes: "Yes",
      no: "No",
      CANCEL: "CANCEL",
      CONFIRM: "CONFIRM"
    },
    passwordInputDialog: {
      cancel: "Cancel",
      confirm: "Confirm",
      inputpw: "Input Password"
    },
    loader: {
      messageLoading: "Loading...",
      messageLoadingConfiguration: "Loading Configuration...",
      messageProcessing: "Processing...",
      messageReversal: "Request Failed，Processing Reversal...",
      messagePrinting: "Printing..."
    },
    calendarPicker: {
      buttonPrev: "Previous",
      buttonNext: "Next",
      weekdays: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      months: {
        january: "January",
        february: "February",
        march: "March",
        april: "April",
        may: "May",
        june: "June",
        july: "July",
        august: "August",
        september: "September",
        october: "October",
        november: "November",
        december: "December"
      }
    },
    list: {
      messageNoMoreData: "No More Requested Data"
    },
    listEmptyIndicator: {
      messageLoading: "Loading...",
      messageDataNotFound: "Data Was Not Found"
    },
    noActivityTimeoutModal: {
      message:
        "No Operation During The Specified Time. Operation Will Be Returned After __countdown__ Seconds.",
      buttonKeep: "Continue"
    }
  },
  screens: {
    initialize: {
      messageUpdatingConfiguration: "Updating Configuration..."
    },
    login: {
      title: "Login",
      usernameHint: "Bindo ID / Email",
      passwordHint: "Password",
      buttonLogin: "Login In",
      HKTbuttonLogin: "SIGN IN",
      buttonForgotPassword: "Forgot Password?",
      buttonSettingProxyServer: "Proxy Server Setting",
      messageCannotVerifyYourCredentials: "Cannot Verify Your Credentials"
    },
    forgotPassword: {
      title: "Forgot Password",
      warnMessage:
        "Please Enter Your Bindo ID or Email. \nWe Will Send You An Email With Instructions To Recover Your Password.",
      usernameHint: "Bindo ID / Email",
      buttonSend: "Send"
    },
    switchStore: {
      title: "Switch Store",
      labelStoreModule: "Store Settings",
      labelStorePermissions: "Store Permissions",
      labelAssociates: "Store Clerk",
      labelOtherPaymentInstruments: "Payment Instruments",
      labelRooms: "Rooms",
      labelTables: "Tables",
      labelFavoriteTabs: "Menu (FT)",
      labelFavoriteSections: "Menu (FS)",
      labelFavorites: "Menu (F)",
      labelModifierSets: "Modifier Sets",
      labelDiscounts: "Discounts",
      labelTaxOption: "Tax Options",
      labelListings: "Listings",
      labelEmailTemplates: "Email Templates",
      labelDepartment: "Departments",
      labelMerchantId: "Merchant ID",
      labelSignIn: "Sign In",
      labelPaymentConfigs: "Payment Configurations"
    },
    switchUser: {
      title: "Switch User",
      sectionRecentlyActiveUsers: "Recently Active Users",
      sectionAllOtherUsers: "All Other Users"
    },
    lockScreen: {
      title: "Lock Screen",
      buttonLogout: "SIGN OUT",
      messageSingOut: "Sign out..."
    },
    unlockScreen: {
      title: "Unlock Screen",
      pinHint: "Enter PIN",
      passwordHint: "Enter Password",
      buttonUnlock: "UNLOCK",
      buttonChangeToPIN: "PIN",
      buttonChangeToPassword: "Password",
      buttonForgotPassword: "Forgot?",
      messagePinIncorrect: "PIN Is Incorrect.",
      messagePasswordIncorrect: "Password Is Incorrect.",
      messageCannotVerifyYourCredentials: "Cannot Verify Your Credentials"
    },
    home: {
      drawerMenuRowItemQuickPayment: "Quick Payment Mode",
      drawerMenuRowItemTraditionalMode: "Traditional Mode",
      drawerMenuRowItemRetail: "Retail / QSR Mode",
      drawerMenuRowItemRestaurant: "Restaurant Mode",
      drawerMenuRowItemCustomer: "Customer Mode",
      drawerMenuRowItemSettings: "Settings",
      drawerMenuRowItemSync: "Sync",
      drawerMenuRowItemExitApp: "Exit App",
      messageTrainingMode: "Training Mode Is On"
    },
    homeQuickPayment: {
      title: "Quick Payment",
      buttonCharge: "CHARGE",
      sale: "Pay",
      preAuthorization: "Pre-Auth",
      paymentHistory: "Payment History",
      settlement: "Settlement",
      [HTK_THEME]: {
        title: "Enter Amount",
        buttonConfirm: "ENTER"
      }
    },
    homeRetailMode: {
      title: "Retail / QSR Mode",
      buttonNewSale: "NEW SALE",
      buttonNewSaleViaPickup: "Pickup",
      buttonNewSaleViaDelivery: "Delivery",
      rowItemQuickPayment: "Quick Payment",
      rowItemUnpaidSales: "Unpaid Sales",
      rowItemPaymentHistory: "Payment History",
      rowItemSalesHistory: "Sales History"
    },
    homeRestaurantMode: {
      title: "Restaurant Mode",
      buttonSearchMaster: "Search Master",
      buttonNewSale: "NEW SALE",
      buttonNewSaleViaDineIn: "Dine-In",
      buttonNewSaleViaPickup: "Pickup",
      buttonNewSaleViaDelivery: "Delivery",
      rowItemQuickPayment: "Quick Payment",
      rowItemUnpaidSales: "Unpaid Sales",
      rowItemPaymentHistory: "Payment History",
      rowItemSalesHistory: "Sales History"
    },
    homeTraditionalMode: {
      choosePaymentTraditional: {
        creditCard: "Credit Card",
        sale: "New Transaction",
        preAuth: "Pre-Auth",
        installment: "Installment",
        unSupportWarning: "Do Not Support",
        preAuthComplete: "Pre-Auth Complete",
        batchHistory: "Batch History",
        settlement: "Settlement",
        autoSettlementAlert: "Auto Settlement Enabled",
        queryBalance: "Query Balance",
        queryBalanceing: "Quering",
        [HTK_THEME]: {
          sale: "New Transaction",
          batchHistory: "Transaction History"
        }
      },
      transactionListTraditional: {
        title: "Batch History",
        sale: "Sale",
        refund: "Refund",
        unpaidSales: "Unpaid Sales",
        today: "Today",
        noRecord: "No Record",
        pleaseTryAgain: "Please Try Again"
      },
      transactionSearch: {
        cancel: "Cancel",
        searchOrderNumber: "Search Order Number"
      }
    },
    homeCustomerMode: {
      title: "Input The Device PIN To Complete The Authorization Process",
      pairSuccess: "The Device Is Successfully Connected",
      paymentDeviceModeTitle: "We Accept"
    },
    homeSettings: {
      title: "Settings",
      rowItemEnableTrainingMode: "Enable Training Mode",
      rowItemEnablePhysicalKey: "Enable Physical Key",
      rowItemPaymentMethodSettings: "Payment Method Settings",
      rowItemPOSSettings: "POS Settings",
      rowItemReceiptPrinter: "Receipt Printer",
      rowItemVersion: "Version",
      rowItemTheme: "Theme",
      rowItemDevTools: "Developer Tools",
      printerBuiltIn: "Device Built-In Printer",
      printerNotConfigPrinter: "Not Config Printer",
      buttonQuitApp: "Quit App",
      ePayAuthFail: "No ePay Detected"
    },
    preAuthHome: {
      preAuth: "Pre-Auth",
      preAuthInc: "Pre-Auth Inc",
      preAuthVoid: "Pre-Auth Voided",
      preAuthComplete: "Pre-Auth Completed",
      preAuthCompleteVoid: "Pre-Auth Complete Voided"
    },
    preAuthComplete: {
      amount: "Amount",
      transactionId: "BRN",
      orderNumber: "Order Number",
      preAuthCompleteFailed: "Authorization Failed，\nPre-Auth Amount Cannot Be Greater Than Order Value"
    },
    posSettings: {
      title: "POS Settings",
      rowItemDccDownloadLocalBINs: "Download Local BINs",
      rowItemSettingProxyServer: "Proxy Server Setting",
      rowItemEnableAutoPrint: "Enable Auto Print",
      rowItemEnableAlwaysUseSwipe: "Enable Always Use Swipe",
      rowItemEnableManual: "Enable Manual Card Number Entry",
      rowItemEnablePasswordAuthentication: "Enable Password Authentication",
      rowItemEnablePinPad: "Enable PINPad",
      rowItemEnableForceOnline: "Enable Force Online",
      rowItemEnableDynamicCurrencyConversion: "Enable DCC",
      rowItemEnableAppAutoStart: "Enable Self-Starting When System Boot",
      rowItemEnablePreauth: "Enable PreAuth",
      rowItemEnableRefund: "Enable Refund",
      rowItemEnableRefundHomeMenu: "Enable Home Refund Menu",
      rowItemPasswordForRefundVoid: "Enable Password For Refund/Void",
      rowItemEnableTipsAdj: "Enable Tips Adjustment",
      rowItemEnableCreditCardPreTips: "Enable Pre-Sales Tips",
      rowItemEnableAutoSettlement: "Enable Auto Settlement",
      rowItemEnableInstallment6Months: "Installment-6 months",
      rowItemEnableInstallment12Months: "Installment-12 months",
      rowItemEnableInstallment18Months: "Installment-18 months",
      rowItemEnableInstallment24Months: "Installment-24 months",
      rowItemEnableInstallment36Months: "Installment-36 months",
      rowItemEnableInstallment48Months: "Installment-48 months",
      rowItemTerminalFloorLimit: "Lowest Limit",
      rowItemTerminalContactlessNeedSignLimit: "Contactless Signature Allowance",
      rowItemTerminalOtherPaymentNeedSignLimit: "Other Payment Signature Allowance",
      rowItemTerminalContactlessFloorLimit: "Contactless Cap",
      rowItemTerminalContactlessCardholderVerificationLimit:
        "Contactless Cardholder Verification Cap",
      rowItemTerminalContactlessTransactionLimit:
        "Contactless Transaction Cap",
      rowItemTerminalTipsPercentLimit: "Tips Percent Limit",
      tipsPercentLimitAlert: "Tips Percent Must Be 20 ~ 100"
    },
    aboutDevice: {
      title: "About Device",
      rowItemModel: "Model",
      rowItemSerialNo: "Serial #",
      rowItemSystem: "System",
      rowItemDeviceLocale: "Device Locale",
      rowItemTimezone: "Timezone"
    },
    MerchantID: {
      title: "Merchant ID"
    },
    chooseReceiptPrinter: {
      title: "Receipt Printer",
      printerNotSupport: "Not Support",
      labelLocalReceiptPrinter: "Local Receipt Printer",
      labelDeviceBuilt: "Device Built-In Printer",
      labelNetworkReceiptPrinter: "Local Area Network Receipt Printer"
    },
    choosePaymentMethod: {
      title: "Choose Payment Method",
      messageTransactionAmountRestriction:
        "To Use Octopus,Transaction Amount Cannot Be Less Than 0.1",
      amount: "Amount",
      notSupportMsg: "The Payment Is Not Supported",
      paymentFPS: images.ic_payment_method_fps_en,
      qrCode: "QR Code"
    },
    payByCash: {
      title: "Cash",
      labelCash: "Cash",
      labelChange: "Change",
      buttonTender: "TENDER"
    },
    payByCreditCard: {
      title: "Credit Card",
      messagePresentCard: "Cannot Read Card Properly, Please Try Again",
      messagePleaseSwipeCard: "Please Swipe Card",
      messagePleaseInsertCard: "Please Insert Card",
      messageCardIsDetected: "Card Is Detected",
      messageCardIsDetectedConactless:
        "Card Reading Successfully, Please Remove The Card",
      messagePleaseConfirmApplication: "Please Confirm The Application",
      messagePleaseEntryPin: "Please Input PIN",
      messageRateLookup: "Execute Enquiring Online Exchange Rate...",
      messageSeePhoneForInstructions: "Check Instructions From Mobile Phone",
      messageTryAnotherInterface: "Insert/Swipe Card",
      messageChipCannotBeRead: "Chip Cannot Be Read",
      messagePleaseRetryInsertCard: "Please Retry To Insert The Card",
      messagePerformOnlineAuthenticationProcessing:
        "Online Authentication Processing ...",
      messagePerformOnlineReversalProcessing:
        "Online Reversal Processing ...",
      messageApproved: "Approved",
      messageDeclined: "Declined",
      messageReversing: "Reversing...",
      messageReversalPerformed: "Reversal Successfully",
      messageErrorCardDetectTimeout: "Card Detect Timeout",
      messageErrorCardDetectMultipleCards: "Please Present One Card Only",
      messageErrorCardIsBlocked: "Card Is Blocked",
      messageErrorCannotBeRecognized: "This Card Cannot Be Recognized.",
      messageErrorDeviceNotSupported: "This Device May Not Be Supported.",
      messageErrorCardNotSupport: "This Card Is Not Supported",
      messageErrorUnknown: "Unknown Error.",
      messageReversalCountWarning:
        "Exceeding Maximum Failure (3). Reversal Deleted.",
      buttonAccept: "Accept",
      buttonReject: "Reject",
      buttonRetry: "Retry",
      buttonConfirm: "Confirm",
      buttonCancel: "Back",
      buttonReUpload: "Re-Upload",
      buttonManualKeyIn: "Manual Input",
      creditCardAnimation: images.creditcard_wait_animation,
      warningDialog: {
        message: "Please Wait For Processing."
      },
      securityKeyboard: {
        amount: "AMOUNT",
        message: "Input PIN For This Card",
        title: "Input PIN"
      }
    },
    payByCreditCardManual: {
      title: "Manual Input",
      labelCardNumber: "Card Number",
      labelCardExpiryDate: "Expiry Date (MM/YY)",
      labelCardCVV: "CVV",
      buttonDone: "DONE"
    },
    payPerSignature: {
      title: "Signature",
      tipsTitle: "Tips Adjustment",
      "tips&Signature": "Tips & Signature",
      labelSubtotal: "BASE",
      labelTip: "TIPS",
      labelTotal: "Total",
      messageNoSignatureRequired: "No Signature Required",
      needSignature: "Please Sign",
      messageReminders:
        "I agree to pay the above amount according to my card issuer agreement.",
      buttonSignAndTipOnReceipt: "Sign & Tip on \nReceipt",
      buttonTipOnReceipt: "Tip on Receipt",
      buttonClearSignature: "Clear Signature",
      buttonDone: "Done",
      quit: "Quit",
      reset: "Reset",
      confirm: "Confirm",
      [HTK_THEME]: {
        clear: "Clear"
      }
    },
    tipsCustomAmount: {
      title: "Custom Tip Amount",
      labelSubTotal: "Subtotal",
      labelTip: "Tip",
      labelTotal: "Total",
      buttonDone: "DONE",
      tipsLimitAlert: "Tips Amount Is Over Than The Maximum Limitation, Please Re-Enter"
    },
    payByQRCode: {
      wechatpayTitle: "WeChat Pay",
      alipayTitle: "Alipay",
      unionCloudTitle: "UnionPay QR",
      aliWechatPayTitle: "Alipay/WeChat Pay",
      tapGo: "Tap&Go",
      labelAmount: "AMOUNT",
      buttonSwitchToQRCode: "Switch to QR Code",
      buttonSwitchToScanner: "Switch to QR Code Scanner"
    },
    payByBarCodeScan: {
      wechatpayTitle: "WeChat Pay",
      alipayTitle: "Alipay",
      labelAmount: "AMOUNT",
      tips: "Please Approach The Bar Code To The Scanner"
    },
    payByOctopus: {
      title: "Octopus",
      tips: "Please Tap Your Octopus Card On The Card Reader",
      messageErrorOctopusFrameworkNotFound:
        "Octopus Framework Cannot Be Found, Octopus Payments Will Not Be Available",
      messageErrorDeviceNotSupported: "iOS Device Not Supported Temporarily",
      offlineOrderlimit:
        "Octopus Payments Is Not Available, Please Contact The Customer Service"
    },
    payByGiftCard: {
      title: "Gift Card",
      messagePleaseSwipeCard: "Please Swipe Card",
      messageCardIsDetected: "The Card Is Detected",
      messagePerformOnlineProcessing: "Execute Online Processing...",
      messageErrorCannotBeRecognized: "This Card Cannot Be Recognized.",
      messageErrorDeviceNotSupported: "This Device May Not Be Supported.",
      buttonRetry: "Retry"
    },
    performPaymentProcessing: {
      messageProcessingPayment: "Payment Processing...",
      warningDialog: {
        message: "Please Wait For Processing."
      }
    },
    performReturnsProcessing: {
      messageProcessingReturns: "Reversal Processing...",
      warningDialog: {
        message: "Please Wait For Processing."
      }
    },
    payForSuccess: {
      title: "Transaction Succeed",
      messageSuccessBegin: "Transaction Of ",
      messageSuccessEnd: " Is Completed.",
      labelChange: "Change: ",
      emailForReceiptHint: "Input Email For Receipt",
      buttonSend: "SEND",
      buttonPrintReceipt: "Print Receipt",
      buttonPrintGiftReceipt: "Print Gift Receipt",
      buttonNoReceipt: "Done",
      sendEmailReceiptSuccess: "Sent Successfully!",
      transactionComplete: "Transaction Completed",
      authorizationComplete: "Authorization Completed",
      refundComplete: "Refund Completed",
      amountDeducted: "Amount Deducted",
      remainingValue: "Remaining Value",
      transactionAmount: "Amount",
      dccAmount: "DCC Amount",
      paymentSuccess: "Payment Succeed",
      voidSuccess: "Void Succeed",
      refundSuccess: "Refund Succeed",
      tipsSuccess: "Adjust Tips Succeed",
      preauthSuccess: "Pre-Auth Succeed",
      preauthIncSuccess: "Preauth Increment Succeed",
      preauthCompleteSuccess: "Preauth Complete Succeed",
      preauthCompleteVoidSuccess: "Preauth Complete Void Succeed",
      email: "Email",
      needReceipt: "Need Receipt?",
      [HTK_THEME]: {
        Payment: {
          title: "Payment",
          successful: "Successful"
        },
        buttonNoReceipt: "No Receipt"
      }
    },
    paymentMethodSettings: {
      title: "Payment Method Settings",
      rowItemEnableCash: "Enable Cash",
      rowItemEnableCheck: "Enable Cheque",
      rowItemEnableCreditCard: "Enable Credit Card",
      rowItemEnableCreditCardEMI: "Enable Credit Card (Installment)",
      rowItemEnableCreditCardManual: "Enable Credit Card (Manual)",
      rowItemEnableWeChatPay: "Enable WeChat Pay",
      rowItemEnableAlipay: "Enable Alipay",
      rowItemEnableOctopus: "Enable Octopus",
      rowItemEnableGiftCard: "Enable Gift Card"
    },
    transactionList: {
      title: "Payment History",
      labelToday: "Today",
      labelIncome: "INCOME"
    },
    transactionDetail: {
      title: "Payment Detail",
      menuButtonPrint: "Print",
      menuButtonReprint: "Reprint Receipt",
      labelAmount: "Amount",
      labelTotalAmount:"Total Amount",
      labelOrderNo: "Order #",
      labelTraceNo: "Trace #",
      labelCardNo: "Card #",
      labelOrderPayment: "Payment",
      labelOrderTime: "Time",
      labelOrderStatus: "Status",
      labelOrderTips: "Tips",
      labelBRN: "BRN",
      labelOriginBRN: "Origin BRN",
      labelDccAmount: "Dcc Amount",
      labelDccCurrency: "Dcc Currency",
      cardNumber: "Card Number",
      labelPaymentType: "Payment Type",
      labelOrderRefund: "Refund Amount",
      labelOrderVoid: "Void Time",
      capturedTime: "Authorized time",
      menuButtonVoidPayment: "Void Payment",
      menuButtonRefund: "Refund",
      menuButtonRefundViaCardNotPresent: "Refund",
      menuButtonRefundOrPartialRefund: "Refund or Partial Refund",
      menuButtonTipAdjustment: "Adjust Tips",
      alertDialog: {
        voidTitle: "Void Payment",
        voidMessage: "Confirm To Void Payment?",
        preAuthCompleteTitle: "Pre-Auth Complete",
        preAuthCompleteMessage: "Confirm to Pre-Auth Complete?",
        preAuthIncTitle: "Pre-Auth Inc",
        preAuthIncMessage: "Confirm to Pre-Auth Inc?",
        preauthVoidTitle: "Pre Authorization Void",
        preauthVoidMessage: "Confirm to Pre Authorization Void?",
        preauthCompleteVoidTitle: "Pre-Auth Complete Void",
        preauthCompleteVoidMessage: "Confirm to Pre-Auth Complete Void?",
        refundTitle: "Refund Payment",
        refundMessage: "Confirm to Refund payment?",
        tipsTitle: "Tip",
        tipsMessage: "Confirm Tips?",
        customerDisplayTitle: "Exit Customer Mode",
        customerDisplayMessage: "Confirm to Exit Customer Mode?",
        buttonCancel: "Cancel",
        buttonConfirm: "Confirm"
      },
      labelStatusSuccess: "Success",
      labelStatusFailed: "Fail",
      labelStatusUnknown: "Unknown",
      pinError: "PIN Error，Please Check",
      pinNoPermission: "PIN Has No Permission",
      voiding: "Voiding...",
      processing: "processing...",
    },
    refund: {
      amount: "Amount",
      date: "Date",
      chooseDate: "Choose Date",
      enterRRN: "Enter RRN",
      tip:
        "The Refund Amount Cannot Be Greater Than The Total Amount Of The Order",
      title: "Refund",
      refundFailed: "Refund Failed",
      refundDialog: {
        title: "Refund",
        message: "Confirm To Refund?",
        buttonCancel: "Cancel",
        buttonConfirm: "Confirm"
      },
      refunding: "Refunding"
    },

    settlement: {
      title: "Settlement",
      reprintLastSettlementReport: "Reprint Last Settlement Report",
      doneButton: "Done",
      settlementMessage: "Confirm to Settlement?",
      message: "Settlement Is Completed",
      messageLoading: "Loading...",
      messagePrinting: "Printing...",
      messageReversal: "Request Failed，Process Reversal...",
      transaction: "Transaction",
      count: "Count",
      total: "Total",
      labelType: "TYPE",
      labelCount: "COUNT",
      labelAmount: "AMOUNT",
      confirm: "Confirm",
      histories: "Histories",
      processingSettlement: "Processing Settlement...",
      settlementFailed: "Settlement Failed",
      settlementCompleted: "Settlement Completed",
      printError: "Print Error",
      totalAmount: "TOTAL AMOUNT",
      totalCount: "TOTAL COUNT"
    },
    settlementDetail: {
      orderNo: "Order Number",
      time: "Time"
    },
    orderList: {
      title: "Sales History",
      labelTable: "Table",
      labelListingItems: "Items"
    },
    orderDetail: {
      title: "Order Detail",
      menuButtonPrint: "Print",
      menuButtonReprint: "Reprint",
      labelOrderNo: "Order Number",
      labelOrderPayment: "Payment",
      labelOrderTime: "Time",
      labelOrderStatus: "Status",
      labelOrderTotal: "Total Order",
      labelTables: "Table",
      buttonShowItems: "Show Items",
      buttonHideItems: "Hide Items",
      labelTotalItems: "Total items",
      labelSubTotal: "Sub-total",
      labelDiscounts: "Discounts",
      labelRounding: "Rounding",
      labelTax: "Tax",
      labelServiceFee: "Service Fee",
      labelTaxIncludedInPrice: "Included Tax",
      menuButtonVoidPayment: "Void Payment",
      menuButtonVoidOrder: "Void Order",
      voidPaymentDialog: {
        title: "Void payment",
        message: "Comfirm To Cancel Payment?",
        buttonCancel: "Cancel",
        buttonConfirm: "Confirm"
      },
      voidOrderDialog: {
        title: "Void Order",
        message: "Are you sure you want to cancel this order (irreversible)?"
      }
    },
    unpaidSales: {
      title: "Unpaid Sales",
      labelTable: "Table",
      labelListingItems: "Items"
    },
    chooseAssociate: {
      title: "Choose Clerk"
    },
    chooseCustomer: {
      title: "Choose Customer",
      customerInfoDialog: {
        selectBtn: "Select",
        firstLabelText: "Overview",
        secondLabelText: "Info",
        thirdLabelText: "Note",
        sales: "Visiting times",
        averageAmount: "Average Amount",
        storeCredit: "Store Credit",
        lastVisit: "Last Visit",
        averageVisit: "Average Visit",
        totalSpent: "Total Spent",
        customerHighLights: "CUSTOMER HIGHLIGHTS",
        availablePoints: "Available Points",
        lifetimePoints: "Total Points",
        redeemedPoints: "Redeemed Points",
        redemptions: "Redemptions",
        lastRedemption: "Last Redemption",
        qualifiedRewards: "Qualified Rewards",
        rewardStatus: "REWARD STATUS"
      }
    },
    newCustomer: {
      title: "New Customer",
      genderPickerDialog: {
        title: "Gender",
        itemMale: "Male",
        itemFemale: "Female",
        itemNone: "None"
      },
      fullNameHint: "Full Name",
      dateOfBirthHint: "Date Of Birth",
      genderHint: "Gender",
      emailHint: "Email",
      mobileHint: "Mobile",
      phoneHint: "Phone",
      noteHint: "Note",
      buttonSaveAndSelect: "Save & Select"
    },
    newSale: {
      title: "New Sale",
      buttonSend: "Send",
      buttonHold: "Hold",
      buttonCharge: "Charge",
      buttonClearTable: "Clear Table",
      messageProductNotFound: "No Such Goods",
      table: "Table",
      people: "People",
      showBill: "Show Bill",
      order: "Order",
      moreActionsDialog: {
        buttonChooseCustomer: "Choose Customer",
        buttonAddCharge: "Add Charge",
        buttonAddPercentDiscount: "Add %Discount",
        buttonAddAmountDiscount: "Add $Discount",
        buttonAddAdvanceDiscount: "Add Advanced Discounts",
        buttonSellStoreCredit: "Sell Store Credit",
        buttonSellGiftCard: "Sell Gift Card",
        buttonPrintCheck: "Print Check"
      },
      variablePriceModal: {
        title: "Enter Price",
        productName: "Product Name",
        productAmount: "Amount"
      },
      discardDialog: {
        title: "Unsaved Changes",
        message: "Would you like to save the changes to current sales?",
        buttonCancel: "Cancel",
        buttonDiscard: "Discard",
        buttonSave: "Save"
      },
      shoppingCarPopup: {
        labelTable: "Table",
        labelTurnTimeHour: "h",
        labelTurnTimeMinute: "m",
        labelCashier: "Cashier:",
        labelPartyOf: "Party of",
        labelTurnTimeLeft: "Left",
        labelServer: "Server:",
        labelCourier: "Courier:",
        labelDeliverTo: "Deliver to:",
        deleteWarn: "The item is dispatched. Are you sure you want to cancel?",
        sent: "sent"
      },
      setPartyNumberOfPeopleDialog: {
        title: "Number Of People"
      }
    },
    newSaleAddCharge: {
      title: "Add Charge",
      amountHint: "Amount",
      noteHint: "Note",
      buttonAddCharge: "ADD CHARGE"
    },
    newSaleAddAmountDiscount: {
      title: "Add $ Discount",
      labelSectionRegular: "REGULAR DISCOUNT",
      labelSectionMixAndMatch: "MIX & MATCH DISCOUNT",
      labelVariable: "Variable"
    },
    NewSaleAddRegularDiscountsSetVariable: {
      title: "$ Discount",
      labelDiscountTilte: "Discount Tilte",
      labelAmount: "Amount",
      buttonDone: "DONE"
    },
    newSaleAddPercentDiscount: {
      title: "Add % Discount",
      labelSectionRegular: "REGULAR DISCOUNT",
      labelSectionMixAndMatch: "MIX & MATCH DISCOUNT",
      labelVariable: "Variable"
    },
    newSaleAddPercentDiscountSetVariable: {
      title: "% Percentage",
      labelDiscountTilte: "Discount Tilte",
      labelAmount: "Discount amount",
      buttonDone: "Done"
    },
    newSaleAddRegularDiscount: {
      title: "Regular Discount"
    },
    newSaleAddAdvanceDiscount: {
      title: "Advanced Discounts"
    },
    newSaleSellStoreCredit: {
      title: "Sell Store Credit",
      amountHint: "Amount",
      noteHint: "Note",
      buttonSellStoreCredit: "SELL STORE CREDIT"
    },
    newSaleSellGiftCard: {
      title: "Sell Gift Card",
      swipeHint: "Swipe A New Gift Card To Begin.",
      buttonRetry: "Retry",
      buttonNext: "NEXT",
      messageOfRecogizeFail: "Recognition Failed",
      messageOfRecogizeSuccess: "Recogized"
    },
    newSaleSellGiftCardAddAmount: {
      title: "Add Amount",
      labelAmount: "Amount",
      buttonAddAmount: "ADD AMOUNT"
    },
    newSaleEditShippingMethod: {
      title: "Edit Shipping Method",
      displayDineIn: {
        setTurnTimeDialog: {
          title: "Set Turn Time"
        },
        labelTable: "Table",
        labelPartySize: "Party Size",
        labelServer: "Server",
        labelTurnTime: "Turn Time",
        labelTurnTimeHour: "h",
        labelTurnTimeMinute: "m",
        buttonDone: "Done"
      },
      displayPickup: {
        labelCashier: "Cashier",
        buttonDone: "Done"
      },
      displayDelivery: {
        labelDeliveryInfo: "Delivery info",
        labelCourier: "Courier",
        labelCashier: "Cashier",
        buttonDone: "Done"
      },
      menuButtonVoidOrder: "Void Order",
      voidOrderDialog: {
        title: "Void Order",
        message: "Are you sure you want to cancel this order (irreversible)?"
      }
    },
    newSaleEditDeliveryInfo: {
      title: "Edit Delivery Info",
      fullNameHint: "Full Name",
      mobileHint: "Mobile",
      shippingAddressHint: "Shipping Address",
      noteHint: "Note",
      buttonDone: "Done"
    },
    newSaleEditLineItem: {
      title: "Edit Line Item",
      labelQuantity: "Quantity",
      labelDiscounts: "Discounts",
      labelAdvancedDiscounts: "Advanced Discounts",
      labelTaxOptions: "Tax Options",
      labelOverwriteName: "Overwrite Name",
      labelOverwritePrice: "Overwrite Price",
      labelNote: "Note",
      placeholderDiscountsNone: "None",
      placeholderDiscountsMultiple: "Multiple",
      placeholderTaxOptionsNone: "None",
      placeholderTaxOptionsMultiple: "Multiple",
      buttonDone: "Done"
    },
    newSaleEditLineItemOverwritePrice: {
      title: "Overwrite Price",
      amountHint: "Amount",
      noteHint: "Note",
      buttonDone: "DONE"
    },
    newSaleEditLineItemWeight: {
      title: "Weight",
      amountHint: "Weight",
      noteHint: "Note",
      buttonDone: "DONE"
    },
    newSaleEditLineItemModifier: {
      title: "Modifier",
      labelChoose: "Choose",
      labelItemOptions: "Options",
      messageYouMustChooseAtLeastOptions:
        'You must choose at least ___chooseAtLeast___ options for the modifier set: "___title___".',
      modifierPrefix: {
        add: "Add",
        less: "Less",
        more: "More",
        change: "Change",
        with: "With",
        no: "No",
        side: "Side"
      },
      buttonCancel: "Cancel",
      buttonConfirm: "Confirm",
      buttonReset: "Reset",
      LeastChoice: "Least Choice",
      MostChoice: "Most Choice"
    },
    newSaleEditLineItemModifierOverwritePrice: {
      title: "Overwrite Price",
      amountHint: "Amount",
      noteHint: "Note",
      buttonDone: "DONE"
    },
    newSaleEditLineItemDiscounts: {
      title: "Discounts"
    },
    newSaleEditLineItemTaxOptions: {
      title: "Tax Rate"
    },
    newSaleCheckout: {
      title: "Charge",
      labelTable: "Table",
      labelTurnTimeHour: "h",
      labelTurnTimeMinute: "m",
      labelCashier: "Cashier:",
      labelPartyOf: "Party Of",
      labelTurnTimeLeft: "Left",
      labelServer: "Server:",
      labelDeliverTo: "Deliver To:",
      labelTotalItems: "Total Items",
      labelSubTotal: "Sub-Total",
      labelDiscounts: "Discounts",
      labelTax: "Tax",
      labelServiceFee: "Service Fee",
      labelTaxIncludedInPrice: "Tax Included In Price",
      buttonCharge: "CHARGE"
    },
    searchFavorite: {
      title: "Search Favorite",
      keywordHint: "Entry Keyword"
    },
    searchMaster: {
      title: "Search Master",
      messageSearching: "Searching Master Terminal...",
      messageSuccess: "Success!",
      messageFailed: "Failed.",
      buttonOk: "OK",
      buttonCancel: "Cancel",
      buttonRetry: "Retry"
    },
    chooseTable: {
      title: "Choose Table",
      filterDialog: {
        title: "Filter by Status"
      },
      sectionAvailable: "AVAILABLE",
      sectionOccupied: "OCCUPIED",
      labelTable: "Table",
      labelAvailableSeats: "Available Seats"
    },
    chooseTableParty: {
      title: "Choose Party",
      sectionCurrentParties: "CURRENT PARTIES",
      sectionUpcoming: "UPCOMING",
      labelTable: "Table",
      labelPartyOf: "Party Of"
    },
    themeSelect: {
      title: "Theme"
    },
    devTools: {
      title: "Developer Tools"
    },
    addTips: {
      adjusting: "Adjusting...",
      adjustingFailed: "Tip Amount Adjustment Failed",
      availablePercent: "Out Of Maximum Available Percent {percent}%",
      [HTK_THEME]: {
        tip: "Tips"
      }
    },
    payFailed: {
      title: "Payment Failed",
      back: "BACK",
      failedTitle: "Transaction Denied"
    }
  }
};
