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

const MMKV = new MMKVLoader().initialize()

const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useMMKVStorage('testRecipes', MMKV, [])

  const { SignOut, getUser } = useAuth();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity>
          <PlusIcon/>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity>
          <MenuIcon/>
        </TouchableOpacity>
      )
    })

    if (recipes.length == 0) {
      setRecipes([
        {
          favorite: true,
          image: require('../assets/images/toast_with_berries.png'),
          category: 'breakfast',
          name: 'Toast with Berries',
          time: '10:00',
          rating: '4.5',
        },
        {
          favorite: false,
          image: require('../assets/images/chicken_burger.png'),
          category: 'dinner',
          name: 'Chicken Burger',
          time: '20:00',
          rating: '4.3',
        },
        {
          favorite: false,
          image: require('../assets/images/chocalate_cake.png'),
          category: 'desert',
          name: 'Chocolate Cake',
          time: '30:00',
          rating: '3.8',
        },
        {
          favorite: false,
          image: require('../assets/images/cup_cake.png'),
          category: 'desert',
          name: 'Cup Cake',
          time: '10:00',
          rating: '4.7',
        },
      ])
    }
  }, [])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.rowFlexMarginEight}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.usernameText}>
          {' ' + getUser().username.charAt(0).toUpperCase() + getUser().username.slice(1)}
          {
            // Capitalized first character of the name.
          }
        </Text> 
      </View>
      <Text style={{...styles.usernameText, fontSize: 40, marginTop: 8,}}>
        What would you like to cook today?
      </Text>
      <View style={styles.rowFlexMarginEight}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.search}
            placeholder='Search Recipe'
            placeholderTextColor={'white'}
          />
          <SearchIcon/>
        </View>
        <TouchableOpacity
          style={styles.filterWrapper}
        >
          <FilterIcon/>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{...styles.rowFlexMarginEight, justifyContent: 'space-between'}}>
          <Text style={styles.lineText}>Today's Fresh Recipe</Text>
          <TouchableOpacity>
            <Text style={styles.linePressableText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.todaysFlatList}
          horizontal
          data={recipes}
          removeClippedSubviews={false}
          renderItem={recipe => {
            return (
              <View style={styles.horizontalCard}>
                <View style={styles.upperCardContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setRecipes([
                        ...recipes.slice(0, recipe.index), 
                        {
                          favorite: !recipe.item.favorite,
                          image: recipe.item.image,
                          category: recipe.item.category,
                          name: recipe.item.name,
                          time: recipe.item.time,
                          rating: recipe.item.rating,
                        },
                        ...recipes.slice(recipe.index + 1)
                      ])
                    }}
                  >
                    {recipe.item.favorite ? <FavoriteIcon/> : <NotFavoriteIcon/>}
                  </TouchableOpacity>
                  <Image source={recipe.item.image}/>
                </View>
                <Text style={styles.categoryText}>{recipe.item.category.charAt(0).toUpperCase() + recipe.item.category.slice(1)}</Text>
                <Text style={styles.nameText}>{recipe.item.name}</Text>
                <View style={styles.rowFlexMarginEight}>
                  <TimeIcon/>
                  <Text style={styles.timeText}>{recipe.item.time}</Text>
                </View>
                <Text style={styles.nameText}>{recipe.item.rating}/5</Text>
              </View>
            )
          }}
        />
      </View>
      <View>
        <View style={{...styles.rowFlexMarginEight, justifyContent: 'space-between'}}>
          <Text style={styles.lineText}>Recommended</Text>
          <TouchableOpacity>
            <Text style={styles.linePressableText}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    overflow: 'visible'
  },
  contentContainer: {
    paddingHorizontal: 24,
    overflow: 'visible'
  },
  rowFlexMarginEight: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center'
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  usernameText: {
    color: '#FF6B00',
    fontSize: 24,
    fontWeight: '600',
  },
  searchWrapper: {
    flex: 1,
    borderColor: 'white', 
    borderWidth: 1, 
    borderRadius: 8, 
    height: 40,
    marginRight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  search: {
    flex: 1,
    height: 40,
    color: 'white',
  },
  filterWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    width: 40,
    height: 40,
  },
  lineText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  linePressableText: {
    color: '#FF6B00',
    fontSize: 16,
    fontWeight: '400',
  },
  todaysFlatList: {
    marginTop: 8,
    overflow: 'visible'
  },
  horizontalCard: {
    width: 168,
    height: 224,
    backgroundColor: '#373737',
    borderRadius: 20,
    paddingLeft: 16,
    paddingTop: 16,
    marginRight: 8,
  },
  upperCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 112,
  },
  categoryText: {
    color: '#2958FF',
    fontSize: 12,
  },
  nameText: {
    color: 'white',
    fontSize: 16,
  },
  timeText: {
    color: '#FF6B00',
    marginLeft: 8,
  },

})

export default HomeScreen;
