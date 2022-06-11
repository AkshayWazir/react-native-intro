import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {NewDashboard} from './src/screens';

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
      <NewDashboard />
    </View>
  );
};

export default App;

// * Flexbox
