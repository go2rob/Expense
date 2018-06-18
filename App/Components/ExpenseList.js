import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./Styles/ExpenseListStyle";

class ExpenseItem extends React.PureComponent {
  render() {
    const { title } = this.props.expense;
    return (
      //avaialble opts
      //"id", "title", "description", "amount", "transactionAt", "account", "type", "createdAt", "updatedAt"
      <View style={styles.listItemContainer}>
        <Text>{ title }</Text>
      </View>
    );
  }
}

export default class ExpenseList extends Component {
  ListItemSeperator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "18%"
        }}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.expenses}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        keyExtractor={expense => expense.id}
        ItemSeparatorComponent={this.ListItemSeperator}
      />
    );
  }
}
