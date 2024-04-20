import { Image, ImageBackground,Modal, SafeAreaView, Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import Setting from "../../../../assets/icons/Setting.svg"
import Fb from  "../../../../assets/icons/facebook1.svg"
import Insta from  "../../../../assets/icons/insta.svg"
import Globe from  "../../../../assets/icons/globe1.svg"
import Shots from './_components/Shots'
import Collection from './_components/Collection'


const {width, height} = Dimensions.get('screen');

export default function User({navigation}) {
  const [selected, setSelected] = useState(1);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    lastName: ''
  });

  useFocusEffect(
    React.useCallback(() => {
      const retrieveProfileData = async () => {
        try {
          const storedName = await AsyncStorage.getItem('name');
          const storedEmail = await AsyncStorage.getItem('email');
          const storedLastName = await AsyncStorage.getItem('lastName');
  
          const defaultName = 'Bruno';
          const defaultEmail = 'thanhphamdhbk@gmail.com';
          const defaultLastName = 'Pham ';
  
          const name = storedName || defaultName;
          const email = storedEmail || defaultEmail;
          const lastName = storedLastName || defaultLastName;
  
          setProfileData({ name, email, lastName });
        } catch (error) {
          console.error('Error retrieving profile data:', error);
        }
      };
  
      retrieveProfileData();
    }, [])
  );

  const { name, email, lastName } = profileData

  const renderContent = () => {
    if (selected === 1) {
      
      return (
        <Shots />
      );
    } else {
      
      return (
        <Collection />
      );
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: "#fff"}}>
      <ImageBackground style={styles.backG} resizeMode="stretch" source={require("../../../../assets/images/user/background.png")} >
        <View style={styles.setting}>
          <Text style={styles.atText}>@brunopham</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}><Setting /></TouchableOpacity>
          
        </View>
        <Image style={styles.propic} source={require("../../../../assets/images/user/propic.png")} />
      </ImageBackground>
      <View style={styles.profile}>
        <View style={styles.details}>
          <Text style={styles.name}>{name} {lastName}</Text>
          <Text style={styles.place}>Da nang, Vietnam</Text>
        </View>
        <View style={styles.followTab}>
          <Text style={styles.follow}><Text style={styles.bold}>220 </Text>Followers</Text>
          <Text style={styles.follow}><Text style={styles.bold}>150 </Text>Following</Text>
        </View>
        <View style={styles.mediatab}>
          <TouchableOpacity><Globe /></TouchableOpacity>
          <View style={styles.roundD}></View>
          <TouchableOpacity><Insta /></TouchableOpacity>
          <View style={styles.roundD}></View>
          <TouchableOpacity><Fb /></TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setSelected(1)}
          style={
            selected == 1 ? styles.selectedButtonStyle : styles.buttonStyle
          }>
          <Text
            style={
              selected == 1 ? styles.selectedButtontext : styles.buttonText
            }>
            200 shots
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(2)}
          style={
            selected == 2 ? styles.selectedButtonStyle : styles.buttonStyle
          }>
          <Text
            style={
              selected == 2 ? styles.selectedButtontext : styles.buttonText
            }>
            10 collections
          </Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  backG: {
    height: undefined,
    aspectRatio: 375 / 100,
  },
  setting: {
    width: width / 1.5,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  atText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color:"#fff",
  },
  propic: {
    alignSelf: 'center',
  },
  profile: {
    width: width - 20,
    alignSelf: 'center',
    paddingTop: 55,
    paddingBottom: 15,
  },
  details: {
    alignItems: 'center',
    gap:6,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#242424',
  },
  place: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#8590a7',
    letterSpacing: -0.2,
    lineHeight: 24,
  },
  followTab: {
    borderRadius: 6,
    backgroundColor: "#F6F7F9",
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 48,
    marginVertical: 20,
  },
  follow: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 24,
    color: "#BDBDBD",
    gap: 10,
  },
  bold: {
    color: "#242424",
    fontFamily: 'Poppins-Bold',
  },
  mediatab: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    gap: 24,
  },
  roundD: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#5151C6',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    
  },
  buttonStyle: {
    height: 40,
    flex:1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButtonStyle: {
    height: 40,
    flex:1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ECEDEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#BDBDBD',
    fontFamily: 'Poppins-Medium',
    lineHeight:20,
  },
  selectedButtontext: {
    fontSize: 16,
    color: '#888BF4',
    fontFamily: "Poppins-Bold",
    lineHeight:20,
  },
  
  // bold: {},
})