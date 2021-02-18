import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  HomeScreen,LoginScreen,RegisterScreen, Dashboard

} from './screens';

const Stack = createStackNavigator();

const Router = ({isSignedin}) =>{



return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName= {isSignedin? 'Dashboard':'HomeScreen'} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: true}} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: true}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
)

}


export default Router