import React, {useRef, useEffect} from 'react';
import {FlatList} from 'react-native';

const ListLoader = props => {
  const {data, Item, horizontal, scrollTo} = props;
  const listRef = useRef(null);
  const renderItem = items => <Item {...items} />;

  useEffect(() => {
    if (scrollTo) listRef.current.scrollToIndex(scrollTo);
  }, [scrollTo]);

  return (
    <FlatList
      data={data}
      horizontal={horizontal || false}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ref={listRef}
    />
  );
};

export default ListLoader;
