import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppRouters from './src/navigatiors/AppRouters';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
