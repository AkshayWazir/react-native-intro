import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Image,
  Button,
} from 'react-native';
import {colors} from '../creds/config';

const ItemComp = props => {
  const {height, width} = useWindowDimensions();
  const {icon, title, name, addEnable = false, addFunc} = props;

  const styles = StyleSheet.create({
    container: {
      height: height * 0.15,
      width: width * 0.9,
      flexDirection: 'row',
      marginHorizontal: width * 0.05,
      marginVertical: height * 0.025,
      backgroundColor: colors.secondary,
      alignItems: 'center',
    },
    text: {
      color: colors.secondary,
    },
    s2: {
      flexGrow: 5,
    },
    t1: {
      marginStart: width * 0.05,
      fontSize: height * 0.03,
      color: colors.primary,
    },
    t2: {
      marginStart: width * 0.05,
      fontSize: height * 0.02,
      color: '#000',
    },
    img: {
      height: height * 0.1,
      width: height * 0.1,
      marginLeft: width * 0.02,
      flexGrow: 1,
    },
    btn: {flexGrow: 1},
  });

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.img} />
      <View style={styles.s2}>
        <Text style={styles.t1}>{name}</Text>
        <Text style={styles.t2}>{title}</Text>
      </View>
      {addEnable && <Button title="Add" onPress={addFunc} style={styles.btn} />}
    </View>
  );
};

export default ItemComp;
