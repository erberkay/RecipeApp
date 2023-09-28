import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import SeeAllScreen from '../screens/SeeAllScreens';

const Stack = createNativeStackNavigator();

// set options in the pages
const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#1E1E1E'},
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
      />
      <Stack.Screen
        name="SeeAllScreen"
        component={SeeAllScreen}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
