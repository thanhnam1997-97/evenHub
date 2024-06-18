import {View, Text} from 'react-native';
import React from 'react';
import {ButtonComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <Text>LoginScreen</Text>
      {/* <Button
        title="login"
        onPress={async () =>
          await AsyncStorage.setItem('accessToken', 'fafafafa')
        }
      /> */}
      <ButtonComponent
        text="Forget password"
        onPress={() => console.log('login')}
        type="link"
        icon={
          <View>
            <Text>Next</Text>
          </View>
        }
      />
    </View>
  );
};

export default LoginScreen;
