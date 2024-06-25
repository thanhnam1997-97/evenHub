// import {View} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {Image, Switch, StyleSheet} from 'react-native';
import {Lock, Sms} from 'iconsax-react-native';
import {appColor} from '../../contants/appColor';
import SocialLogin from './components/SocialLogin';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemenber, setIsRemenber] = useState(true);

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent styles={[styles.container]}>
        <Image
          source={require('../../assets/image/text-logo.png')}
          style={[styles.imgBackground]}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} title text="Sign In" />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placehelder="Email"
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColor.gray} />}
        />
        <InputComponent
          value={password}
          placehelder="Password"
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColor.gray} />}
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemenber(!isRemenber)}>
            <Switch
              trackColor={{true: appColor.primary}}
              thumbColor={appColor.white}
              value={isRemenber}
              onChange={() => setIsRemenber(!isRemenber)}
            />
            <TextComponent text="Remenber me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password ?"
            onPress={() => navigation.navigate('ForgotPassword')}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={12} />
      <SectionComponent>
        <ButtonComponent text="SIGN IN" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have an account? " />
          <ButtonComponent
            type="link"
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75,
  },
  imgBackground: {
    width: 164,
    height: 114,
    marginBottom: 30,
  },
});
