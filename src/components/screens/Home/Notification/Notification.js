import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

export default function Notification() {

  const notifications = [
    {
      id: 1,
      name: 'Bruno Pham',
      pro_pic: require('../../../../assets/images/notification/avatar1.png'),
      action: 'liked',
      image: require('../../../../assets/images/notification/Notiphoto.png'),
      time: '2 minutes ago',
    },
    {
      id: 2,
      name: 'Bruno Pham',
      pro_pic: require('../../../../assets/images/notification/avatar2.png'),
      action: 'liked',
      time: '2 minutes ago',
    },
    {
      id: 3,
      name: 'Bruno Pham',
      pro_pic: require('../../../../assets/images/notification/avatar3.png'),
      action: 'liked',
      image: require('../../../../assets/images/notification/Notiphoto.png'),
      time: '2 minutes ago',
    },
    {
      id: 4,
      name: 'Bruno Pham',
      pro_pic: require('../../../../assets/images/notification/avatar4.png'),
      action: 'added',
      time: '2 minutes ago',
      image: require('../../../../assets/images/notification/Notiphoto.png'),
    },
    {
      id: 5,
      name: 'Bruno Pham',
      pro_pic: require('../../../../assets/images/notification/avatar5.png'),
      time: '2 minutes ago',
      action: 'liked',
    },
    {
      id: 6,
      name: 'Thanh Pham',
      pro_pic: require('../../../../assets/images/notification/avatar1.png'),
      action: 'added',
      time: '3 minutes ago',
      image: require('../../../../assets/images/notification/Notiphoto.png'),
    },
    {
      id: 7,
      name: 'Bruno Pham',
      pro_pic: require('../../../../assets/images/notification/avatar3.png'),
      action: 'liked',
      time: '4 minutes ago',
      image: require('../../../../assets/images/notification/Notiphoto.png'),
    },
  ];

  const [followedStates, setFollowedStates] = useState(Array(notifications.length).fill(false));

  const handleFollow = (index) => {
    const newFollowedStates = [...followedStates];
    newFollowedStates[index] = !newFollowedStates[index];
    setFollowedStates(newFollowedStates);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topHeading}>
        <Text style={styles.activity}>Activity</Text>
        <Text style={styles.bracket}>(03)</Text>
      </View>
      <View style={{paddingBottom: 180,}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.notiBar}
        data={notifications}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            <Image source={item.pro_pic} />
            <View style={styles.center}>
              <Text style={styles.phamText}>{item.name}</Text>
              <Text style={[styles.liked, item.image && styles.likedWithImage]}>
                {item.action}{' '}
                <Text style={styles.blue}>"Autumn is my heart"</Text>
              </Text>
              <Text style={styles.minute}>{item.time}</Text>
            </View>
            {item.image ? (
              <Image source={item.image} />
            ) : (
              <TouchableOpacity style={[followedStates[index] ?styles.followed : styles.followButton]} onPress={() => handleFollow(index)}>
                <Text style={[followedStates[index] ?styles.followedText : styles.followText]}>
                  {followedStates[index] ? 'Followed' : 'Follow'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#fff',
  },
  topHeading: {
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activity: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    lineHeight: 29,
    color: '#000',
  },
  bracket: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    lineHeight: 29,
    color: '#5151C6',
  },
  notiBar: {
    paddingHorizontal: 12,
    paddingTop: 10,
    gap: 15,
  },
  container: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#f1f1fe',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  center: {
  },
  phamText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    lineHeight: 19,
    color: '#212121',
  },
  minute: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#BDBDBD',
    marginTop: 10,
  },
  liked: {
    width: 200,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#212121',
  },
  likedWithImage: {
    width: 187,
  },
  blue: {
    color: '#5151C6',
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#5151C6',
    backgroundColor: '#fff',
  },
  followText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    color: '#5151C6',
  },
  followed: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#5151C6',
  },
  followedText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    color: '#fff',
  },
});
