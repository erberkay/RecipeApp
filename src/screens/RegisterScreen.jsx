import React from 'react';
import { View, Text, Button } from 'react-native';

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>RegisterScreen</Text>
      <Button title="Go to LoginScreen" onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
}

export default RegisterScreen;
