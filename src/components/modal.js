import React from 'react';
import {
  Modal,
  Text,
  View,
  Button,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const GenModal = props => {
  const {positive = () => {}, negative = () => {}, visible, closeFunc} = props;
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    inner: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeFunc}>
      <View style={styles.inner}>
        <Text>Are you sure you want to add it to the list ?</Text>
        <View>
          <Button title="Yes" onPress={positive} />
          <Button title="No" onPress={negative} />
        </View>
      </View>
    </Modal>
  );
};

export default GenModal;
