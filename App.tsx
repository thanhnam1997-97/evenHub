import React, {useEffect, useState} from 'react';
import AuthNavigator from './src/navigatiors/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './src/screens';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
