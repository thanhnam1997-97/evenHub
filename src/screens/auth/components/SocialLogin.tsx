import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  TextComponent,
} from '../../../components';
import {appColor} from '../../../contants/appColor';
import {fontFamily} from '../../../contants/fontFamily';
import {Google} from 'iconsax-react-native';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={appColor.gray5}
        size={16}
        font={fontFamily.medium}
      />
      <ButtonComponent
        type="primary"
        color={appColor.white}
        textColor={appColor.text}
        text="Login with Google"
        icon={<Google size={24} color={appColor.primary} />}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
