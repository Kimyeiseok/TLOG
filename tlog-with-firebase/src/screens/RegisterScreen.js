import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import DisabledButton from '../components/DisabledButton';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';
import { theme } from '../core/theme';
import {
  emailValidator,
  passwordValidator,
  password2Validator,
  nameValidator,
} from '../core/utils';
import {authService} from '../../fbase'




const RegisterScreen = ({ navigation }) => {

  const [fbmessage, setFbmessage] = useState('');
  const [isAuthWaiting, setIsAuthWaiting] = useState(false);

  const showFbmessageOnToast = () =>{
      setFbmessage('이미 사용중인 이메일');
      setTimeout(
        () => { setFbmessage('');
              setIsAuthWaiting(prev=>(!prev));
              },2300)
        }

  const authFirebase = async () => {
    setIsAuthWaiting(prev=>(!prev));
    try{
      await authService.createUserWithEmailAndPassword(email.value, password.value);
      navigation.navigate('Dashboard');
    }catch(e){
     console.log(e.message);
     showFbmessageOnToast();      
    }
}


  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [password2, setPassword2] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {  
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const password2Error = password2Validator(password.value, password2.value);
    
    if (emailError || passwordError ||password2Error || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setPassword2({ ...password2, error: password2Error });
      return;
    }else{
      authFirebase();
    } 
  };
 


  return (
    <Background>

            
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
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
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

        <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={password2.value}
        onChangeText={text => setPassword2({ value: text, error: '' })}
        error={!!password2.error}
        errorText={password2.error}
        secureTextEntry
      />

     <Toast isToastOn={fbmessage ? true : false} message={fbmessage} />
     {isAuthWaiting?  <DisabledButton mode="contained">Sign Up</DisabledButton>:
                    <Button mode="contained" onPress={_onSignUpPressed}>
                    Sign Up
                    </Button>
       }

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>


    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
