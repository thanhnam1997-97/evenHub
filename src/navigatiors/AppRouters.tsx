import React, {useEffect} from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducer/authReducer';

const AppRouters = () => {
  const {getItem} = useAsyncStorage('auth');

  const auth = useSelector(authSelector);
  const dispath = useDispatch();
  console.log(auth);

  useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    const res = await getItem();
    console.log(res);
    res && dispath(addAuth(JSON.parse(res)));
  };
  console.log(auth.accesstoken);

  return <>{auth.accesstoken ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default AppRouters;
