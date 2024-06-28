import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, removeAuth} from '../../redux/reducer/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const dispath = useDispatch();
  const auth = useSelector(authSelector);

  return (
    <View style={[styles.viewContainer]}>
      <Text>HomeScreen</Text>
      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.setItem('auth', auth.email);
          dispath(removeAuth({}));
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
