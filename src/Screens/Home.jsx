import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItem from './AllItem';
import CreateScreen from './CreateScreen';

const Home = () => {
  const [view, setView] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Wheat',
      stock: 5,
      unit: 'Kg',
    },
    {
      id: 2,
      name: 'Rice',
      stock: 15,
      unit: 'Kg',
    },
    {
      id: 3,
      name: 'Apples',
      stock: 20,
      unit: 'Kg',
    },
    {
      id: 4,
      name: 'Sweet Potato',
      stock: 12,
      unit: 'Kg',
    },
    {
      id: 5,
      name: 'Flour',
      stock: 4,
      unit: 'Kg',
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <Pressable
          style={[
            styles.btn,
            view === 0 ? {backgroundColor: '#72c37aff'} : null,
          ]}>
          <Text
            style={[styles.btnText, view === 0 ? {color: 'white'} : null]}
            onPress={() => setView(0)}>
            All items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            view === 1 ? {backgroundColor: '#72c37aff'} : null,
          ]}>
          <Text
            style={[styles.btnText, view === 1 ? {color: 'white'} : null]}
            onPress={() => setView(1)}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            view === 2 ? {backgroundColor: '#72c37aff'} : null,
          ]}>
          <Text
            style={[styles.btnText, view === 2 ? {color: 'white'} : null]}
            onPress={() => setView(2)}>
            Create
          </Text>
        </Pressable>
      </View>
      {view === 0 && <AllItem data={data} />}
      {view === 1 && <AllItem data={data.filter(item => item.stock < 15)} />}
      {view === 2 && <CreateScreen data={data} setData={setData} />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '2%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  btn: {
    paddingVertical: 2.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.7,
    borderColor: '#72c37aff',
  },
  btnText: {
    color: '#72c37aff',
    fontSize: 14,
  },
});
