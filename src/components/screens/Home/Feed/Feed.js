import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowL from '../../../../assets/icons/arrow-left1.svg';
import Plus from '../../../../assets/icons/plus-circle2.svg';
import LikeBig from '../../../../assets/icons/heart2.svg';
import Upload from '../../../../assets/icons/Upload.svg';
import Like from '../../../../assets/icons/blike.svg';
import Comment from '../../../../assets/icons/Chat.svg';
import Eye from '../../../../assets/icons/eye.svg';
const {width, height} = Dimensions.get('screen');

export default function Feed({route, navigation}) {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.left}
          onPress={() => navigation.navigate('Homestack')}>
          <ArrowL />
        </TouchableOpacity>
        <View style={styles.right}>
          <TouchableOpacity>
            <LikeBig />
          </TouchableOpacity>
          <TouchableOpacity>
            <Plus />
          </TouchableOpacity>
          <TouchableOpacity>
            <Upload />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.feedContainer}>
          <View style={styles.top}>
            <View style={styles.left}>
              <Image source={item.profile_pic} />
              <Text style={styles.phamText}>{item.profile_name}</Text>
            </View>
            <Text style={styles.timeText}>{item.posted_at}</Text>
          </View>
          <View style={styles.ImageC}>
            <Image source={item.image} style={styles.pro} />
          </View>
          <View style={styles.bottom}>
            <View style={styles.commentC}>
              <Text style={styles.clText}>{item.views}</Text>
              <Eye />
            </View>
            <View style={styles.commentC}>
              <Text style={styles.clText}>{item.comment}</Text>
              <Comment />
            </View>
            <View style={styles.likeC}>
              <Text style={styles.clText}>{item.like}</Text>
              <Like />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 10,
    width: width - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {},
  right: {
    flexDirection: 'row',
    gap: 10,
  },
  feedContainer: {},
  top: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  phamText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#242424',
    letterSpacing: -0.2,
    lineHeight: 24,
  },
  timeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#BDBDBD',
    letterSpacing: -0.1,
    lineHeight: 21,
  },
  ImageC: {},
  pro: {
    width: '100%',
  },
  bottom: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  commentC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
  clText: {},
  likeC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
  // header: {},
  // header: {},
  // header: {},
  // header: {},
  // header: {},
});
