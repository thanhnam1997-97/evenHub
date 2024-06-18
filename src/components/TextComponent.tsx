import {Text, StyleProp, TextStyle} from 'react-native';
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
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColor.text,
          flex: flex ?? 0,
          fontSize: size ?? title ? 24 : 14,
          fontFamily: font ?? title ? fontFamily.bold : fontFamily.regular,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
