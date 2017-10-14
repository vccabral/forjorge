//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { FluidBridge } = NativeModules

export default {
  exampleMethod () {
  	console.log(FluidBridge.exampleMethod());
  },

  EXAMPLE_CONSTANT: FluidBridge.EXAMPLE_CONSTANT
}
