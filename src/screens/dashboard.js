import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Icon from '../assets/pattern.png';
import {ListItem, ListLoader} from '../components';
import {colors} from '../creds/config';

const Dashboard = props => {
  const [queue, setQueue] = useState([]);
  const {height, width} = useWindowDimensions();
  const [pos, setPos] = useState(0);

  const styles = StyleSheet.create({
    container: {height: height, width: width, backgroundColor: '#ffffff'},
    firstSection: {height: '80%', backgroundColor: colors.default},
    secondSection: {height: '20%', backgroundColor: colors.primarys},
  });
  const content = [
    {id: 0, icon: Icon, title: 'Lead', name: 'Akshay'},
    {id: 1, icon: Icon, title: 'Analyst', name: 'Aayush'},
    {id: 2, icon: Icon, title: 'Senior', name: 'Shubham'},
    {id: 3, icon: Icon, title: 'Manager', name: 'Aditya'},
    {id: 4, icon: Icon, title: 'VP', name: 'Lakshay'},
    {id: 5, icon: Icon, title: 'Senior', name: 'Shubham'},
    {id: 6, icon: Icon, title: 'Manager', name: 'Aditya'},
    {id: 7, icon: Icon, title: 'VP', name: 'Lakshay'},
    {id: 8, icon: Icon, title: 'Senior', name: 'Shubham'},
    {id: 9, icon: Icon, title: 'Manager', name: 'Aditya'},
    {id: 10, icon: Icon, title: 'VP', name: 'Lakshay'},
    {id: 11, icon: Icon, title: 'Senior', name: 'Shubham'},
    {id: 12, icon: Icon, title: 'Manager', name: 'Aditya'},
    {id: 13, icon: Icon, title: 'VP', name: 'Lakshay'},
  ];

  return (
    <View style={styles.container}>
      <ListLoader
        data={content.map(item => {
          return {
            ...item,
            addEnable: true,
            addFunc: () => {
              console.log('Incrementing Queue');
              setQueue([...queue, item]);
              console.log('Incremented Queue ', queue);
            },
          };
        })}
        Item={ListItem}
        styles={styles.firstSection}
      />
      <ListLoader
        data={queue}
        Item={ListItem}
        styles={styles.secondSection}
        horizontal={true}
        scrollTo={pos}
      />
    </View>
  );
};

export default Dashboard;
