import React, { memo, useState, useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import DisabledButton from '../components/DisabledButton';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { authService } from '../../fbase';


const LoginScreen = ({ navigation }) => {


  const [fbmessage, setFbmessage] = useState('');
  const [isAuthWaiting, setIsAuthWaiting] = useState(false);

  const showFbmessageOnToast = () =>{
      setFbmessage('이메일 또는 패스워드가 틀립니다');
     setTimeout(
        () => { setFbmessage('');
              setIsAuthWaiting(prev=>(!prev));
              },2300)
        }


  const authFirebase = async () => {
    setIsAuthWaiting(prev=>(!prev));
    try {
      await authService.signInWithEmailAndPassword(email.value, password.value);
      navigation.navigate('DrawerNavigation');
    } catch (e) {
      console.log(e.message);
      showFbmessageOnToast();
    }
  };

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    } else authFirebase();
  };

  return (
    <Background>   
      <Toast isToastOn={fbmessage ? true : false} message={fbmessage} />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      

      {isAuthWaiting?  <DisabledButton mode="contained">Login</DisabledButton>:
                    <Button mode="contained" onPress={_onLoginPressed}>
                    Login
                    </Button>
       }


      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      
  
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

});

export default LoginScreen;
