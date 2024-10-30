import {
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import RowComponent from './RowComponent';
import {appColor} from '../contants/appColor';
import {ArrowLeft} from 'iconsax-react-native';
import {StyleSheet} from 'react-native';
import TextComponent from './TextComponent';
import {fontFamily} from '../contants/fontFamily';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean;
}

const ContainerComponent = (props: Props) => {
  const {isImageBackground, isScroll, children, back, title} = props;
  const navigation: any = useNavigation();

  const headerComponent = () => {
    return (
      <View style={styles.container}>
        {(title || back) && (
          <RowComponent styles={styles.rowCom}>
            {back && (
              <TouchableOpacity
                style={styles.touch}
                onPress={() => navigation.goBack()}>
                <ArrowLeft size={30} color={appColor.text} />
              </TouchableOpacity>
            )}
            {title ? (
              <TextComponent text={title} font={fontFamily.medium} flex={1} />
            ) : (
              <></>
            )}
          </RowComponent>
        )}
        {returnContainer}
      </View>
    );
  };

  const returnContainer = isScroll ? (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );

  return isImageBackground ? (
    <ImageBackground
      source={require('../assets/image/splash.png')}
      style={{flex: 1}}
      imageStyle={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <View>{headerComponent()}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  rowCom: {
    paddingHorizontal: 16,
    paddingVertical: 15,
    minWidth: 48,
    minHeight: 48,
  },
  touch: {
    marginRight: 12,
    fontSize: 16,
  },
});
