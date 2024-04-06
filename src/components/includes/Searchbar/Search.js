import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import React from 'react';
import SearchIcon from '../../../assets/icons/Search.svg';
import SendIcon from '../../../assets/icons/Send.svg';

const {width, height} = Dimensions.get('screen');

export default function Search() {
  return (
    <View style={styles.marginContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <SearchIcon style={styles.searchIcon} />
          <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor={'#BDBDBD'} />
        </View>
      </View>
      <View style={styles.send}>
        <SendIcon style={styles.send} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  marginContainer: {
    paddingVertical: 10,
    width: width - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
  },
  inputContainer: {},
  searchContainer: {
    flex: 1,
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 12,
    zIndex: 1,
  },
  textInput: {
    height: 40,
    lineHeight: 40,
    color: '#000',
    paddingHorizontal: 35,
    paddingVertical: 0,
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#ECEDEE',
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  send: {
      backgroundColor: '#ECEDEE',
      height: 40,
      width: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
  },
});
