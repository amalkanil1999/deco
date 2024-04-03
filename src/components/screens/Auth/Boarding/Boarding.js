import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity, 
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const Boarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        style={styles.background}
        source={require('../../../../assets/images/boarding/background.png')}>
        <View style={styles.secondContainer}>
          <View style={styles.totalFlex}>
            <View style={styles.cardContainer}>
              <View>
                <Image
                  source={require('../../../../assets/images/boarding/rectangle.png')}
                />
              </View>
              <View style={[styles.flexTop, styles.top]}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/images/boarding/topimage.png')}
                  />
                </View>
              </View>
              <View style={styles.flexMiddle}>
                <View style={styles.imageContainerMiddle}>
                  <Image
                    style={styles.imageMiddle}
                    source={require('../../../../assets/images/boarding/middlel.png')}
                  />
                </View>
                <View style={styles.imageContainerMiddle}>
                  <Image
                    style={styles.imageMiddle}
                    source={require('../../../../assets/images/boarding/middler.png')}
                  />
                </View>
              </View>
              <View style={[styles.flexTop, styles.bottom]}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/images/boarding/bottomimage.png')}
                  />
                </View>
              </View>
              <View style={styles.rectangle}>
                <Image
                  source={require('../../../../assets/images/boarding/rectangle.png')}
                />
              </View>
            </View>
            <View style={styles.textCont}><Text style={styles.text}>SHARE - INSPIRE - CONNECT</Text></View>
            <TouchableOpacity onPress={()=> navigation.navigate('Signup')} style={styles.button}><Text style={styles.buttonText}>GET STARTED</Text></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Boarding;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  secondContainer: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 10,
    // backgroundColor: "#fff",
  },
  totalFlex: {
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    position: 'relative',
    height: 450,
    // backgroundColor: "#000",
  },
  flexTop: {
    alignSelf: 'center',
    position: 'absolute',
    // bottom: 0,
    // top: 0,
    zIndex: 1,
  },
  top: {
    top: 45,
  },
  bottom: {
    top: 265,
  },
  flexMiddle: {
    flexDirection: 'row',
    position: 'absolute',
    top: 160,
    gap: 65,
  },
  imageContainer: {
    width: 140,
    height: 140,
    overflow: 'hidden',
    backgroundColor: '#000',
    transform: [{rotate: '45deg'}],
    borderRadius: 12,
  },
  image: {
    width: 192,
    height: 192,
    borderRadius: 15,
    transform: [{rotate: '-45deg'}],
    position: 'absolute',
    bottom: -26,
    left: -25,
  },
  imageContainerMiddle: {
    width: 130,
    height: 130,
    overflow: 'hidden',
    backgroundColor: '#000',
    transform: [{rotate: '45deg'}],
    borderRadius: 12,
  },
  imageMiddle: {
    width: 176,
    height: 176,
    borderRadius: 15,
    transform: [{rotate: '-45deg'}],
    position: 'absolute',
    bottom: -23,
    left: -24,
  },
  rectangle: {
    top: 179,
    zIndex: 0,
    transform: [{ scaleX: -1}]
  },
  textCont: {
    marginVertical: 30,
  },
  text: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1,
  },
  button : {
    backgroundColor: "#4F4F4F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 22,
    cursor: 'pointer',
  },
  buttonText: {
    color: "#D0D0D0",
    fontFamily: "Poppins-Bold",
  },
});
