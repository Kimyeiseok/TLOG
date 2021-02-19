import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import {authService} from '../../fbase'
import {  Snackbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const FridnsList = ({ navigation }) => {

  const onLogOutClick = async () => {
    await authService.signOut();
    navigation.navigate('HomeScreen')
  };


  return(
    <Background>
    <BackButton goBack={() => navigation.navigate('RoomListScreen')} />
    <Logo />
    <Header>FridnsList</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={onLogOutClick}>
      Logout
    </Button>
  </Background>
  )
  
};



export default memo(FridnsList);
