import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { emailValidator } from '../core/utils';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Toast from '../components/Toast';
import { theme } from '../core/theme';
import Button from '../components/Button';
import DisabledButton from '../components/DisabledButton';
import { authService } from '../../fbase';

const ForgotPasswordScreen = ({ navigation }) => {
 
 

 const [fbmessage, setFbmessage] = useState('');
 const [isAuthWaiting, setIsAuthWaiting] = useState(false);
 const showFbmessageOnToast = (message) =>{
      setFbmessage(message);
      setTimeout(
          () => { setFbmessage('');
                setIsAuthWaiting(prev=>(!prev));
                navigation.navigate('Login')
                },2300)
        }

 const sendPasswordResetEmail = async() => {
        setIsAuthWaiting(prev=>(!prev));
        try {
          await authService.sendPasswordResetEmail(email.value);
          showFbmessageOnToast('이메일로 발송되었습니다.');
        } catch (e) {
          console.log(e.message);
          showFbmessageOnToast('존재하지않는 계정입니다.');
        }
  }

  const [email, setEmail] = useState({ value: '', error: '' });
  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    else { sendPasswordResetEmail();}

  };

  return (
    <Background>
    <BackButton goBack={() => navigation.navigate('RoomListScreen')} />
      <Toast isToastOn={fbmessage ? true : false} message={fbmessage} />
 
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />


       {isAuthWaiting?  <DisabledButton mode="contained">Send Reset Instructions</DisabledButton>:
                    <Button mode="contained" onPress={_onSendPressed} >
                    Send Reset Instructions
                    </Button>
       }

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
