import { AxiosResponse } from 'axios';
import { configureAuth } from 'react-query-auth';

import storage from '@/utils/storage';

import {
  registerUser,
  RegisterCredentialsDTO,
  LoginCredentialsDTO,
  loginWithEmailAndPassword,
  getUser,
  AuthUser,
} from '@/dashboard/auth';

async function handleResponse(response: AxiosResponse) {
  storage.setTokens(response.data);
  const user = await getUser();
  return user.data;
}

async function userFn() {
  if (storage.getAccessToken()) {
    const user = await getUser();
    return user.data;
  }
  return null;
}

async function loginFn(payload: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(payload);
  const user = await handleResponse(response);
  return user;
}

async function registerFn(payload: RegisterCredentialsDTO) {
  const response = await registerUser(payload);
  return response as unknown as AuthUser;
}

async function logoutFn() {
  storage.clearTokens();
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });
