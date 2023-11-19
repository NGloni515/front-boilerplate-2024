import { useMutation } from 'react-query';

import { axios } from '@/libs/axios';
import { MutationConfig } from '@/libs/react-query';

type changePasswordDTO = {
  password: string;
  uuid: string;
};

export const changePassword = (data: changePasswordDTO): Promise<string> => {
  return axios.post('/users/change_password', data);
};

type UseChangePasswordOptions = {
  config?: MutationConfig<typeof changePassword>;
};

export const useChangePassword = ({
  config,
}: UseChangePasswordOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: changePassword,
  });
};
