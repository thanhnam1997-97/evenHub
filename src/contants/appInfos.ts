import {Dimensions} from 'react-native';

export const appInfos = {
  size: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
  BASE_URL: 'http://192.168.1.2:3001',
};
