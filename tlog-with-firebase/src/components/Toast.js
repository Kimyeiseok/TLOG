import  React, {useState, useEffect, memo} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

const Toast = ({isToastOn, message}) => {

 
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  useEffect(()=>{
    setVisible(isToastOn)
    console.log('useEffect is on')
    },[isToastOn]);

return(

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
       {message}
      </Snackbar>

)};

export default memo(Toast)