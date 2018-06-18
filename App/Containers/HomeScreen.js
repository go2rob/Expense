import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
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
            title="Login!"
            style={{ alignSelf: "center" }}
            onPress={() => alert("Login Actions")}
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
