import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';
import { auth } from '../utility/firebase';
import useAuth from '../utility/Auth';

const AppNavigator = () => {
  const [user,setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user =>{
      setUser(user)
    })
    return subscriber
  },[])
  
  const { isLoggedIn } = useAuth();
  
  return (
    <NavigationContainer>
        {
            user ? <RootNavigator/> : <AuthNavigator/>
        }
    </NavigationContainer>
  );
}

export default AppNavigator;
