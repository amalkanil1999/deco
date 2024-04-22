import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  InteractionManager,
} from 'react-native';
import React from 'react';
import Search from '../../../includes/Searchbar/Search';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

export default function Discover({navigation}) {
  const cards = [
    {
      id: 1,
      topic: 'PHOTOGRAPHY',
      image: require('../../../../assets/images/discover/mj2NwYH3wBA.png'),
    },
    {
      id: 2,
      topic: 'UI DESIGN',
      image: require('../../../../assets/images/discover/mj2NwYH3wBA1.png'),
    },
    {
      id: 3,
      topic: 'DESIGN',
      image: require('../../../../assets/images/discover/mj2NwYH3wBA1.png'),
    },
    {
      id: 4,
      topic: 'MAKING VIDEO',
      image: require('../../../../assets/images/discover/mj2NwYH3wBA.png'),
    },
  ];

  const collectionCards = [
    {
      id: 1,
      topic: 'PORTRAIT PHOTOGRAPHY',
      contents: "70 photos",
    },
    {
      id: 2,
      topic: 'MUSIC VIDEOS',
      contents: "10 videos",
    },
    {
      id: 3,
      topic: 'DESIGN',
      contents: "60 photos",

    },
    {
      id: 4,
      topic: 'MAKING VIDEO',
      contents: "50 videos",

    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Search />
      <View style={styles.main}>
        <View style={styles.first}>
          <View style={styles.top}>
            <Text style={styles.headText}>Topic</Text>
            <Pressable style={styles.pressable} onPress={()=> navigation.navigate("Topic")}>
              <Text style={styles.pressabletext}>View more</Text>
            </Pressable>
          </View>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            data={cards}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.allContainer}>
                <Image style={styles.allcontainerImage} source={item.image} />
                <Image
                  style={styles.allcontainerImageB}
                  source={require('../../../../assets/images/discover/Rectangle.png')}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.topicText}>{item.topic}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.second}>
          <View style={styles.top}>
            <Text style={styles.headText}>Collection</Text>
            <Pressable style={styles.pressable}>
              <Text style={styles.pressabletext}>View more</Text>
            </Pressable>
          </View>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            data={collectionCards}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 18}}>
                <View style={styles.containerCollection}>
                  <View style={styles.imageC}>
                    <Image
                      style={{
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      source={require('../../../../assets/images/discover/flex1.png')}
                    />
                    <View style={styles.bottomFlex}>
                      <Image
                        style={{borderBottomLeftRadius: 10}}
                        source={require('../../../../assets/images/discover/flex2.png')}
                      />
                      <Image
                        style={{borderBottomRightRadius: 10}}
                        source={require('../../../../assets/images/discover/flex3.png')}
                      />
                    </View>
                  </View>
                  <Image
                    style={styles.allcontainerImageBDown}
                    source={require('../../../../assets/images/discover/Rectangle.png')}
                  />
                  <View style={[styles.textContainer, styles.additional]}>
                    <Text style={styles.topicText}>{item.topic}</Text>
                  </View>
                </View>
                <Text style={styles.videoText}>{item.contents}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.second}>
          <View style={styles.top}>
            <Text style={styles.headText}>Collection</Text>
            <Pressable style={styles.pressable}>
              <Text style={styles.pressabletext}>View more</Text>
            </Pressable>
          </View>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            data={collectionCards}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 18}}>
                <View style={styles.containerCollection}>
                  <View style={styles.imageC}>
                    <Image
                      style={{
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      source={require('../../../../assets/images/discover/flex1.png')}
                    />
                    <View style={styles.bottomFlex}>
                      <Image
                        style={{borderBottomLeftRadius: 10}}
                        source={require('../../../../assets/images/discover/flex2.png')}
                      />
                      <Image
                        style={{borderBottomRightRadius: 10}}
                        source={require('../../../../assets/images/discover/flex3.png')}
                      />
                    </View>
                  </View>
                  <Image
                    style={styles.allcontainerImageBDown}
                    source={require('../../../../assets/images/discover/Rectangle.png')}
                  />
                  <View style={[styles.textContainer, styles.additional]}>
                    <Text style={styles.topicText}>{item.topic}</Text>
                  </View>
                </View>
                <Text style={styles.videoText}>{item.contents}</Text>
              </View>
            )}
          />
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  first: {
    paddingBottom: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  headText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#212121',
  },
  pressable: {
    marginRight: 5,
  },
  pressabletext: {
    fontSize: 14,
    color: '#888BF4',
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    letterSpacing: -0.1,
  },
  allContainer: {
    width: 150,
    height: 100,
    position: 'relative',
    marginRight: 18,
  },
  allcontainerImage: {
    position: 'absolute',
    borderRadius: 10,
    height: undefined,
    aspectRatio: 150 / 100,
  },
  allcontainerImageB: {
    position: 'absolute',
  },
  textContainer: {
    left: 0,
    top: '45%',
  },
  topicText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    lineHeight: 16.8,
    textAlign: 'center',
  },
  second: {
    marginVertical: 10,
  },
  containerCollection: {
    width: 158,
    height: 158,
  },
  imageC: {
    flexDirection: 'column',
    position: 'absolute',
  },
  bottomFlex: {
    flexDirection: 'row',
  },
  contentContainerStyle: {
    marginTop: 15,
  },
  allcontainerImageBDown: {
    width: 158,
    height: 158,
    borderRadius: 10,
    position: 'absolute',
  },
  videoText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    letterSpacing: -0.1,
    color: '#828282',
    marginVertical: 5,
  },
  additional: {
    top: '41%',
  },
});
