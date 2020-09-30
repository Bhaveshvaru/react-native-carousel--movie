import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';

const Home = () => {
  const [background, setBackground] = useState({
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg',
    title: 'Avengers: Endgame',
    released: 'April 22, 2019',
    desc:
      'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
  });

  const [gallery, setgallery] = useState([
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg',
      title: 'Avengers: Endgame',
      released: 'April 22, 2019',
      desc:
        'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
      key: '1',
    },
    {
      image:
        'http://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
      title: 'Mulan',
      released: '2020-09-04',
      desc:
        'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
      key: '2',
    },

    {
      image:
        'http://image.tmdb.org/t/p/original//iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
      title: 'The Shawshank Redemption',
      released: '1994-09-23',
      desc:
        'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
      key: '3',
    },

    {
      image:
        'http://image.tmdb.org/t/p/original//kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg',
      title: 'Enola Holmes',
      released: '2020-09-23',
      desc:
        'While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.',
      key: '4',
    },
    {
      image:
        'http://image.tmdb.org/t/p/original//i26FIo5vJrR4u8ZZBm8o5Q4T9di.jpg',
      title: 'The Social Dilemma',
      released: '2020-01-26',
      desc:
        'This documentary-drama hybrid explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.',
      key: '5',
    },
  ]);
  const carouselRef = useRef(null);
  const { width, height } = Dimensions.get('window');
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          {/* <Image soure={{ uri: item.image }} style={styles.carouselImage} /> */}
          <Image source={{uri:item.image}} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.carouaselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground
            style={styles.ImageBg}
            source={{ uri: background.image }}
            blurRadius={10}
          >
            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder="Search Movies"
                placeholderTextColor="#666"
                style={styles.SearchBox}
              ></TextInput>
              <Feather
                name="search"
                size={22}
                color="#666"
                style={styles.searchBoxIcon}
              />
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              Top Picks this Week
            </Text>
            <View style={styles.carouaselContainerView}>
              <Carousel
                style={styles.Carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                seperatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouaselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',
  },
  searchBoxContainer: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical:30,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  carouaselContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    backgroundColor: 'rgb(0,0,0.9)',
    alignSelf:"center"
  },
  carouselText: {
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold',
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  searchBoxIcon:{
   position:'absolute',
   top:14,
   right:20
  }
});

export default Home;
