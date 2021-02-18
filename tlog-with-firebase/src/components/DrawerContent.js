import React, { memo, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { authService, storeService } from '../../fbase';
import { AntDesign } from '@expo/vector-icons'; 


export const DrawerContent = ({ navigation }) => {

 const [photoURL, setPhotoURL] = useState('');
 const [mail, setMail] = useState('');
 const [name, setName] = useState('');

 useEffect(() => {
      let docRef = storeService.collection("users").doc("vsknJ9ioYSQERRuEUy4FB3bbccP2");
      docRef.get().then(function(doc) {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              setPhotoURL(doc.data().image)
              setMail(doc.data().mail)
              setName(doc.data().name)
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      }); 
    }, []);


  

  return (
    <DrawerContentScrollView
      contentContainerStyle={{ paddingTop: 0, marginTop: 0 }}>
      <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                  <View style={{ flexDirection: 'row', marginTop: 50, marginBottom:15 }}>
                          <Avatar.Image
                            source={{uri: photoURL,}}
                            size={50}
                          />
                          <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Text style={styles.title}>{name}</Text>
                            <Caption style={styles.caption}>{mail}</Caption>
                          </View>
                  </View>
            </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
             <AntDesign name="plus" size={size} color={color} />
            )}
            label="그룹만들기"
             onPress={() => navigation.navigate('FriendListScreen')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <AntDesign name="staro" size={24} color={color} />
            )}
            label="친구목록"
            onPress={() => navigation.navigate('FriendListScreen')}
          />
          <DrawerItem
            icon={({ color, size }) => (
             <AntDesign name="team" size={size} color={color} />
            )}
            label="유저목록"
            onPress={() => navigation.navigate('UserListScreen')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            )}
            label="설정"
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: '#150F28',
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    color: '#fff',
    fontWeight: 'bold',
  },
  caption: {
    color: '#fff',
    fontSize: 12,
  },
  drawerSection: {
    marginTop: 15,
  },
});
