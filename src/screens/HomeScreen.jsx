import React from 'react';
import { View, Text, Button } from 'react-native';

import useAuth from '../utility/Auth';

function HomeScreen({ navigation }) {

  const { SignOut } = useAuth();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title="Go to RegisterScreen" onPress={() => {
        SignOut()
      }} />
    </View>
  );
}

export default HomeScreen;
