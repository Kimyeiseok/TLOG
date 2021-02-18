import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';


const AuthHome = ({ navigation }) => {

  return(
 <Background>
    <Logo />
    <Header>TLOG!</Header>

    <Paragraph>
      The easiest way to start with your taekwondo match.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('Login')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('Register')}
    >
      Sign Up
    </Button>
  </Background>

  )
};

export default memo(AuthHome);
