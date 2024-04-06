import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from "../../assets/icons/bottomTab/Home.svg"
import Category from "../../assets/icons/bottomTab/Category.svg"
import NotificationI from "../../assets/icons/bottomTab/Notification.svg"
import Profile from "../../assets/icons/bottomTab/Profile.svg"
import HomeFocused from "../../assets/icons/bottomTab/selectedhome.svg"
import CategoryFocused from "../../assets/icons/bottomTab/selectedcategory.svg"
import ProfileFocused from "../../assets/icons/bottomTab/selectedprofile.svg"
import NotificationFocused from "../../assets/icons/bottomTab/selectednoti.svg"
import Plus from "../../assets/icons/bottomTab/Plus.svg"
import HomeScreen from '../screens/Home/HomeSCreen/HomeScreen';
import Feed from '../screens/Home/Feed/Feed';
import Discover from '../screens/Home/Discover/Discover';
import User from '../screens/Home/User/User';
import Add from '../screens/Home/Add/Add';
import CustomTabBarButton from "../includes/CustomTabBarButton"
import Notification from '../screens/Home/Notification/Notification';


const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({ focused }) => {
        let iconPath;
        if (route.name === 'Home') {
          iconPath = focused
            ? <HomeFocused style={styles.iconStyle} />
            : <Home style={styles.iconStyle} />
        } else if (route.name === 'Discover') {
          iconPath = focused
            ? <CategoryFocused style={styles.iconStyle} />
            : <Category style={styles.iconStyle}  />
        }
        else if (route.name === 'Add') {
          iconPath = focused
            ? <Plus style={styles.plusButton} />
          : <Plus style={styles.plusButton}  />
            
        } 
        else if (route.name === 'Notification') {
          iconPath = focused
          ? <NotificationFocused style={styles.iconStyle} />
          : <NotificationI style={styles.iconStyle} />
            
        } else if (route.name === 'User') {
          iconPath = focused
          ? <ProfileFocused style={styles.iconStyle}  />
          : <Profile style={styles.iconStyle}  />
        }
        return iconPath
      },
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 80,
        
      }
    })} initialRouteName='Home'
      
    >
      <Tab.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false}} name="Discover" component={Discover} />
      <Tab.Screen options={{ headerShown: false}} name="Add" component={Add} />
      <Tab.Screen options={{ headerShown: false}} name="Notification" component={Notification} />
      <Tab.Screen options={{ headerShown: false}} name="User" component={User} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    marginBottom: 20,
  },
  plusButton: {
    position: 'absolute',
    bottom: 50,
  },
})