import React, { Component } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  BackHandler,
  StatusBar,
  View,
  ScrollView,
  Text,
  Button
} from "react-native";
import { Images, Metrics } from "../Themes";
import db from "../Db";
// import styles from "./Styles/ExpenseListScreenStyle";
import ExpenseList from "../Components/ExpenseList";
import Fab from "../Components/Fab";

const ScreenHeader = props => {
  return (
    <View>
      <Text>Expense List</Text>
    </View>
  );
};

export default class ExpenseListScreen extends Component {
  static navigationOptions = {
    title: "Expense List Screen",
    drawerLabel: "ExpenseListScreen",
    drawerIcon: ({ tintColor }) => <Icon name="home" />
  };

  constructor(props) {
    super(props);
  
    this.state = {
      visibleHeight: Metrics.screenHeight,
    };
  }

  componentDidMount() {
    // this.props.fetchAll()
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  componentWillMount() {
    BackHandler.removeEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  render() {
    const { navigation, expenses } = this.props
    return (
      <View>
        <ScreenHeader navigation={navigation} />
        <ScrollView
          contentContainerStyle={{ justifyContent: "center" }}
          style={{ height: this.state.visibleHeight }}
          // keyboardShouldPersistTaps="always"
        >
          <ExpenseList expenses={db.Expense.all()} />
          <Fab
            onPress={
              () => {
                navigation.navigate("AddExpenseScreen")
              }
            }
          />
          <Button
            style={{ alignSelf: "center", width: 200 }}
            title="+(temp. subs for Fab)"
            onPress={
              () => alert("Navigate to Expense Entry Screen")
             // () => {
             //    navigation.navigate("AddExpenseScreen")
             //  } 
            }
          />
          <Button
            title="Go Back"
            onPress={
              () => this.props.navigation.goBack()
            }
          />
        </ScrollView>
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
