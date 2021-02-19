import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Background from '../components/Background';
import { Appbar } from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function RoomListScreen({ navigation }) {
  return (
    <Appbar.Header style={{backgroundColor:'#150F28'}}>  
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()}  />    
      <Appbar.Content title="TLOG" />
      <Appbar.Action icon="magnify" onPress={()=>{}} />
    </Appbar.Header>
  );
}


export default RoomListScreen
