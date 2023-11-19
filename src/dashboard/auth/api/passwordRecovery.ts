import { useMutation } from 'react-query';

import { axios } from '@/libs/axios';
import { MutationConfig } from '@/libs/react-query';

type emailDTO = {
  email: string;
};

export const passwordRecovery = (data: emailDTO): Promise<string> => {
  return axios.post('/users/password_recovery', data);
};

type UsePasswordRecoveryOptions = {
  config?: MutationConfig<typeof passwordRecovery>;
};

export const usePasswordRecovery = ({
  config,
}: UsePasswordRecoveryOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: passwordRecovery,
  });
};
