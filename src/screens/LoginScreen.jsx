import React from 'react';
import { View, Text, Button } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LoginScreen</Text>
      <Button title="Go to HomeScreen" onPress={() => navigation.navigate('RegisterScreen')} />
    </View>
  );
}

export default LoginScreen;
