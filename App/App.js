import React, { Component } from 'react';

// screens identified by the router
import HomeScreen from "./Containers/HomeScreen";
import ExpenseListScreen from "./Containers/ExpenseListScreen";
// import AddExpenseScreen from "./Containers/AddExpenseScreen";
// import NavigationDrawer from "./NavigationDrawer";
import { createStackNavigator } from "react-navigation";

const App = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    // NavigationDrawer: { screen: NavigationDrawer },
    ExpenseListScreen: { screen: ExpenseListScreen },
    // AddExpenseScreen: { screen: AddExpenseScreen }
  },
  {
    // initialRouteName: "ExpenseListScreen",
    // initialRouteName: "AddExpenseScreen",
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);

export default App;
