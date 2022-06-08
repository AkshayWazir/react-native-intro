import React from 'react';
import {View, StyleSheet, useWindowDimensions, Image, Text} from 'react-native';
import Icon from '../assets/icon.svg';
import Pattern from '../assets/pattern.png';

const Dashboard = () => {
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    screenContainer: {
      height: height * 0.2,
      width: width * 0.8,
      backgroundColor: '#ffffff',
      borderRadius: height * 0.02,
      elevation: 3,
      margin: width * 0.1,
      flexDirection: 'row',
      overflow: 'hidden',
    },
    textStyle: {
      color: '#000000',
    },
    firstSection: {
      width: width * 0.4,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    pattern: {
      height: height * 0.2,
      width: width * 0.4,
    },
  });

  return (
    <View style={styles.screenContainer}>
      <View style={styles.firstSection}>
        <Icon height={width * 0.1} width={width * 0.1} />
        <Text style={styles.textStyle}>44512 45124</Text>
        <Text style={styles.textStyle}>44512 45124</Text>
      </View>
      <View>
        <Image source={Pattern} style={styles.pattern} />
      </View>
    </View>
  );
};

export default Dashboard;
