import React from 'react';
import { Text, Button, View } from 'react-native'

export default function ContactScreen({navigation}) {
    return (
      <View>
        <Text>ContactScreen</Text>
        <Text>1</Text>
        <Button title="Go to x" onPress={() => {
            navigation.navigate("AdvisesScreen")
        }} />
      </View>
    )
  }