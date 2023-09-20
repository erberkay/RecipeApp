import React from 'react';
import { View, Text, Button } from 'react-native';

import useAuth from '../utility/Auth';

function LoginScreen({ navigation }) {
  
  const { Login, Register, isLoggedIn, getUser } = useAuth();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LoginScreen</Text>
      <Button 
        title="Go to HomeScreen" 
        onPress={() => {
          Login('emre2', '123')
        }} 
      />
    </View>
  );
}

export default LoginScreen;
