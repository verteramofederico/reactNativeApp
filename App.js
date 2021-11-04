import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import HeaderComponent from './components/HeaderComponent'
import List from './components/List'
import React from 'react';
import TabMenu from './components/TabMenu'

export default function App() {
  return (
    <View style={styles.screen}>
      <HeaderComponent/>
      <List type={"Incomes"}/>
      <List type={"Expenses"}/>
      <TabMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    backgroundColor: '#ECECEC',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
  },
});