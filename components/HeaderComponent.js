import { Header } from 'react-native-elements';
import React from 'react';
import {
    View,
} from 'react-native';

export default function HeaderComponent() {
    return (
      <View>
        <Header
            leftComponent={{ icon: 'login', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'Balance App', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
      </View>
    );
  }
