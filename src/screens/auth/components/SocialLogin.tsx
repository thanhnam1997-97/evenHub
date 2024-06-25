import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {appColor} from '../../../contants/appColor';
import {fontFamily} from '../../../contants/fontFamily';
import {Facebook, Google} from '../../../assets/svg';

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
      <SpaceComponent height={16} />
      <ButtonComponent
        type="primary"
        color={appColor.white}
        textColor={appColor.text}
        textFont={fontFamily.regular}
        text="Login with Google"
        icon={<Google />}
        iconFlex="left"
      />
      <ButtonComponent
        type="primary"
        color={appColor.white}
        textColor={appColor.text}
        textFont={fontFamily.regular}
        text="Login with Facebook"
        icon={<Facebook />}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
