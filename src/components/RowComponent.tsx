import {View, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  styles?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const RowComponent = (props: Props) => {
  const {styles, children, justify} = props;

  return (
    <View
      style={[
        globalStyles.row,
        {
          justifyContent: justify,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default RowComponent;
