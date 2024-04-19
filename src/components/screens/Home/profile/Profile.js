import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Edit from '../../../../assets/icons/EditSquareB.svg';
import Arrow from '../../../../assets/icons/arrow.svg';
import Logout from '../../../../assets/icons/Logout.svg';

const {width, height} = Dimensions.get('screen');

export default function Profile({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../../assets/images/user/DarkBackground.png')}
        style={styles.backG}>
        <View style={styles.wrapper}>
          <View style={styles.top}>
            <View style={styles.overlay}></View>
            <View style={styles.profile}>
              <Image
                source={require('../../../../assets/images/user/Avatar.png')}
              />
              <View style={styles.details}>
                <Text style={styles.name}>Bruno Pham</Text>
                <Text style={styles.email}>thanhphamdhbk@gmail.com</Text>
              </View>
              <TouchableOpacity onPress={()=> navigation.navigate("EditProfile")}><Edit height={20} width={20} /></TouchableOpacity>
            </View>
          </View>
          <View style={styles.middle}>
            <View style={styles.items}>
              <View style={styles.itemOverlay}></View>
              <TouchableOpacity style={styles.socialC}>
                <Text style={styles.social}>Email</Text>
                <Arrow />
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <View style={styles.itemOverlay}></View>
              <TouchableOpacity style={styles.socialC}>
                <Text style={styles.social}>Instagram</Text>
                <Arrow />
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <View style={styles.itemOverlay}></View>
              <TouchableOpacity style={styles.socialC}>
                <Text style={styles.social}>Twitter</Text>
                <Arrow />
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <View style={styles.itemOverlay}></View>
              <TouchableOpacity style={styles.socialC}>
                <Text style={styles.social}>Website</Text>
                <Arrow />
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <View style={styles.itemOverlay}></View>
              <TouchableOpacity style={styles.socialC}>
                <Text style={styles.social}>Paypal</Text>
                <Arrow />
              </TouchableOpacity>
            </View><View style={styles.items}>
              <View style={styles.itemOverlay}></View>
              <TouchableOpacity style={styles.socialC}>
                <Text style={styles.social}>Change password</Text>
                <Arrow />
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <View style={styles.itemOverlay}></View>
              <TouchableOpacity style={styles.socialC}>
                <Text style={styles.social}>About i.click</Text>
                <Arrow />
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <View style={styles.itemOverlay}></View>
              <TouchableOpacity style={styles.socialC}>
                <Text style={styles.social}>Terms & privacy</Text>
                <Arrow />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.signoutB}>
            <Logout />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backG: {
    height: height,
  },
  wrapper: {
    paddingTop: 20,
  },
  top: {},
  overlay: {
    width: width - 40,
    alignSelf: 'center',
    height: 88,
    position: 'absolute',
    backgroundColor: '#fff',
    opacity: 0.15,
    borderRadius: 10,
  },
  profile: {
    alignSelf: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 14,
  },
  details: {
    marginRight: 40,
    paddingVertical: 8,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    lineHeight: 19,
    letterSpacing: -0.1,
  },
  email: {
    color: '#c0c0c0c0',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  middle: {
    marginTop: 20,
    gap: 16,
  },
  items: {
    width: width / 1.5,
    height: width / 9.2,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
  },
  itemOverlay: {
    position: 'absolute',
    width: width / 1.5,
    height: width / 9.2,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#fff',
    opacity: 0.2,
  },
  socialC: {
    paddingVertical: 6,
    paddingRight: 6,
    paddingLeft: 20,
    width: width / 1.5,
    height: width / 9.2,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  social: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  signoutB: {
    marginTop: 30,
    marginLeft: 20,
    paddingTop: 7,
    paddingBottom: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignSelf: 'baseline',
    gap: 4,
    borderRadius: 30,
    borderWidth: 1,
  },
  logoutText: {
    fontSize: 14,
    color: '#333333',
    fontFamily: 'Poppins-Regular',
  },
});
