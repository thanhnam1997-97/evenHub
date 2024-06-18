import {Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import {appInfos} from '../../contants/appInfos';
import {appColor} from '../../contants/appColor';
import TextComponent from '../../components/TextComponent';
import {fontFamily} from '../../contants/fontFamily';

const OnbroadingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        index={index}
        activeDotColor={appColor.white}>
        <Image
          source={require('../../assets/image/Onboarding1.png')}
          style={{
            flex: 1,
            width: appInfos.size.WIDTH,
            height: appInfos.size.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/image/Onboarding2.png')}
          style={{
            flex: 1,
            width: appInfos.size.WIDTH,
            height: appInfos.size.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/image/Onboarding3.png')}
          style={{
            flex: 1,
            width: appInfos.size.WIDTH,
            height: appInfos.size.HEIGHT,
            resizeMode: 'cover',
          }}
        />
      </Swiper>
      <View
        style={[
          {
            paddingHorizontal: 16,
            paddingVertical: 20,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <TextComponent
            text="Skip"
            color={appColor.gray2}
            font={fontFamily.medium}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }>
          <TextComponent
            text="Next"
            color={appColor.white}
            font={fontFamily.medium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;

// const styles = StyleSheet.create({
//   text: {
//     color: appColor.white,
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });
