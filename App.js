import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useState } from 'react';

import AppLoading from 'expo-app-loading'
import HeaderComponent from './components/HeaderComponent'
import List from './components/List'
import { useFonts } from 'expo-font'

export default function App() {
  const [conditionalView, setConditionalView] = useState("");
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!loaded) return <AppLoading/>

  const handleOption = (string) => {
    if (string === "AddIncome") {
      setConditionalView("AddIncome")
    }
    if (string === "AddExpense") {
      setConditionalView("AddExpense")
    }
  }
  
  return (
    <View style={styles.screen}>
      <HeaderComponent/>
      
      <View>
      <Text>Add income</Text>
      <Button title="AddIncome" onPress={handleOption("AddIncome")} />
      <Text>Add expense</Text>
      <Button title="AddExpense" onPress={handleOption("AddExpense")} />
      </View>
      
      {conditionalView === "AddIncome" ? <List type={"Incomes"}/> : null }
      {conditionalView === "AddExpense" ? <List type={"Expenses"}/> : null }      
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