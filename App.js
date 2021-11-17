import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native'
import React, { useState } from 'react';

import AppLoading from 'expo-app-loading'
import HeaderComponent from './components/HeaderComponent'
import List from './components/List'
import { useFonts } from 'expo-font'

export default function App() {
  const [conditionalView, setConditionalView] = useState  ('')
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!loaded) return <AppLoading/>

  const handleAddIncome = () => {
    setConditionalView('AddIncome')
  }
  const handleAddExpense = () => {
    setConditionalView('AddExpense')
  }
  const handleExitAdd = () => {
    setConditionalView('')
  }
  
  return (
    <View style={styles.screen}>
      <HeaderComponent/>
      
      <View>
      <Text>Add income</Text>
      <Button onPress={handleAddIncome} title="AddIncome"/>
      <Text>Add expense</Text>
      <Button onPress={handleAddExpense} title="AddExpense"/>
      </View>
      
      {conditionalView === "AddIncome" ? <List type={"Incomes"}/> : null }
      {conditionalView === "AddExpense" ? <List type={"Expenses"}/> : null }
      {conditionalView === "AddExpense" ? <Button onPress={handleExitAdd} title="ExitAdd"/> : null }
      {conditionalView === "AddIncome" ? <Button onPress={handleExitAdd} title="Exit Adding"/> : null }   
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