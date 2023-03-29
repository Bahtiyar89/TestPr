import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import ListItem from '../screens/ListItem';

const Stack = createNativeStackNavigator();

const MainScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ListItem"
        component={ListItem}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainScreens;
