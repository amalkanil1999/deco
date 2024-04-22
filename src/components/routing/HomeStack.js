import { StyleSheet, Text, View , Image , Dimensions,} from 'react-native'
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
import UserStack from './UserStack';


const {width, height} = Dimensions.get('screen');

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
          iconPath = <View style={styles.plusButtonContainer}>
          <Plus style={styles.plusIcon} />
          <View style={styles.bottomHalfBorder} />
        </View>
         
        } 
        else if (route.name === 'Notification') {
          iconPath = focused
          ? <NotificationFocused style={styles.iconStyle} />
          : <NotificationI style={styles.iconStyle} />
            
        } else if (route.name === 'UserStack') {
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
        height: width/4.94,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // backgroundColor: "transparent",
      }
    })} initialRouteName='Home'
      
    >
      <Tab.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false}} name="Discover" component={Discover} />
      <Tab.Screen options={{ headerShown: false}} name="Add" component={Add} />
      <Tab.Screen options={{ headerShown: false}} name="Notification" component={Notification} />
      <Tab.Screen options={{ headerShown: false}} name="UserStack" component={UserStack} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    marginBottom: 20,
  },
  plusButtonContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: width/5,
  },
  plusIcon: {
    zIndex: 2,
  },
  bottomHalfBorder: {
    position: 'absolute',
    bottom: -5,
    height: width/11,
    width: width/5.3,
    borderBottomLeftRadius:  50,
    borderBottomRightRadius:  50,
    backgroundColor: '#e0e0e0',
    zIndex: 1,
  },
})