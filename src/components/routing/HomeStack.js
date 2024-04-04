import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../../assets/icons/bottomTab/Home.svg"
import Category from "../../assets/icons/bottomTab/Category.svg"
import Notification from "../../assets/icons/bottomTab/Notification.svg"
import Profile from "../../assets/icons/bottomTab/Profile.svg"
import Plus from "../../assets/icons/bottomTab/Plus.svg"
import HomeScreen from '../screens/Home/HomeSCreen/HomeScreen';
import Feed from '../screens/Home/Feed/Feed';
import Discover from '../screens/Home/Discover/Discover';
import User from '../screens/Home/User/User';


const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({ focused }) => {
        let iconPath;
        if (route.name === 'Home') {
          iconPath = focused
            ? <Home />
            : <Home />
        } else if (route.name === 'Feed') {
          iconPath = focused
            ? <Notification />
            : <Notification />
        } else if (route.name === 'Discover') {
          iconPath = focused
            ? <Profile />
            : <Profile />
        } else if (route.name === 'User') {
          iconPath = focused
            ? <Category />
            : <Category />
        }
        return iconPath
      },
    })} initialRouteName='Home'
    >
      <Tab.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false}} name="Feed" component={Feed} />
      <Tab.Screen options={{ headerShown: false}} name="Discover" component={Discover} />
      <Tab.Screen options={{ headerShown: false}} name="User" component={User} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})