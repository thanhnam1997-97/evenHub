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
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducer/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ErrorMessage {
  email: string;
  password: string;
  comfirmPassword: string;
}

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessager] = useState<any>();

  const dispath = useDispatch();

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[`${key}`] = value;

    setValues(data);
  };

  const formValidate = (key: string) => {
    const data = {...errorMessage};
    let message = ``;
    switch (key) {
      case 'username':
        message = !values.username ? `Full Name is required!!!` : '';
        break;

      case 'email':
        if (!values.email) {
          message = `Email is required!!!`;
        } else if (!Validate.email(values.email)) {
          message = 'Email is not valited!!!';
        } else {
          message = '';
        }
        break;

      case 'password':
        message = !values.password ? `Password is required!!!` : '';
        break;

      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = `Please type confirm password!`;
        } else if (values.confirmPassword !== values.password) {
          message = `Password is not match`;
        } else {
          message = '';
        }
        break;
    }
    data[`${key}`] = message;
    setErrorMessager(data);
  };

  const handleRegister = async () => {
    // const {email, password, confirmPassword} = values;
    // const emailValidate = Validate.email(email);
    // const passValidate = Validate.Password(password);
    // const comfirmPassValidate = Validate.Password(confirmPassword);
    // if (email && password && confirmPassword) {
    //   if (emailValidate && passValidate && comfirmPassValidate) {
    //     setErrorMessager('');
    //     setIsLoading(true);
    //     try {
    //       const res = await authenticationApi.HandleAuthentication(
    //         '/register',
    //         {
    //           fullname: values.username,
    //           email,
    //           password,
    //         },
    //         'post',
    //       );
    //       dispath(addAuth(res.data));
    //       await AsyncStorage.setItem('auth', JSON.stringify(res.data));
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.log(error);
    //       setIsLoading(false);
    //     }
    //   } else {
    //     setErrorMessager('Email and password are not in correct format!!!');
    //   }
    // } else {
    //   setErrorMessager('Please enter complete information!!!');
    // }
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
            onEnd={() => formValidate('username')}
          />

          <InputComponent
            value={values.email}
            placehelder="abc@gmail.com"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColor.gray} />}
            onEnd={() => formValidate('email')}
          />

          <InputComponent
            value={values.password}
            placehelder="Password"
            onChange={val => handleChangeValue('password', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColor.gray} />}
            onEnd={() => formValidate('password')}
          />

          <InputComponent
            value={values.confirmPassword}
            placehelder="Confirm Password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColor.gray} />}
            onEnd={() => formValidate('confirmPassword')}
          />
        </SectionComponent>

        {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map((error, index) => (
              <TextComponent
                text={errorMessage[`${error}`]}
                key={`error${index}`}
                color={appColor.danger}
              />
            ))}
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
