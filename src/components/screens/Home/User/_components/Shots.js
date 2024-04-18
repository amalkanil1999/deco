import { FlatList, Image, ScrollView, StyleSheet, Text, View,Dimensions, } from 'react-native'
import React from 'react'
// import MasonryList from '@react-native-seoul/masonry-list';


const {width, height} = Dimensions.get('screen');

export default function Shots() {
  const images = [
    {
      id: 1,
      image: require("../../../../../assets/images/user/grid1.png"), 
    },
    {
      id: 2,
      image: require("../../../../../assets/images/user/grid2.png"), 
    },
    {
      id: 3,
      image: require("../../../../../assets/images/user/grid4.png"), 
    },
    {
      id: 4,
      image: require("../../../../../assets/images/user/grid3.png"), 
    },
    {
      id: 5,
      image: require("../../../../../assets/images/user/grid3.png"), 
    },
    {
      id: 6,
      image: require("../../../../../assets/images/user/grid1.png"), 
    },
    {
      id: 7,
      image: require("../../../../../assets/images/user/grid2.png"), 
    },
    {
      id: 8,
      image: require("../../../../../assets/images/user/grid1.png"), 
    },
  ]
  return (
    
    <View style={styles.container}>
      {images.length > 0 ? (<ScrollView style={{paddingTop: 10,}} showsVerticalScrollIndicator={false}>
        <View style={styles.gridC}>
          <View style={{gap:15,}}>{images.filter((_,i)=>i%2===0).map(item => <Image style={styles.images}  source={item.image} key={item.id} />)}</View>
          <View style={{gap:15,}}>{images.filter((_,i)=>i%2!==0).map(item => <Image style={styles.images}  source={item.image} key={item.id} />)}</View>
        </View>
      </ScrollView>) : (
          <View style={styles.imageC}>
      <Image style={styles.orImage} source={require("../../../../../assets/images/user/Group.png")} />
    </View>
     )}
      
    </View>
  )
}

const styles = StyleSheet.create({
  imageC: {
    alignItems: "center",
    paddingTop: 50,
  },
  orImage: {
    
  },
  container: {
    height: width,
    alignSelf: "center",
    paddingVertical: 10,
    paddingBottom: 70,
  },
  images: {
    width: width / 2.5,
    borderRadius: 10,
  },
  gridC: {
    flexDirection: "row",
    gap: 15,
  },

})