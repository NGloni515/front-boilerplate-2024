import { Button, Flex, Heading, Text, Checkbox } from '@chakra-ui/react';
import { Formik } from 'formik';
import { MdOutlineArrowCircleDown } from 'react-icons/md';
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
    <AuthLayout title="Log in">
      <Flex direction="column" gap={9}>
        <Flex direction="column">
          <Heading variant="h4" mb={2}>
            Login
          </Heading>
          <Text variant="light" fontSize="md">
            Enter your email and password to enter
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
                    requiredSign
                  />
                  <Input
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    size="lg"
                    placeholder="Enter your password"
                    requiredSign
                  />
                  <Flex justify="space-between">
                    <Checkbox color={'gray.500'}>Stay signed please</Checkbox>
                    <NavLink to="/forgot-password">Forgot password?</NavLink>
                  </Flex>
                  <Button
                    size="lg"
                    type="submit"
                    isLoading={login.isPending}
                    isDisabled={!dirty}
                    rightIcon={
                      <MdOutlineArrowCircleDown
                        style={{ transform: 'rotate(-90deg)' }}
                      />
                    }
                  >
                    Log In
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
