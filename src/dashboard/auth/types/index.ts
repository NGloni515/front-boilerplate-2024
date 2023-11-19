export type AuthUser = {
  id: string;
  email: string;
  phone?: string;
  img: string;
};

export type UserResponse = {
  user: AuthUser;
  jwt: string;
};

export type SingUpFormValues = {
  email: string;
  password: string;
  phone?: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type ForgotPasswordFormValues = {
  email: string;
};
