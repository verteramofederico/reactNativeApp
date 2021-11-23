import React from 'react';
import { Text, Button, View } from 'react-native'

export default function AdvisesScreen({navigation}) {
    return (
      <View>
        <Text>Financial advices</Text>
        <Text>1</Text>
        <Button title="Go to x" onPress={() => {
            navigation.navigate("ContactScreen")
        }} />
      </View>
    )
  }