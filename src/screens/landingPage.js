import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import Icon from '../assets/icon.svg';
import Pattern from '../assets/pattern.png';

const Dashboard = props => {
  const {type = 0} = props;
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

  const styles1 = StyleSheet.create({
    mainCont: {
      height: height * 0.2,
      width: width * 0.8,
      borderRadius: 0.02 * height,
      margin: width * 0.1,
      backgroundColor: '#0000ff',
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'center',
      elevation: 3,
    },
    s2: {
      height: height * 0.08,
      width: width * 0.8,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-evenly',

      //   borderWidth: 1,
      //   borderColor: '#ff0000',
    },
    s1: {
      height: height * 0.12,
      width: width * 0.8,
      flexDirection: 'column',
      alignItems: 'flex-end',
      borderTopLeftRadius: height * 0.02,
      borderTopRightRadius: height * 0.02,
      padding: height * 0.01,
      justifyContent: 'space-evenly',
      //   borderWidth: 1,
      //   borderColor: '#ff00ff',
    },
    t1: {
      color: '#000000',
    },
    t2: {
      color: '#ffffff',
    },
  });

  function contentGen() {
    switch (type) {
      case 0:
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
      case 1:
        return (
          <View style={styles1.mainCont}>
            <ImageBackground
              source={Pattern}
              imageStyle={styles1.s1}
              style={styles1.s1}>
              <Icon height={width * 0.1} width={width * 0.1} />
              <Text style={styles1.t1}>44512 45124</Text>
            </ImageBackground>
            <View style={styles1.s2}>
              <Text style={styles1.t2}>44512 45124</Text>
              <Text style={styles1.t2}>44512 45124</Text>
            </View>
          </View>
        );
    }
  }

  return contentGen();
};

export default Dashboard;
