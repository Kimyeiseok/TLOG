import React, { memo } from 'react';
import { Image, StyleSheet, Dimensions  } from 'react-native';

const deviceHeight = Dimensions.get('window').height;



const Logo = () => {
  return <Image source={require('../assets/logo.png')} style={styles.image} />

};

const styles = StyleSheet.create({
  image: {
    width: 128,
   height: deviceHeight/5,
    marginBottom: 12,
    marginTop : 30,
  },
});

export default memo(Logo);
