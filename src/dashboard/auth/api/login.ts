import { AxiosResponse } from 'axios';

import { axios } from '@/libs/axios';

import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  data: LoginCredentialsDTO
): Promise<AxiosResponse<UserResponse>> => {
  return axios.post('/users/login', {
    username: data.email,
    password: data.password,
  });
};
