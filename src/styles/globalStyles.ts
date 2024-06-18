import {StyleSheet} from 'react-native';
import {appColor} from '../contants/appColor';
import {fontFamily} from '../contants/fontFamily';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.white,
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: appColor.text,
  },
  button: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    flexDirection: 'row',
  },
});
