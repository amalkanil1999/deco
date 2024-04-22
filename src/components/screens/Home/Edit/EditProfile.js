import {
  Image,
  ImageBackground,
  Modal,
  KeyboardAvoidingView,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Arrow from '../../../../assets/icons/arrow-leftB.svg';
import Cam from '../../../../assets/icons/camera.svg';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

export default function EditProfile({navigation}) {
  const [selected, setSelected] = useState(1);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  const saveForm = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('lastName', lastName);
      await AsyncStorage.setItem('email', email);
      navigation.navigate('User')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        style={styles.backG}
        resizeMode="stretch"
        source={require('../../../../assets/images/user/background.png')}>
        <View style={styles.setting}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.atText}>Edit profile</Text>
        </View>
        <Image
          style={styles.propic}
          source={require('../../../../assets/images/edit/avatar.png')}
        />
        <TouchableOpacity style={styles.camera}>
          <Cam />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.formContainer}>
        <View style={styles.inputC}>
          <View style={styles.labelC}>
            <Text style={styles.labelText}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
              placeholderTextColor={'#BDBDBD'}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.labelC}>
          <Text style={styles.labelText}>Last Name</Text>
          <TextInput
            onChangeText={text => console.log(text)}
            style={styles.textInput}
            placeholder="Last Name"
            placeholderTextColor={'#BDBDBD'}
              onChangeText={setLastName}
              value={lastName}
          />
          </View>
          <View style={styles.labelC}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            onChangeText={text => console.log(text)}
            style={styles.textInput}
            placeholder="brunopham@gmail.com"
              placeholderTextColor={'#BDBDBD'}
              keyboardType="email-address"
              maxLength={33}
              onChangeText={setEmail}
              value={email}
          />
          </View>
        </View>
        <TouchableOpacity onPress={saveForm}>
        <LinearGradient
          style={styles.loginButton}
          colors={['#5151C6', '#888BF4']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          
            <Text style={styles.loginText}>SAVE CHANGES</Text>
          
          </LinearGradient>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#fff',
    height: height,
  },
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
    color: '#fff',
  },
  propic: {
    alignSelf: 'center',
  },
  camera: {
    position: 'absolute',
    right: '36%',
    bottom: -50,
  },
  formContainer: {
    width: width - 50,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: width / 2.17,
    marginTop: width/4,
  },
  labelText: {
    fontSize: 16,
    color: "#242424",
    fontFamily: 'Poppins-Regular',
  },
  inputC: {
    gap: 30,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#ECEDEE',
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  eye: {
    position: 'absolute',
    right: 15,
  },
  forgotPass: {
    color: '#5252C7',
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  loginButton: {
    height: 52,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  loginText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    letterSpacing: 0.6,
    color: '#fff',
  },
});
