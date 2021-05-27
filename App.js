import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import WelComeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const { Navigator, Screen } = createStackNavigator();

const Root = () => (
  <Navigator >
    <Screen options={{ŧitle: "Home page", headerStyle: {borderWidth:3,borderColor: "orange"}}} name="Home" component={HomeScreen} />
    <Screen name="Profil" component={ProfileScreen} />
  </Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
            title: "Welcome page",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}>
        <Screen
          name="Welcome"
          component={WelComeScreen}
        />
        <Screen options={{
            title: "Login page",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: null
          }} name="Login" component={LoginScreen} />
          <Screen options={{headerShown: false}} name="Root" component={Root} />
      </Navigator>
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
