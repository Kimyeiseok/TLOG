import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContent } from './components/DrawerContent';

import {
  AuthHome,
  LoginScreen,
  RegisterScreen,
  Dashboard,
  ForgotPasswordScreen,
  FriendListScreen,
  UserListScreen,
  RoomListScreen,
} from './screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = ({ isSignedin }) => {
  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator
        initialRouteName="RoomListScreen"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="RoomListScreen" component={RoomListScreen} />
        <Drawer.Screen name="FriendListScreen" component={FriendListScreen} />
        <Drawer.Screen name="UserListScreen" component={UserListScreen} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    );
  };

  const StackNavigation = () => {
    return (
      <Stack.Navigator initialRouteName="AuthHome">
        <Stack.Screen
          name="AuthHome"
          component={AuthHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isSignedin ? <DrawerNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
};

export default Router;
