import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/FabStyles'

export default class Fab extends Component {
  static defaultProps = { show: true }

  static propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    let fabComponent = null
    if (this.props.show) {
      const { title } = this.props
      return (
        <View
          style={[styles.MainContainer, this.props.style]}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.props.onPress}
            style={styles.TouchableOpacityStyle}
          >
            <Image
              source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
      )
    }

    return fabComponent
  }
}
