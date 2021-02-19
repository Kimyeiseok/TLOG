import React from 'react';
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

import { AntDesign } from '@expo/vector-icons'; 

export const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{ paddingTop: 0, marginTop: 0 }}>
      <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                  <View style={{ flexDirection: 'row', marginTop: 50, marginBottom:15 }}>
                          <Avatar.Image
                            source={{
                              uri:
                                'https://res.cloudinary.com/ruksa/image/upload/v1587470607/profile/pic012_kdiyqt.jpg',
                            }}
                            size={50}
                          />
                          <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Text style={styles.title}>Rukmoni</Text>
                            <Caption style={styles.caption}>xxxx@naver.com</Caption>
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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
  row: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
