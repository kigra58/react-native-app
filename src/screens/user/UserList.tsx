import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

interface IUserList {
  id: number;
  name: string;
  email: string;
}

interface IItemProps {
  item: IUserList;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

const Item = ({item, onPress, backgroundColor, textColor}: IItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.id}</Text>
    <Text style={[styles.title, {color: textColor}]}>{item.name}</Text>
    <Text style={[styles.title, {color: textColor}]}>{item.email}</Text>
  </TouchableOpacity>
);

const UserList = () => {
  const [selectedId, setSelectedId] = useState<number>();
  const DATA = [
    {
      id: 101,
      name: 'name1',
      email: 'email1',
    },
    {
      id: 102,
      name: 'name2',
      email: 'email2',
    },
  ];

  const renderItem = ({item}: {item: IUserList}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    // flex: 0,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    // fontSize: 3,
  },
});
