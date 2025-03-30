import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AllItem = ({data}) => {
  console.log(data);

  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.headingTxt}>Items</Text>
        <Text style={styles.headingTxt}>Quantity</Text>
      </View>
      {data?.length > 0 ? (
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
              <Text style={styles.itmText}>{item.stock}</Text>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 40,
          }}>
          <Text style={styles.headingTxt}>No item Found</Text>
        </View>
      )}
    </View>
  );
};

export default AllItem;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingTxt: {
    fontSize: 16,
    fontWeight: 500,
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
