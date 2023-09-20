import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="RegisterScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
