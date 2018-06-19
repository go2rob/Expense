import Realm from "realm";
import fs from "react-native-fs";
import uuid from "uuid/v4";
import _ from "lodash";

const ExpenseSchema = {
  name: "Expense",
  primaryKey: "id",
  properties: {
    id: { type: "string", indexed: true },
    title: "string",
    description: { type: "string", optional: true },
    amount: { type: "float", default: 0.0 },
    transactionAt: "date",
    location: "string",
    account: "Account",
    type: "Type",
    createdAt: "date",
    updatedAt: "date"
  }
};

const AccountSchema = {
  name: "Account",
  primaryKey: "id",
  properties: {
    id: { type: "string", indexed: true },
    title: "string",
    types: {
      type: "linkingObjects",
      objectType: "Type",
      property: "account"
    },
    expenses: {
      type: "linkingObjects",
      objectType: "Expense",
      property: "account"
    }
  }
};

const TypeSchema = {
  name: "Type",
  primaryKey: "id",
  properties: {
    id: { type: "string", indexed: true },
    title: "string",
    icon: "string",
    account: "Account",
    expenses: {
      type: "linkingObjects",
      objectType: "Expense",
      property: "type"
    }
  }
};

const Database = new Realm({
  path: fs.DocumentDirectoryPath + "/default.realm",
  schema: [ExpenseSchema, AccountSchema, TypeSchema],
  schemaVersion: 1
});

export default {
  Expense: {
    all: sortBy => {
      if (!sortBy) sortBy = [["title", true]];
      return Database.objects("Expense").sorted(sortBy);
    },

    create: props => {
      props.id = uuid();
      props.createdAt = new Date();
      props.updatedAt = new Date();
      props.transactionAt = props.transactionAt || new Date();
      props.amount = props.amount || 0.0;
      debugger
      Database.write(() => {
        Database.create("Expense", props);
      });
    },

    update: (model, callback) => {
      if (!callback) return;
      Database.write(() => {
        callback();
        model.updatedAt = new Date();
      });
    },

    getTitle: id => {
      return Database.objectForPrimaryKey("Expense", id).title;
    },

    findByTitle: title => {
      return Database.objects("Expense").filtered("title == $0", title)[0];
    }
  },
  Account: {
    all: function(sortBy) {
      if (!sortBy) sortBy = [["title", true]];
      return Database.objects("Account").sorted(sortBy);
    },

    create: function(props) {
      props.id = uuid();
      Database.write(() => {
        Database.create("Account", props);
      });
    },

    update: function(model, callback) {
      if (!callback) return;
      Database.write(() => {
        callback();
      });
    },

    getTitle: function(id) {
      return Database.objectForPrimaryKey("Account", id).title;
    },

    findByTitle: title => {
      return Database.objects("Account").filtered("title == $0", title)[0];
    }
  },
  Type: {
    all: function(sortBy) {
      if (!sortBy) sortBy = [["title", true]];
      return Database.objects("Type").sorted(sortBy);
    },

    create: function(props) {
      props.id = uuid();
      Database.write(() => {
        Database.create("Type", props);
      });
    },

    update: function(model, callback) {
      if (!callback) return;
      Database.write(() => {
        callback();
      });
    },

    getTitle: function(id) {
      return Database.objectForPrimaryKey("Type", id).title;
    },

    findByTitle: title => {
      return Database.objects("Type").filtered("title == $0", title)[0];
    }
  }
}
