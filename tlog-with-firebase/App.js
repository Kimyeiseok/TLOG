import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-native-paper';
import Router from './src/Router';
import { theme } from './src/core/theme';
import { authService } from './fbase';

const Main = () => {
  const [init, setInit] = useState(false);
  const [isSignedin, setIsSignedin] = useState(false);

  
  const validateUserSignedin = async ()=>{
        authService.onAuthStateChanged((user) => {
        if (user) {
          setIsSignedin(true);
          console.log('(App.js)user is : ', user)
        } else {
          setIsSignedin(false);
        }
        setInit(true);
      });

  }


  useEffect(() => {
     validateUserSignedin();
      // authService.onAuthStateChanged((user) => {
      //   if (user) {
      //     setIsSignedin(true);
      //     console.log('(App.js)user is : ', user)
      //   } else {
      //     setIsSignedin(false);
      //   }
      //   setInit(true);
      // });
    }, []);

  return (
    <Provider theme={theme}>
      {init ? <Router isSignedin={isSignedin} /> : <></>}
    </Provider>
  );
};

export default Main;
