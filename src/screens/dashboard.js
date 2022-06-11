import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';

const DashboardComp = () => {
  const {height, width, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({});
  const [loadingState, setLoadingState] = useState(false);
  const [array, setArray] = useState([
    {id: 0, name: 'Akshay'},
    {id: 1, name: 'Amit'},
    {id: 2, name: 'Sebastian'},
  ]);

  function refreshFunc(params) {
    setLoadingState(true);
    setTimeout(() => {
      setArray([...array, {id: array.length, name: 'Sebastian'}]);
      setLoadingState(false);
    }, 3000);
  }

  return (
    <View style={styles.parent}>
      <FlatList
        onRefresh={refreshFunc}
        refreshing={loadingState}
        data={array}
        renderItem={({item}) => <RenderItem name={item.name} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

function RenderItem({id, name}) {
  const {height, width, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    child: {
      height: height * 0.1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: height * 0.01,
      backgroundColor: '#00ff0022',
    },
    text: {color: '#000000'},
  });
  return (
    <View style={styles.child}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export default DashboardComp;

// {
//   array.map(item => <Item name={item.title} />);
// }
