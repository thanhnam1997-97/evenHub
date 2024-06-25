import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {ArrowRight, Sms} from 'iconsax-react-native';
import {appColor} from '../../contants/appColor';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent>
        <TextComponent title text="Resset Password" />
        <TextComponent
          size={16}
          text="Please enter your email address to request a password reset"
        />
        <SpaceComponent height={26} />
        <InputComponent
          value={email}
          placehelder="abc@gmail.com"
          onChange={val => setEmail(val)}
          affix={<Sms size={22} color={appColor.gray} />}
        />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          text="SEND"
          type="primary"
          icon={<ArrowRight size={20} color={appColor.white} />}
          iconFlex="right"
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPassword;
