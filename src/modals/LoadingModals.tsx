import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import React from 'react';
import {TextComponent} from '../components';

interface Props {
  visible?: boolean;
  mess?: string;
}

const LoadingModals = (props: Props) => {
  const {visible} = props;

  return (
    <Modal
      visible={visible}
      style={[styles.container]}
      transparent
      statusBarTranslucent>
      <View style={[styles.view]}>
        <ActivityIndicator color={'#fff'} size={32} />
        <TextComponent text="Loading" color={'#fff'} flex={0} />
      </View>
    </Modal>
  );
};

export default LoadingModals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
