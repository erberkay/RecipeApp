import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet, TextInput } from 'react-native';

import useAuth from '../utility/Auth';

const HomeScreen = ({ navigation }) => {

  const { SignOut } = useAuth();
  
  return (
    <ScrollView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({

})

export default HomeScreen;
