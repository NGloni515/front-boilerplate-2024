import { AxiosResponse } from 'axios';

import { axios } from '@/libs/axios';

import { AuthUser } from '../types';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  phone?: string;
};

export const registerUser = (
  data: RegisterCredentialsDTO
): Promise<AxiosResponse<AuthUser>> => {
  return axios.post('/users/sign-up', data);
};
