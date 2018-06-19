import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  DatePickerAndroid
} from 'react-native';

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
  const openAndroidDatePicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home Screen
        </Text>
          <Button
            title="Explore!"
            style={{ alignSelf: "center" }}
            onPress={() => navigate("ExpenseListScreen")}
          />
          <Text/>
          <Button
            title="Select Date!"
            style={{ alignSelf: "center" }}
            onPress={() => openAndroidDatePicker()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
