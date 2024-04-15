import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  Modal,
  Animated,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Share from 'react-native-share'

import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowL from '../../../../assets/icons/arrow-left1.svg';
import Plus from '../../../../assets/icons/plus-circle2.svg';
import LikeBig from '../../../../assets/icons/heart2.svg';
import Upload from '../../../../assets/icons/Upload.svg';
import Like from '../../../../assets/icons/blike.svg';
import Comment from '../../../../assets/icons/Chat.svg';
import Eye from '../../../../assets/icons/eye.svg';
import Edit from '../../../../assets/icons/EditSquare.svg';
import Vector from '../../../../assets/icons/Vector.svg';
import Post from '../../../../assets/icons/Post.svg';


const {width, height} = Dimensions.get('screen');

export default function Feed({route, navigation}) {
  const {item} = route.params;
  const [showModal, setShowModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedFocus, setSelectedFocus] = useState(false);
  const modalY = useRef(new Animated.Value(height)).current;
  const inputRef = useRef(null);
  const [liked, setLiked] = useState(false); 

  const sendTo = () => {
    const options = {
      title: item.heading,
      message: item.description,
    }
    Share.open(options)
      .then(
        res => console.log(res)
    )
    .catch(err => console.log(err))
}

  const handleLike = () => {
    setLiked(!liked); 
  };

  useEffect(() => {
    if (showModal && inputRef.current) {
      
      inputRef.current.focus();
    }
  }, [showModal]);

  const handleScroll = event => {
    const currentScrollPosition = event.nativeEvent.contentOffset.y;
    if (currentScrollPosition > scrollPosition) {
      setShowModal(true);
      Animated.timing(modalY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      setShowModal(false);
    }
    setScrollPosition(currentScrollPosition);
  };
  const close = () => {
    setShowModal(false);
  };
  const handleInputFocus = () => {
    setShowModal(true);
  };
  const comments = [
    {
      id: 1,
      profile_pic: require('../../../../assets/images/home/Avatar1.png'),
      comment: 'Great shot i Love IT !',
      time: '2 min ago',
    },
    {
      id: 2,
      profile_pic: require('../../../../assets/images/home/Avatar1.png'),
      comment: 'Great shot i Love IT !',
      time: '2 min ago',
    },
    {
      id: 3,
      profile_pic: require('../../../../assets/images/home/Avatar1.png'),
      comment: 'Great shot i Love IT !',
      time: '2 min ago',
    },
    {
      id: 4,
      profile_pic: require('../../../../assets/images/home/Avatar1.png'),
      comment: 'Great shot i Love IT !',
      time: '2 min ago',
    },
    {
      id: 5,
      profile_pic: require('../../../../assets/images/home/Avatar1.png'),
      comment: 'Great shot i Love IT !',
      time: '3 min ago',
    },
    {
      id: 6,
      profile_pic: require('../../../../assets/images/home/Avatar1.png'),
      comment: 'Great shot i Love IT !',
      time: '3 min ago',
    },
    {
      id: 7,
      profile_pic: require('../../../../assets/images/home/Avatar1.png'),
      comment: 'Great shot i Love IT !',
      time: '5 min ago',
    },
    {
      id: 8,
      profile_pic: require('../../../../assets/images/home/Avatar1.png'),
      comment: 'Great shot i Love IT !',
      time: '7 min ago',
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.left}
          onPress={() => navigation.navigate('Homestack')}>
          <ArrowL />
        </TouchableOpacity>
        <View style={styles.right}>
          <TouchableOpacity onPress={handleLike}>
          {liked ? <Like width={22} height={23} /> : <LikeBig />}
          </TouchableOpacity>
          <TouchableOpacity>
            <Plus />
          </TouchableOpacity>
          <TouchableOpacity onPress={sendTo}>
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
          <View style={styles.description}>
            <Text style={styles.headingText}>{item.heading}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <ScrollView
            style={styles.commentScroll}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            // scrollEventThrottle={16}
          >
            <View style={styles.commentContainer}>
              <Image source={item.profile_pic} />
              <View style={styles.leftC}>
                <View style={{gap: 4}}>
                  <Text style={styles.phamCText}>Bruno Pham</Text>
                  <Text style={styles.commentText}>Greta Shot </Text>
                </View>
                <Text style={styles.time}>2 mins ago</Text>
              </View>
            </View>
            <View style={styles.commentContainer}>
              <Image source={item.profile_pic} />
              <View style={styles.leftC}>
                <View style={{gap: 4}}>
                  <Text style={styles.phamCText}>Bruno Pham</Text>
                  <Text style={styles.commentText}>Greta Shot </Text>
                </View>
                <Text style={styles.time}>2 mins ago</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomComment}>
          <Image source={item.profile_pic} />
          <TextInput
            style={styles.inputBottom}
            placeholderTextColor={'#BDBDBD'}
            placeholder="Add a comment"
            onFocus={handleInputFocus}
          />
        </View>
        <Modal visible={showModal} animationType="slide">
          <Animated.View style={styles.modalContainer}>
            <View style={styles.mainComment}>
              <TouchableOpacity onPress={() => close()}>
                <ArrowL />
              </TouchableOpacity>
              <Text style={styles.mainCommentText}>Comments</Text>
              <TouchableOpacity>
                <Edit />
              </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView style={{ marginBottom: 40}}>
              
                <View style={{height: width * 1.7}}>
                  <FlatList
                    contentContainerStyle={styles.flatlistC}
                    data={comments}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                      <View style={styles.commentContainer}>
                        <Image source={item.profile_pic} />
                        <View style={styles.leftC}>
                          <View style={{gap: 4}}>
                            <Text style={styles.phamCText}>Bruno Pham</Text>
                            <Text style={styles.commentText}>
                              {item.comment}
                            </Text>
                          </View>
                          <View style={styles.bottomFlex}>
                            <View style={styles.bottomLFlexContainer}>
                              <Text style={styles.time}>2 mins ago</Text>
                              <Text style={styles.likeText}>Like</Text>
                            </View>
                            <View style={styles.bottomRFlexContainer}>
                              <Text style={styles.time}>02</Text>
                              <Vector />
                            </View>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                </View>
                <View style={styles.postCommentC}>
                  <TextInput
                    style={styles.commentPostInput}
                    ref={inputRef}
                    placeholder="Type Something"
                    placeholderTextColor={'#BDBDBD'}
                  />
                  <TouchableOpacity>
                    <Post />
                  </TouchableOpacity>
                </View>
              
            </KeyboardAwareScrollView>
          </Animated.View>
        </Modal>
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
    width: width - 40,
    alignSelf: 'center',
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
    height: undefined,
    aspectRatio: 29 / 20,
  },
  bottom: {
    width: width - 40,
    alignSelf: 'center',
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
  description: {
    width: width - 40,
    alignSelf: 'center',
    gap: 6,
  },
  headingText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#212121',
  },
  descriptionText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#BDBDBD',
    letterSpacing: -0.1,
    lineHeight: 21,
    color: '#828282',
  },
  commentContainer: {
    width: width - 30,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 14,
    padding: 16,
    backgroundColor: '#F6F7F9',
    borderRadius: 8,
    marginTop: 10,
  },
  leftC: {
    gap: 10,
  },
  commentText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 21,
    color: '#212121',
  },
  phamCText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#242424',
    letterSpacing: -0.2,
    lineHeight: 24,
  },
  time: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#828282',
    letterSpacing: -0.1,
    lineHeight: 18,
  },
  commentScroll: {
    height: width / 2.7,
    marginVertical: 10,
  },
  bottomComment: {
    paddingHorizontal: 16,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  inputBottom: {
    fontSize: 14,
    width: '100%',
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
  },
  mainComment: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainCommentText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#000',
  },
  bottomFlex: {
    flexDirection: 'row',
    gap: 120,
  },
  likeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#242424',
  },
  bottomLFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  bottomRFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  postCommentC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  commentPostInput: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    width: '80%',
  },
  flatlistC: {},
});
