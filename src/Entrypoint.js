import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import MainScreens from './navigation/MainScreens';
import {initEvents} from '../redux/events/action';

const Entrypoint = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initEvents());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <MainScreens />
    </NavigationContainer>
  );
};

export default Entrypoint;
