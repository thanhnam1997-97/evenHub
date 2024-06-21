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
import {Image, Switch} from 'react-native';
import {Lock, Sms} from 'iconsax-react-native';
import {appColor} from '../../contants/appColor';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemenber, setIsRemenber] = useState(true);

  return (
    <ContainerComponent isImageBackground>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Image
          source={require('../../assets/image/text-logo.png')}
          style={{
            width: 164,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} title text="Sign in" flex={0} />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placehelder="Email"
          onChange={val => setEmail(val)}
          // isPassword
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
          <RowComponent>
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
            onPress={() => {}}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
