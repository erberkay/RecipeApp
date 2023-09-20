import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';

import useAuth from '../utility/Auth';

const AppNavigator = () => {
  
  const { isLoggedIn } = useAuth();
  
  return (
    <NavigationContainer>
        {
            isLoggedIn() ? <RootNavigator/> : <AuthNavigator/>
        }
    </NavigationContainer>
  );
}

export default AppNavigator;
