import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {Dashboard} from './src/screens';

const App = () => {
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    back: {
      height: height,
      width: width,
      backgroundColor: '#ffffff',
    },
  });
  return (
    <View style={styles.back}>
      <Dashboard />
      <Dashboard type={1} />
    </View>
  );
};

export default App;

// * Flexbox
