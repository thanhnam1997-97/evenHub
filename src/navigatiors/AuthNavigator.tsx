import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPassword, LoginScreen, Verication} from '../screens';
import OnbroadingScreen from '../screens/auth/OnbroadingScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  // const [isExisting, setIsExisting] = useState(false);

  // useEffect(() => {
  //   checkUserExisting();
  // }, []);

  // const checkUserExisting = async () => {
  //   const res = await AsyncStorage.getItem('auth');
  //   res && setIsExisting(true);
  // };
  // console.log(isExisting);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Verication" component={Verication} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
