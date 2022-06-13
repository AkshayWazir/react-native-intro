import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {colors} from '../creds/config';

const ItemComp = props => {
  const {height, width} = useWindowDimensions();
  const {icon, title, name, addEnable = false} = props;
  const styles = StyleSheet.create({
    container: {
      height: height * 0.15,
      width: width * 0.8,
    },
    text: {
      color: '#ff0000',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

export default ItemComp;
