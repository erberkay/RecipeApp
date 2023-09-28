import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet, TextInput, Image } from 'react-native';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage'
import useAuth from '../utility/Auth';
import PlusIcon from '../assets/icons/PlusIcon';
import MenuIcon from '../assets/icons/MenuIcon';
import FilterIcon from '../assets/icons/FilterIcon';
import SearchIcon from '../assets/icons/SearchIcon';
import FavoriteIcon from '../assets/icons/FavoriteIcon';
import NotFavoriteIcon from '../assets/icons/NotFavoriteIcon';
import TimeIcon from '../assets/icons/TimeIcon';
import { auth } from '../utility/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

const MMKV = new MMKVLoader().initialize()

const SeeAllScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Today’s Fresh Recipe</Text>
        <TouchableOpacity style={styles.headerButton}>
          {/* İçerik buraya gelicek */}
        </TouchableOpacity>
        <TextInput style={styles.searchInput} />
        
      </View>
      
      <View style={styles.flatListContainer}>
        <FlatList
          
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", 
  },
  header: {
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: "flex-start",
    padding: 16,
    
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', 
    
  },
  
  headerButton: {
    
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius:10,
    width:250,
    marginTop:10,
    alignItems:"center",
    width:256,
    height:60
    
    
  },
  searchInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    width:200,
    marginTop:10,

    
  },
  flatListContainer: {
    flex: 1,
    padding: 16,
  },
});

export default SeeAllScreen;
