import { Button, Flex, Heading, Text, Checkbox } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { NavLink } from '@/components/common';
import { Input } from '@/components/form';
import { useNotification } from '@/hooks';
import { useLogin } from '@/libs/auth';
import { AxiosResponseError } from '@/libs/axios';

import AuthLayout from '../components/AuthLayout';
import { LoginFormValues } from '../types';

const initialValues: LoginFormValues = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
});

export function Login() {
  const notification = useNotification();
  const login = useLogin();

  const navigate = useNavigate();

  const onSubmit = async (values: LoginFormValues) => {
    try {
      login.mutate(values);
      navigate('/dashboard/home');
    } catch (err) {
      notification.error({ title: (err as AxiosResponseError).message });
    }
  };

  return (
    <AuthLayout title="Sign in">
      <Flex direction="column" gap={9}>
        <Flex direction="column">
          <Heading variant="h5" mb={2}>
            Welcome Back!
          </Heading>
          <Text variant="light" fontSize="md">
            Please enter your credentials to sign in!
          </Text>
        </Flex>
        <Formik<LoginFormValues>
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, dirty }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Flex direction="column" gap={6}>
                  <Input
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    size="lg"
                    placeholder="Enter your email"
                    formLabelProps={{ fontSize: 'small' }}
                    requiredSign
                  />
                  <Input
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    size="lg"
                    placeholder="Enter your password"
                    formLabelProps={{ fontSize: 'small' }}
                    requiredSign
                  />
                  <Flex justify="space-between">
                    <Checkbox color={'gray.500'}>Remember Me</Checkbox>
                    <NavLink to="/forgot-password">Forgot password?</NavLink>
                  </Flex>
                  <Button
                    size="lg"
                    type="submit"
                    isLoading={login.isPending}
                    isDisabled={!dirty}
                  >
                    Sign In
                  </Button>
                </Flex>
              </form>
            );
          }}
        </Formik>
      </Flex>
    </AuthLayout>
  );
}
