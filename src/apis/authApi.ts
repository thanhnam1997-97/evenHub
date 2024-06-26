import {appInfos} from '../contants/appInfos';
import axiosClient from './aixosClient';

class AuthApi {
  HandleAuthentication = async (
    url: string,
    data?: any,
    method?: 'get' | 'post' | 'put' | 'delete',
  ) => {
    return await axiosClient(`${appInfos.BASE_URL}/auth${url}`, {
      method: method ?? 'get',
      data,
    });
  };
}

const authenticationApi = new AuthApi();
export default authenticationApi;
