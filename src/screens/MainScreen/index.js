import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {initEvents, listItem} from '../../../redux/events/action';
import {selectAllEvents} from '../../../redux/events/selectors';
import styles from './styles';

const MINUTE_MS = 60000;

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);

  const [offset, setOffset] = useState(0);
  const [inc, setInc] = useState(1);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(allEvents);

  const redirectShow = name => {
    console.log('323232');
    dispatch(listItem(name));
    navigation.navigate('ListItem');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prevTime => prevTime + 1);
      setInc(prevTime => prevTime + 1);
    }, MINUTE_MS);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setItems(allEvents.slice(offset * 5, inc * 5));
  }, [allEvents, inc]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const refetchApi = () => {
    dispatch(initEvents());
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        extraData={items}
        data={items}
        renderItem={({item, i}) => {
          return (
            <TouchableOpacity
              onPress={() => redirectShow(item.actor.login)}
              style={styles.flatList}
              key={i}>
              <View style={{width: '15%'}}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.actor.avatar_url,
                  }}
                />
              </View>
              <Text>{item.actor.display_login}</Text>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={() => (
          <TouchableOpacity
            disabled={count > 15 ? false : true}
            style={styles.countStyle(count > 15)}
            onPress={refetchApi}>
            <Text style={styles.refetchStyle}>Refetch</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
