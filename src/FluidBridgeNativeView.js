//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types';

const FluidBridge = requireNativeComponent('FluidBridge', FluidBridgeView)

export default class FluidBridgeView extends Component {
  render () {
    return <FluidBridge {...this.props} />
  }
}

FluidBridgeView.propTypes = {
  exampleProp: PropTypes.any
}
