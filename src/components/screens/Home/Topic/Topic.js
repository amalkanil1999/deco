import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import SearchIcon from '../../../../assets/icons/Search.svg';

const {width, height} = Dimensions.get('screen');

export default function Topic() {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  const handleCancel = () => {
    setInputValue('');
    setInputFocused(false);
    inputRef.current.blur();
  };
  const topics = [
    {
      id: 1,
      images: require('../../../../assets/images/discover/photography.png'),
      heading: 'PHOTOGRAPHY',
    },
    {
      id: 2,
      images: require('../../../../assets/images/discover/Illustration.png'),
      heading: 'ILLUSTRATION',
    },
    {
      id: 3,
      images: require('../../../../assets/images/discover/design.png'),
      heading: 'DESIGN',
    },
    {
      id: 4,
      images: require('../../../../assets/images/discover/making.png'),
      heading: 'MAKING VIDEO',
    },
  ];
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.searchIcon}>
          <SearchIcon />
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          style={inputFocused ? styles.selectFocused : styles.textInput}
          placeholder={inputFocused ? 'Type something' : 'Search'}
          placeholderTextColor={'#BDBDBD'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={setInputValue}
          value={inputValue}
        />
        {inputFocused && (
          <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        contentContainerStyle={styles.spotlight}
        data={topics}
        renderItem={({item}) => (
          <View style={styles.spotContainer}>
            <Image style={styles.image} source={item.images} />
            <Image
              style={styles.background}
              source={require('../../../../assets/images/boarding/background.png')}
            />
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.topicText,
                  {textAlign: item.id % 2 == 0 ? 'right' : 'left'},
                ]}>
                {item.heading}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: height,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 12,
    zIndex: 1,
  },
  textInput: {
    width: '100%',
    height: 40,
    lineHeight: 40,
    paddingHorizontal: 35,
    paddingVertical: 0,
    borderRadius: 30,
    backgroundColor: '#ECEDEE',
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  selectFocused: {
    width: '80%',
    height: 40,
    lineHeight: 40,
    color: '#000',
    paddingHorizontal: 35,
    paddingVertical: 0,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderColor: '#5151C6',
    borderWidth: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  cancelButton: {
    position: 'absolute',
    top: 0,
    right: 0,

    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  cancelText: {
    color: '#333333',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins-Medium',
  },
  spotlight: {
    marginTop: 30,
    gap: 20,
  },
  spotContainer: {
    position: 'relative',
    height: height / 6,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: width - 40,
    height: height / 6,
    position: 'absolute',
  },
  background: {
    height: width - 40,
    alignSelf: 'center',
    position: 'absolute',
    top: -101,
    opacity: 0.5,
    width: undefined,
    aspectRatio: 375 / 812,
    transform: [{rotate: '270deg'}, {scaleY: -1}],
  },
  textContainer: {
    top: '45%',
    paddingHorizontal: 30,
  },
  topicText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    lineHeight: 24,
  },
});
