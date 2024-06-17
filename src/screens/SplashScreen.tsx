import {ImageBackground, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {appInfos} from '../contants/appInfos';
import {SpaceComponent} from '../components';
import {appColor} from '../contants/appColor';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/image/splash.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{flex: 1}}>
      <Image
        source={require('../assets/image/logo.png')}
        style={{
          width: appInfos.size.WIDTH * 0.7,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={20} />
      <ActivityIndicator color={appColor.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;
