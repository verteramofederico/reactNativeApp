import React from 'react';
import { Tab } from 'react-native-elements';
import {
    View,
} from 'react-native';

export default function HeaderC() {
    return (
      <View>
        <Tab value={index} onChange={setIndex}>
            <Tab.Item title="Balance" />
            <Tab.Item title="Incomes" />
            <Tab.Item title="Expenses" />
        </Tab>
      </View>
    );
  }
