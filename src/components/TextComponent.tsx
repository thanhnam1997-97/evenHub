import {Text, StyleProp, TextStyle, Platform} from 'react-native';
import React from 'react';
import {appColor} from '../contants/appColor';
import {fontFamily} from '../contants/fontFamily';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
}

const TextComponent = (props: Props) => {
  const {text, size, flex, color, styles, font, title} = props;

  const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;

  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColor.text,
          flex: flex ?? 0,
          fontSize: size ? size : title ? 24 : fontSizeDefault,
          fontFamily: font
            ? font
            : title
            ? fontFamily.medium
            : fontFamily.regular,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
