import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

export default function Collection() {
  const collections = [
    {
      id: 1,
      name: 'YOUR LIKES',
      count: '25 shots',
    },
    {
      id: 2,
      name: 'DOWNLOAD',
      count: '25 shots',
    },
    {
      id: 3,
      name: 'YOUR LIKES',
      count: '30 shots',
    },
    {
      id: 4,
      name: 'PORTRAIT PHOTOGRAPHY',
      count: '15 shots',
    },
    {
      id: 5,
      name: 'PORTRAIT PHOTOGRAPHY',
      count: '25 shots',
    },
    {
      id: 6,
      name: 'YOUR LIKES',
      count: '25 shots',
    },
    {
      id: 7,
      name: 'YOUR LIKES',
      count: '25 shots',
    },
    {
      id: 8,
      name: 'YOUR LIKES',
      count: '25 shots',
    },
  ];
  return (
    <View style={styles.top}>
      <FlatList
        data={collections}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.main}
        renderItem={({item}) => (
          <View style={styles.topC}>
            <View style={styles.containerCollection}>
              <View style={styles.imageC}>
                <View style={styles.bottomFlex}>
                  <Image
                    style={{
                      borderTopLeftRadius: 10,
                    }}
                    source={require('../../../../../assets/images/discover/flex2.png')}
                  />
                  <Image
                    style={{borderTopRightRadius: 10}}
                    source={require('../../../../../assets/images/discover/flex3.png')}
                  />
                </View>
                <View style={styles.bottomFlex}>
                  <Image
                    style={{borderBottomLeftRadius: 10}}
                    source={require('../../../../../assets/images/discover/flex2.png')}
                  />
                  <Image
                    style={{borderBottomRightRadius: 10}}
                    source={require('../../../../../assets/images/discover/flex3.png')}
                  />
                </View>
              </View>
              <Image
                style={styles.allcontainerImageBDown}
                source={require('../../../../../assets/images/discover/Rectangle.png')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.topicText}>{item.name}</Text>
              </View>
            </View>
            <Text style={styles.videoText}>{item.count}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: width,
    
  },
  topC: {
    marginRight: 18,
    margin: 10,
  },
  main: {
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 60,
  },
  containerCollection: {
    width: width / 2.5,
    height: width / 2.5,
  },
  imageC: {
    flexDirection: 'column',
    position: 'absolute',
    borderRadius: 10,
  },
  bottomFlex: {
    flexDirection: 'row',
  },
  contentContainerStyle: {
    marginTop: 15,
  },
  textContainer: {
    left: 0,
    top: '43%',
  },
  topicText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    lineHeight: 16.8,
    textAlign: 'center',
  },
  allcontainerImageBDown: {
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: 10,
    position: 'absolute',
    borderRadius: 10,
  },
  videoText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    letterSpacing: -0.1,
    color: '#828282',
    marginVertical: 5,
  },
});
