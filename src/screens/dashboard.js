import React from 'react';
import {View, Image, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Icon from '../assets/pattern.png';
import {ListItem, ListLoader} from '../components';

const Dashboard = props => {
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {height: height, width: width, backgroundColor: '#ffffff'},
  });
  const content = [
    {id: 0, icon: Icon, title: 'Lead', name: 'Akshay'},
    {id: 1, icon: Icon, title: 'Analyst', name: 'Aayush'},
    {id: 2, icon: Icon, title: 'Senior', name: 'Shubham'},
    {id: 3, icon: Icon, title: 'Manager', name: 'Aditya'},
    {id: 4, icon: Icon, title: 'VP', name: 'Lakshay'},
  ];
  return (
    <View style={styles.container}>
      <ListLoader data={content} Item={ListItem} />
    </View>
  );
};

export default Dashboard;
