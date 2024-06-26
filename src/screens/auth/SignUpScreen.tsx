import React, {useEffect, useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {Lock, Sms, User} from 'iconsax-react-native';
import {appColor} from '../../contants/appColor';
import SocialLogin from './components/SocialLogin';
import {LoadingModals} from '../../modals';
import authenticationApi from '../../apis/authApi';
import {Validate} from '../../utils/validate';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessager] = useState('');

  useEffect(() => {
    if (values.email || values.password) {
      setErrorMessager('');
    }
  }, [values.email, values.password]);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[`${key}`] = value;

    setValues(data);
  };

  const handleRegister = async () => {
    const {email, password, confirmPassword} = values;
    const emailValidate = Validate.email(email);
    const passValidate = Validate.Password(password);

    if (email && password && confirmPassword) {
      if (emailValidate && passValidate) {
        setErrorMessager('');
        setIsLoading(true);
        try {
          const res = await authenticationApi.HandleAuthentication(
            '/register',
            values,
            'post',
          );
          console.log(res);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      } else {
        setErrorMessager('Emall not correct!!!');
      }
    } else {
      setErrorMessager('Vui lòng nhập đẩy đủ thông tin');
    }
  };

  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
        <SectionComponent>
          <TextComponent size={24} title text="Sign Up" />
          <SpaceComponent height={21} />
          <InputComponent
            value={values.username}
            placehelder="Full name"
            onChange={val => handleChangeValue('username', val)}
            allowClear
            affix={<User size={22} color={appColor.gray} />}
          />

          <InputComponent
            value={values.email}
            placehelder="Email"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColor.gray} />}
          />

          <InputComponent
            value={values.password}
            placehelder="Password"
            onChange={val => handleChangeValue('password', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColor.gray} />}
          />

          <InputComponent
            value={values.confirmPassword}
            placehelder="Confirm Password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColor.gray} />}
          />
        </SectionComponent>

        {errorMessage && (
          <SectionComponent>
            <TextComponent text={errorMessage} color={appColor.danger} />
          </SectionComponent>
        )}

        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent
            onPress={handleRegister}
            text="SIGN UP"
            type="primary"
          />
        </SectionComponent>
        <SocialLogin />
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Already have an account? " />
            <ButtonComponent
              type="link"
              text="Sign in"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModals visible={isLoading} />
    </>
  );
};

export default SignUpScreen;
