import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Eye from '../../../../assets/icons/Show.svg';
import FB from '../../../../assets/icons/fb.svg';
import Google from '../../../../assets/icons/google.svg';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

export default function SignUp({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.top}>
        <View style={styles.cardFlexContainer}>
          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require('../../../../assets/images/signup/topleft.png')}
            />
          </View>
          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require('../../../../assets/images/signup/topright.png')}
            />
          </View>
          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require('../../../../assets/images/signup/bottomleft.png')}
            />
          </View>
          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require('../../../../assets/images/signup/bottomright.png')}
            />
          </View>
        </View>
        <View style={styles.overlayContainer}>
          <Image
            style={styles.background}
            source={require('../../../../assets/images/boarding/background.png')}
          />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.topText}>WELCOME</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={'#BDBDBD'}
            
          />
          <View style={styles.passwordContainer}>
            <TextInput
              onChangeText={(text) => console.log(text)}
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={'#BDBDBD'}
            />
            <Eye style={styles.eye} />
          </View>
          <Text style={styles.forgotPass}>FORGOT PASSWORD</Text>
          <LinearGradient
            style={styles.loginButton}
            colors={['#5151C6', '#888BF4']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Homestack')}>
              <Text style={styles.loginText}>LOG IN</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.orText}>OR LOGIN BY</Text>
          <View style={styles.iconContainer}>
            <Google />
            <FB  />
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.account}>Don't have account?</Text>
            <Text style={styles.signText}>SIGN UP</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {},
  top: {
    position: 'relative',
    height: 300,
  },
  cardFlexContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
  },
  cardContainer: {
    width: '50%',
  },
  image: {
    width: '100%',
  },
  overlayContainer: {
    width,
    height: 300,
    opacity: 0.6,
    position: 'absolute',
    // backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: width,
    width: 300,
    transform: [{rotate: '270deg'}, {scaleY: -1}],
  },
  welcomeContainer: {
    alignItems: 'center',
    top: 120,
  },
  topText: {
    fontSize: 38,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    letterSpacing: 4,
  },
  bottom: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 510,
    backgroundColor: '#fff',
    paddingVertical: 40,
    marginTop: -30,
    // position: "absolute",
    // top: 275,
    // right: 0,
    // left:0,
  },
  formContainer: {
    width: width - 50,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#ECEDEE',
    // color: '#fff',
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
  orText:
  {
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: "#606060",
    },
  iconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    marginTop: 10,
  },
  bottomText: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
    gap: 2,
  },
  account: {
    letterSpacing: -0.2,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: "#606060",
  },
  signText: {
    letterSpacing: -0.2,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: "#5252C7",
    
  },
});
