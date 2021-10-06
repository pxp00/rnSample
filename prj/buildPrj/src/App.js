/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { plus } from 'number-precision';
import OrderBuilder from "bindo-order-builder/src/OrderBuilder";
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Separator } from './components/Separetor';

import {MicroTaskFc, ProtoTypeFc, PromiseFc, VarLetConstFc} from "./Func"

/*
  env:
    brew install node  // include npm, npx already
    brew install watchman
    npm install yarn -g 

  createPrj:
  npx react-native init samplePrj  // create prj
  npx react-native run-android  // yarn android  // compile and install native code, start metro server
  npx react-native start --reset-cache  // clear cache, start metro server

  
  yarn / yarn install  // install dependencies    
  yarn android  // run package.json script "android" // compile and install native code, start metro server
  yarn start   // run package.json script "start" // start metro server
  
  
  npm install
  npm start
  
  files:
    package.json  // dependencies
    App.js  //entry
    app.json // appName 
    index.js // entry
*/


const App = () => {
  const backgroundStyle = {
    flex:1,
    ...borderStyles.blue,
  };
  
  const Item = ({title, onPress}) => {
    return(
      <View>
        <Separator/>
        <Button title = {title} onPress = {onPress}/>
      </View>    
    )
  }

  const store = {
    address1: '123',
    address2: '',
    calling_code: '852',
    chain: false,
    city: 'Hong Kong',
    compact_title: null,
    country_code: 'HK',
    currency: 'USD',
    current_exchange_rates: [],
    deleted: false,
    delivery: true,
    delivery_areas: [],
    delivery_desc: null,
    delivery_fee: '0.0',
    delivery_miles: '0.0',
    delivery_min_amount: '0.0',
    email: 'auwaikong94@gmail.com',
    external_id: null,
    highlight: null,
    homepage: null,
    id: 7273,
    iframe_active: false,
    ipad_screensaver_url: '',
    is_screensaver_on: false,
    logo_url: null,
    master_terminal_ip: null,
    opening_hours: null,
    parent_id: null,
    phone: '66666666',
    pickup_desc: null,
    policy: null,
    pos_active: true,
    reply_to_store: true,
    report_time_zone: null,
    reporting_token: '96b305e78bddaac9',
    slug: 'okq',
    soft_descriptor: null,
    state: '',
    store_credit_enabled: false,
    sync_inventory: false,
    tax_rate: '0.07',
    time_segments: {},
    timezone: 'Asia/Hong_Kong',
    title: 'Order Builder Setting 1',
    zipcode: '',
  };

  const storeModule = {
    ably_message_ack_enabled: false,
    ably_message_enabled: false,
    add_tips_before_credit_card_authorization: false,
    add_tips_before_on_print_check: false,
    allow_associate_view_sales_summary_report: false,
    allow_bill_party_invoice_transfer: false,
    allow_change_meal_period_enabled: false,
    allow_change_procurement_type_after_send_only_enabled: false,
    allow_create_order_without_link_floor_plan_table: false,
    allow_house_account: false,
    allow_server_close_bill_only_enabled: false,
    allow_split_payment_for_an_insufficient_gift_card: true,
    allow_void_after_effective_date: true,
    always_print_receipt_enabled: true,
    audit_report_enabled: false,
    auto_approve_order_amendment_enabled: false,
    auto_clean_line_items_on_qsr_mode_enabled: true,
    auto_group_like_items_enabled: false,
    auto_lock: false,
    auto_lock_after: null,
    auto_lock_when_order_saved: false,
    auto_popup_modifier: false,
    auto_print_food_record_enabled: true,
    auto_skip_payment_receipt_page: false,
    auto_sold_out_if_quantity_le_zero_enabled: false,
    autoprint_void_line_item_slip_enabled: false,
    basket_enabled: false,
    bill_of_material_enabled: false,
    cash_management_enabled: false,
    clear_table_after_checkout: false,
    costing_method: 0,
    currency_symbol_hidden: false,
    customer_display_features_enabled: false,
    daily_reset_reference_number: false,
    decimal_keypad_enabled: false,
    decimal_points: 0,
    default_table_turn_time: 90,
    device_whitelist_enabled: false,
    discard_sync_button_visble: false,
    discount_breakdown_line_item_level: true,
    display_discounted_subtotal: false,
    display_modifier_change_on_kitchen_slip: false,
    display_modifier_separately_on_payment_device: true,
    display_pickup_enabled: false,
    double_print_check_enabled: false,
    double_print_receipt_when_checkout_enabled: false,
    edit_line_item_shipping_method_enabled: false,
    embedded_barcode_decimal_points: null,
    embedded_barcode_enabled: false,
    embedded_barcode_type: null,
    enable_tips_feature_on_credit_card: null,
    except_for_cash_payment: false,
    favorite_grid_columns: 6,
    favorite_grid_rows: 5,
    floor_plan_visibility: false,
    gde_membership_enabled: false,
    gift_card_enabled: false,
    gift_card_expiration_method: 0,
    gift_card_expiration_time: null,
    gift_card_one_swipe_check_enabled: false,
    gift_card_top_up_amount: {},
    gift_receipt_enabled: false,
    hide_floor_plan_on_register_screen: false,
    hide_sold_out_item: false,
    hold_button_visible: false,
    id: 6946,
    ingenico_emv_credit_card_reader_enabled: false,
    inventory_variance_enabled: false,
    invoice_enabled: true,
    invoice_platform_docking_enabled: false,
    kds_enabled: false,
    kitchen_alias_enabled: true,
    kitchen_print_auto_print_double_slips_enabled: false,
    kitchen_print_auto_print_receipt_enabled: false,
    kitchen_slip_print_type: 0,
    line_item_code_enabled: true,
    line_item_created_time_enabled: false,
    line_item_decimal_points: 1,
    line_item_rounding_type: 0,
    lock_table_after_print_check: false,
    loyalty_enabled: false,
    manually_closing_enabled: false,
    manually_count_the_total_of_cash: false,
    middleware_order_amendment_enabled: false,
    multiple_add_on_modifiers_allowed: false,
    multiple_currency_enabled: false,
    multiple_language_enabled: false,
    octopus_add_value_feature_enabled: false,
    octopus_payment_feature_enabled: false,
    offline_cash_or_check_checkout_enabled: false,
    opp_pay_enabled: false,
    oracle_pms_enable: false,
    order_builder_enabled: false,
    overwrite_price_enabled: false,
    payment_check_enabled: true,
    permission_enabled: true,
    po_tax_enabled: false,
    print_barcode_on_receipt_enabled: true,
    print_double_kitchen_slips_enabled: false,
    print_gift_receipt_enabled: false,
    print_line_item_breakdown_with_receipt: 1,
    print_line_item_note_on_check_and_receipt_enabled: false,
    public_order_enabled: false,
    qsr_mode_enabled: false,
    qty_and_cost_up_enabled: false,
    quantity_allow_decimal: 1,
    quantity_decimal_points: 2,
    quick_payment_features_enabled: true,
    re_sync_button_visible: false,
    recommend_engine_enabled: false,
    remove_customer_and_manully_apply_discount_enabled: false,
    require_cvv_for_card_presence_transactions: false,
    require_pin_or_password_to_unlock: true,
    restaurant_app_url: null,
    restaurant_features_enabled: true,
    retail_features_enabled: true,
    round_tax_line_item_level: false,
    rounding_type: 0,
    send_kitchen_slip_after_transaction_is_done: false,
    separate_favorite_section_as_button_on_register: false,
    separate_tax_and_service_fee: true,
    serial_number_enabled: false,
    shift_status_visible: true,
    show_customer_details_on_kitchen_slip_enabled: false,
    show_item_price_on_kitchen_slip_enabled: false,
    show_line_item_image_enabled: true,
    show_menu_listing_qty_enabled: false,
    show_modifier_on_print_check_and_receipt_enabled: true,
    show_modifier_prefix: true,
    show_modifier_price_on_print_check_and_receipt_enabled: false,
    show_parent_department_on_receipt_enabled: false,
    show_signature_tips_when_print_check_enabled: false,
    show_tax_in_price_on_receipt_enabled: true,
    show_zero_amount_modifer_enabled: false,
    show_zero_dollar_item_on_printed_receipt_enabled: true,
    signature_from_zero_enabled: false,
    signature_trigger_amount: 20,
    store_credit_enabled: false,
    store_id: 7273,
    table_seat_enabled: false,
    tag_enabled: false,
    tax_breakdown_line_item_level: false,
    tax_in_tips_enabled: false,
    tax_order_level_decimal_points: 1,
    tax_order_level_rounding_type: 0,
    time_clock_enabled: false,
    track_associate_sales_enabled: false,
    transactionless_orders_enabled: false,
    unit_of_measure_enabled: false,
    use_a5_paper_for_air_print_receipt_enabled: false,
    voucher_feature_enabled: false,
    warehouse_management_enabled: false,
  };

 
  const context = new OrderBuilder.Context();
  context.setStore(store);
  context.setStoreModule(storeModule);

  const jsonData = {
    age: 19,
    name: "hugo",
    books: {
      book1: "hello",
      book2: "world",
    }
  }
  
  const tstPress3 = () => {
    console.log("jsonStr = " + JSON.stringify(jsonData));
    const jsonData  = JSON.parse('{"age":19,"name":"hugo","books":{"book1":"hello","book2":"world"}}');
    const jsonData1  = JSON.parse(`{"age":19,"name":"hugo","books":{"book1":"hello","book2":"world"}}`);

    console.log("jsonData = " + jsonData + jsonData1);
  }

  const tstPress = ()=>{
    
    console.log("============= start ================ ");
    

    // const order12 = JSON.parse(`{"order":{"initial_rounding":"0"}}`);
    // console.log("order12 = " + order12);

    // const order11 = JSON.parse(`{"order":{"initial_rounding":"0","initial_tax":"0","initial_service_fee":"0","subtotal":"441.5","counter":1631088179,"shipping_method":0,"initial_included_in_price_tax":"0","is_register_refund":false,"initial_normal_tax":"0","tax_base_adjustment":"0","initial_redeem_deposits":"0","taxable_amount":"441.5","shipping_address":"","customer_reference_number":""}}`);
    // console.log("order11 = " + order11);

    // const order13 = JSON.parse(`{"customer_membership_level_id":"","pickup_status":"1","customer_id":""}`);
    // console.log("order13 = " + order13);

    // const order15 = JSON.parse(`{"initial_service_fee_rounding":"0","initial_provided_in_request":true,"split_check_total":null}`);
    // console.log("order15 = " + order15);
    
    // const order14 = JSON.parse(`{"custom_attributes":null,"initial_tax_rounding":"0","channel":null,"discount_total":"0","from":2}`);
    // console.log("order14 = " + order14);

    
    // const order2 = JSON.parse(`{"custom_attributes":"{\"lineItem_Identifier\":\"FB06DE4B-7554-478D-B7FE-C9D9FA10975B\"}}`);
    // console.log("order2 = " + order2);

    // const order3 = JSON.parse(`{"split_line_item":0,"total":0,"excluded_advanced_discount_ids":"","add_on_tax_amount":0,"taxable_amount":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.000","tax_base_adjustment_amount":0,"id":null,"discount_entries":[],"label":"Tax","inclusive_tax_amount":0,"discount_total":0,"subtotal":0,"service_fee":0,"custom_attributes":"{\"lineItem_Identifier\":\"FB06DE4B-7554-478D-B7FE-C9D9FA10975B\"}","purchasable_type":"Tax","quantity_allow_decimal":true,"price":"0.00","cashier_id":566797}`);
    // console.log("order3 = " + order3);

    // const order4 = JSON.parse(`[{"split_line_item":0,"total":0,"excluded_advanced_discount_ids":"","add_on_tax_amount":0,"taxable_amount":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.000","tax_base_adjustment_amount":0,"id":null,"discount_entries":[],"label":"Tax","inclusive_tax_amount":0,"discount_total":0,"subtotal":0,"service_fee":0,"custom_attributes":"{\"lineItem_Identifier\":\"FB06DE4B-7554-478D-B7FE-C9D9FA10975B\"}","purchasable_type":"Tax","quantity_allow_decimal":true,"price":"0.00","cashier_id":566797},{"unit_quantity":"1.168","favorite_id":"","split_line_item":0,"favorite_tab_id":"","purchasable_id":58628386,"total":220.75,"add_on_tax_amount":0,"taxable_amount":220.75,"excluded_advanced_discount_ids":"","shipping_method":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.168","id":null,"tax_base_adjustment_amount":0,"label":"韓式單花卷","discount_entries":[],"product_id":47476097,"purchasable_type":"Listing","quantity_allow_decimal":true,"inclusive_tax_amount":0,"unit":"磅","discount_total":0,"subtotal":220.75,"service_fee":0,"price":"189.00","custom_attributes":"{\"lineItem_Identifier\":\"78318735-5102-4957-A81F-073F59AA5802\"}","input_source":"menu","cashier_id":566797,"favorite_section_id":""},{"unit_quantity":"1.168","favorite_id":"","split_line_item":0,"favorite_tab_id":"","purchasable_id":58628386,"total":220.75,"add_on_tax_amount":0,"taxable_amount":220.75,"excluded_advanced_discount_ids":"","shipping_method":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.168","id":null,"tax_base_adjustment_amount":0,"label":"韓式單花卷","discount_entries":[],"product_id":47476097,"purchasable_type":"Listing","quantity_allow_decimal":true,"inclusive_tax_amount":0,"unit":"磅","discount_total":0,"subtotal":220.75,"service_fee":0,"price":"189.00","custom_attributes":"{\"lineItem_Identifier\":\"CE54468D-A410-403B-A41D-C9F84445DC6B\"}","input_source":"menu","cashier_id":566797,"favorite_section_id":""},{"split_line_item":0,"total":0,"excluded_advanced_discount_ids":"","add_on_tax_amount":0,"taxable_amount":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.000","tax_base_adjustment_amount":0,"id":null,"discount_entries":[],"label":"Rounding","inclusive_tax_amount":0,"discount_total":0,"subtotal":0,"service_fee":0,"custom_attributes":"{\"lineItem_Identifier\":\"668E5316-A693-4D24-8F0A-29E78A2AA0F3\"}","purchasable_type":"Rounding","quantity_allow_decimal":true,"price":"0.00","cashier_id":566797}]`);
    // console.log("order4 = " + order4);
    
    
    const order = JSON.parse(`{"initial_rounding":"0","initial_tax":"0","initial_service_fee":"0","subtotal":"441.5","counter":1631088179,"shipping_method":0,"initial_included_in_price_tax":"0","is_register_refund":false,"initial_normal_tax":"0","tax_base_adjustment":"0","initial_redeem_deposits":"0","taxable_amount":"441.5","shipping_address":"","customer_reference_number":"","customer_membership_level_id":"","pickup_status":"1","customer_id":"","initial_service_fee_rounding":"0","initial_provided_in_request":true,"split_check_total":null,"custom_attributes":null,"initial_tax_rounding":"0","channel":null,"discount_total":"0","from":2,"line_items":[{"split_line_item":0,"total":0,"excluded_advanced_discount_ids":"","add_on_tax_amount":0,"taxable_amount":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.000","tax_base_adjustment_amount":0,"id":null,"discount_entries":[],"label":"Tax","inclusive_tax_amount":0,"discount_total":0,"subtotal":0,"service_fee":0,"purchasable_type":"Tax","quantity_allow_decimal":true,"price":"0.00","cashier_id":566797},{"unit_quantity":"1.168","favorite_id":"","split_line_item":0,"favorite_tab_id":"","purchasable_id":58628386,"total":220.75,"add_on_tax_amount":0,"taxable_amount":220.75,"excluded_advanced_discount_ids":"","shipping_method":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.168","id":null,"tax_base_adjustment_amount":0,"label":"韓式單花卷","discount_entries":[],"product_id":47476097,"purchasable_type":"Listing","quantity_allow_decimal":true,"inclusive_tax_amount":0,"unit":"磅","discount_total":0,"subtotal":220.75,"service_fee":0,"price":"189.00","input_source":"menu","cashier_id":566797,"favorite_section_id":""},{"unit_quantity":"1.168","favorite_id":"","split_line_item":0,"favorite_tab_id":"","purchasable_id":58628386,"total":220.75,"add_on_tax_amount":0,"taxable_amount":220.75,"excluded_advanced_discount_ids":"","shipping_method":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.168","id":null,"tax_base_adjustment_amount":0,"label":"韓式單花卷","discount_entries":[],"product_id":47476097,"purchasable_type":"Listing","quantity_allow_decimal":true,"inclusive_tax_amount":0,"unit":"磅","discount_total":0,"subtotal":220.75,"service_fee":0,"price":"189.00","input_source":"menu","cashier_id":566797,"favorite_section_id":""},{"split_line_item":0,"total":0,"excluded_advanced_discount_ids":"","add_on_tax_amount":0,"taxable_amount":0,"tax_amount":0,"tax_option_entries":[],"quantity":"1.000","tax_base_adjustment_amount":0,"id":null,"discount_entries":[],"label":"Rounding","inclusive_tax_amount":0,"discount_total":0,"subtotal":0,"service_fee":0,"purchasable_type":"Rounding","quantity_allow_decimal":true,"price":"0.00","cashier_id":566797}],"due_date":"2021-09-15","initial_tips":"0","customer_email":"","sale_type":"register_sale","splitted":0,"initial_included_in_price_service_fee":null,"initial_total":"441.5","org_voucher_total_amount":0,"user_id":null,"store_id":54723,"customer_phone":"","use_cash_voucher":0,"customer_thumb_avatar_url":"","fapiao_entries":[],"humanized_from":"POS","initial_included_in_price_tax_for_service_fee":"0","initial_product_total":"441.5","customer_name":""}`);
    console.log("msg.order = " + JSON.stringify(order));
    var orderBuilder = new OrderBuilder(context, order);
    var buildingOrder = orderBuilder.createReceiptData();
    var lineItems = buildingOrder.line_items;
    var totalItems = buildingOrder.number_of_items;

    console.log("lineItems = " + JSON.stringify(lineItems, null, 2));
    console.log("totalItems = " + totalItems);

  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar hidden = {false} barStyle={'dark-content'} />
      {/* <Text style = {{flex:1, textAlign: 'center', textAlignVertical: 'center', ...borderStyles.red}}> t0_iget_tasko_jain</Text>
      <Text style = {{flex:2, textAlignVertical: 'center', ...borderStyles.yellow }}>{useColorScheme()}</Text> */}
      <Item
        title = "Tst_xx"
        onPress = {tstPress}
      />

      <Item
        title = "microTask"
        onPress = {MicroTaskFc}
      />
       <Item
        title = "Promise"
        onPress = {PromiseFc}
      />
       <Item
        title = "ProtoType"
        onPress = {ProtoTypeFc}
      />
    </SafeAreaView>
  );
};

const borderStyles = StyleSheet.create({
  red:{
    borderWidth:2,
    borderColor: "red",
  },
  
  yellow:{
    borderWidth:2,
    borderColor:"yellow",
  },

  blue:{
    borderWidth:2,
    borderColor:"blue",
  }
  
});

const styles = StyleSheet.create({
  sectionContainer: {
    ...borderStyles.blue,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
