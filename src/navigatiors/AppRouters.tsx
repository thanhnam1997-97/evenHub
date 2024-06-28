import React, {useEffect, useState} from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducer/authReducer';
import {SplashScreen} from '../screens';

const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  const {getItem} = useAsyncStorage('auth');
  const auth = useSelector(authSelector);
  const dispath = useDispatch();

  useEffect(() => {
    checkLogin();
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const checkLogin = async () => {
    const res = await getItem();

    res && dispath(addAuth(JSON.parse(res)));
  };

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : auth.accesstoken ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default AppRouters;
