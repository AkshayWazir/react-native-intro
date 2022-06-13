import React, {useRef, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';

const ListLoader = props => {
  const {data, Item, horizontal, scrollTo, styles = {}} = props;
  const defStyles = StyleSheet.create({
    container: {
      backgroundColor: '#ff00ff',
      flexGrow: 0,
    },
  });
  const finalStyles = StyleSheet.compose(defStyles.container, styles);
  const listRef = useRef(null);

  const renderItem = ({item}) => <Item {...item} />;

  useEffect(() => {
    if (scrollTo && listRef) {
      console.log('starting to scroll');
      listRef.current.scrollToIndex(scrollTo);
    }
  }, [scrollTo]);

  return (
    <FlatList
      style={finalStyles}
      data={data}
      horizontal={horizontal || false}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ref={listRef}
    />
  );
};

export default ListLoader;
