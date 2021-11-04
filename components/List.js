import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function List(props) {
  const [textValue, setTextValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (value) => {
    setTextValue(value);
  }

  const handleAddItem = () => {
    const item = {
      value: textValue,
      id: Math.random().toString(),
    };
    setItemList([
      ...itemList,
      item,
    ]);
    setTextValue('');
  }

  const handleRemoveItem = (id) => {
    setModalVisible(true);
    setItemSelected(itemList.find(item => item.id === id));
  }

  const handleRemoveConfirm = () => {
    const newList = itemList.filter(item => item.id !== itemSelected.id);
    setItemList(newList);
    setModalVisible(false);
    setItemSelected({});
  }

  return (
    <View style={styles.screen}>
      <Text>{props.type}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.type}
          style={styles.input}
          onChangeText={handleChangeText}
          value={textValue}
        />
        <Button
          title="ADD"
          onPress={handleAddItem}
        />
      </View>
      <View style={styles.items}>
        <FlatList
          data={itemList}
          keyExtractor={item => item.id}
          renderItem={(data) => (
            <View style={styles.item} key={data.item.id}>
              <Text>{data.item.value}</Text>
              <Button title="X" onPress={() => handleRemoveItem(data.item.id)} />
            </View>
          )}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View>
          <View>
            <Text>Are you sure you want to delete?</Text>
          </View>
          <View>
            <Text>{itemSelected.value}</Text>
          </View>
        </View>
        <View>
          <Button title="Confirm" onPress={handleRemoveConfirm} />
        </View>
      </Modal>
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