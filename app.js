'use strict';

const Homey = require('homey');
const DebugBridge = require('adb').DebugBridge;

const adb = new DebugBridge();

adb.listDevices((devices) => {
  console.log(devices);

  devices[0].shellCmd('input keyevent KEYCODE_POWER')

  // adb.connect((session) => {
  //   console.log(session);
  //   throw "Nikoumouk"
  // })
})


// class MyApp extends Homey.App {
//   /**
//    * onInit is called when the app is initialized.
//    */
//   async onInit() {
//     this.log('MyApp has been initialized');
//     console.log(adb);
//   }
// }

// module.exports = MyApp;