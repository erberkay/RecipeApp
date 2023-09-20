import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';

import useAuth from '../utility/Auth';

function AppNavigator() {
  return (
    <NavigationContainer>
        {
            !useAuth().isLoggedIn() ? <AuthNavigator/> : <RootNavigator/>
        }
    </NavigationContainer>
  );
}

export default AppNavigator;
