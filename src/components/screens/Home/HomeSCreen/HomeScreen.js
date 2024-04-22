import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
// import Searchbar from '../../../includes/Searchbar/SearchBar'
import Search from '../../../includes/Searchbar/Search'
import Profile from "../../../../assets/images/home/Avatar1.png"
import Like from "../../../../assets/icons/blike.svg"
import Comment from "../../../../assets/icons/Chat.svg"
import Add from "../../../../assets/icons/plus-circle1.svg"


const {width, height} = Dimensions.get('screen');

export default function HomeScreen({navigation}) {
  const [selected, setSelected] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    const initialData = [
      {
        id: 1,
        profile_name: "Thanh Pham",
        profile_pic: require("../../../../assets/images/home/Avatar1.png"),
        posted_at: "1 hour ago",
        image: require("../../../../assets/images/home/image.png"),
        views: 125,
        comment: 20,
        like: 125,
        heading: "Street Portrait",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus",
        tag: "trending"
      },
      {
        id: 2,
        profile_name: "Bruno",
        profile_pic: require("../../../../assets/images/home/Avatar.png"),
        posted_at: "12 hour ago",
        image: require("../../../../assets/images/home/image1.png"),
        views: 11,
        comment: 1,
        like: 8,
        heading: "Architecture",
        description: "Lorem ipsum dolor architect is a great initiative sit amet, consectetur adipiscing elit.s. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus",
        tag: "following"
      },
      {
        id: 3,
        profile_name: "Naruto",
        profile_pic: require("../../../../assets/images/home/Avatar.png"),
        posted_at: "24 hour ago",
        image: require("../../../../assets/images/home/image.png"),
        views: 500,
        comment: 205,
        like: 495,
        heading: "Anime",
        description: "Lorem ipsum dolor sit amet, Anime ius an excellent way to live in today's world. Quis risus, neque . Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus",
        tag: "trending"
      },
      {
        id: 4,
        profile_name: "Boruto",
        profile_pic: require("../../../../assets/images/home/Avatar1.png"),
        posted_at: "1 D ago",
        image: require("../../../../assets/images/home/image1.png"),
        views: 10,
        comment: 30,
        like: 1,
        heading: "Cartoon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus",
        tag: "trending"
      },
      {
        id: 5,
        profile_name: "Thanh Pham",
        profile_pic: require("../../../../assets/images/home/Avatar.png"),
        posted_at: "2 D ago",
        image: require("../../../../assets/images/home/image.png"),
        views: 125,
        comment: 20,
        like: 125,
        heading: "Caricature",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus",
        tag: "following"
      },
    ]
    setData(initialData);
  }, [])
  
  const filteredData = () => {
    let filtered = data
    if (selected !== 1) {
      const category = getCategory(selected)
      filtered = data.filter(item => item.tag === category)
    }
    return filtered
  }

  const getCategory = selection => {
    switch (selection) {
      case 2:
        return 'trending';
      case 3:
        return 'following';
      default:
        return '';
    }
  }
  const renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.feedContainer} onPress={()=> navigation.navigate("Feed",{item})}>
      <View style={styles.top}>
        <View style={styles.left}>
            <Image source={item.profile_pic} />
            <Text style={styles.phamText}>{item.profile_name}</Text>
          </View>
          <Text style={styles.timeText}>{ item.posted_at}</Text>
        </View>
        <View style={styles.ImageC}>
          <Image source={item.image} style={styles.pro} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomL}>
            <Add />
          </View>
          <View style={styles.botttomR}>
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
      </TouchableOpacity>
  )
}

  return (
    <SafeAreaView style={styles.safe}>
      <Search />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setSelected(1)}
          style={
            selected == 1 ? styles.selectedButtonStyle : styles.buttonStyle
          }>
          <Text
            style={
              selected == 1 ? styles.selectedButtontext : styles.buttonText
            }>
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(2)}
          style={
            selected == 2 ? styles.selectedButtonStyle : styles.buttonStyle
          }>
          <Text
            style={
              selected == 2 ? styles.selectedButtontext : styles.buttonText
            }>
            Trending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(3)}
          style={
            selected == 3 ? styles.selectedButtonStyle : styles.buttonStyle
          }>
          <Text
            style={
              selected == 3 ? styles.selectedButtontext : styles.buttonText
            }>
            Following
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flat}>
        <FlatList 
          decelerationRate="fast"
          snapToAlignment="center"
        contentContainerStyle={styles.flatlistC}
        renderItem={renderItems}
        data={filteredData()}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#fff",
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    
  },
  buttonStyle: {
    height: 40,
    flex:1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButtonStyle: {
    height: 40,
    flex:1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ECEDEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#BDBDBD',
    fontFamily: 'Poppins-Medium',
    lineHeight:20,
  },
  selectedButtontext: {
    fontSize: 16,
    color: '#888BF4',
    fontFamily: "Poppins-Bold",
    lineHeight:20,
  },
  flat: {
    backgroundColor: '#ECEDEE', 
  },
  flatlistC: {
    paddingBottom: width/1.25,
  },
  feedContainer: {
    width: width - 40,
    alignSelf: 'center',
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
  },
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
    gap:16,
  },
  phamText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: "#242424",
    letterSpacing: -0.2,
    lineHeight: 24,
  },
  timeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: "#BDBDBD",
    letterSpacing: -0.1,
    lineHeight: 21,
  },
  ImageC: {},
  pro: {
    width: "100%",
    height: undefined,
    aspectRatio: 30/20,
  },
  bottom: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomL: {},
  botttomR: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap:16,
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
  // flat: {},
  // flat: {},
})