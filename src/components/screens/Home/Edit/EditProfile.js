import { Image, ImageBackground,Modal, SafeAreaView, Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import Arrow from "../../../../assets/icons/arrow-leftB.svg"
import Cam from "../../../../assets/icons/camera.svg"


const {width, height} = Dimensions.get('screen');

export default function User({navigation}) {
  const [selected, setSelected] = useState(1);


  return (
    <SafeAreaView style={{backgroundColor: "#fff"}}>
      <ImageBackground style={styles.backG} resizeMode="stretch" source={require("../../../../assets/images/user/background.png")} >
        <View style={styles.setting}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}><Arrow /></TouchableOpacity>
          <Text style={styles.atText}>Edit profile</Text>
        </View>
              <Image style={styles.propic} source={require('../../../../assets/images/edit/avatar.png')} />
              <TouchableOpacity style={styles.camera}><Cam  /></TouchableOpacity>
          </ImageBackground>
          <View style={styles.form}>
              
          </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  backG: {
    height: undefined,
    aspectRatio: 375 / 100,
  },
  setting: {
    width: width / 1.45,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  atText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 26,
    color:"#fff",
  },
  propic: {
    alignSelf: 'center',
  },
    camera: {
        position: 'absolute',
        right: "36%",
        bottom: -50,
  } ,
})