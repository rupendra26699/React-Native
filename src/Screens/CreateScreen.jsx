import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const CreateScreen = ({data, setData}) => {
  const [item, setitem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState('');

  const resetForm = () => {
    setitem('');
    setQuantity('');
    setIsEdit(false);
    setEditId(null);
  };

  const handleAddItem = () => {
    if (!item || !quantity) return;
    const newData = {id: Date.now(), name: item, stock: quantity};
    setData([...data, newData]);
    resetForm();
  };
  const updateItem = () => {
    setData(
      data.map(existingItem =>
        existingItem.id === editId
          ? {...existingItem, name: item, stock: quantity}
          : existingItem,
      ),
    );
    resetForm();
  };

  const deleteItem = id => {
    setData(data.filter(item => item.id !== id));
  };
  const editItem = item => {
    setIsEdit(true);
    setitem(item.name);
    setQuantity(item.stock);
    setEditId(item.id);
    // setData(data.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
        placeholderTextColor={'#999'}
        style={styles.txtInput}
        value={item}
        onChangeText={setitem}
      />
      <TextInput
        placeholder="Enter item quantity..."
        placeholderTextColor={'#999'}
        style={styles.txtInput}
        value={quantity}
        onChangeText={setQuantity}
      />
      <Pressable
        style={styles.btn}
        onPress={isEdit ? updateItem : handleAddItem}>
        <Text style={styles.btnTxt}>
          {isEdit ? 'Edit item in stock' : 'Add item to Stock'}
        </Text>
      </Pressable>

      <View style={{marginTop: 10}}>
        <Text style={styles.headingTxt}>All items in stock</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock < 15 ? '#ffcccc' : '#d7f6bf'},
              ]}>
              <Text style={styles.itmText}>{item.name}</Text>
              <View style={{flexDirection: 'row', gap: 20}}>
                <Text style={styles.itmText}>{item.stock}</Text>
                <Pressable onPress={() => editItem(item)}>
                  <Text style={styles.itmText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItem(item.id)}>
                  <Text style={styles.itmText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    padding: '4%',
    gap: 10,
  },
  txtInput: {
    borderWidth: 1.5,
    borderColor: '#d7f6bf',
    paddingVertical: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#cabfeeff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 600,
    color: 'white',
    textTransform: 'uppercase',
  },
  headingTxt: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itmText: {
    fontSize: 14,
    fontWeight: 400,
  },
});
