import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from './screens/HomeScreen.js'
import  SecondPage  from './screens/SecondPage.js';
import  ColorPalette  from './screens/ColorPalette.js';
import AddNewPaletteModal from './screens/AddNewPaletteModal.js'

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = ()=> {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="ColorPalette" component={ColorPalette} options={({ route }) => ({ title: route.params.paletteName })} />
    </MainStack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <RootStack.Navigator mode='modal'>
          <RootStack.Screen 
            name='MainStackScreen' 
            component={MainStackScreen} 
            // this one makes sure it says Home and Color Palette
            // instead of 'MainStackScreen'
            options={{ headerShown: false }}
          />
          <RootStack.Screen name='AddNewPalette' component={ AddNewPaletteModal } />
        </RootStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
