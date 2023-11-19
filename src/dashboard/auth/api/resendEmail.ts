import { useMutation } from 'react-query';

import { axios } from '@/libs/axios';
import { MutationConfig } from '@/libs/react-query';

export type emailDTO = {
  email: string;
};

export const resendEmail = (data: emailDTO): Promise<string> => {
  return axios.post('/users/resend_email', data);
};

type UseResendEmailOptions = {
  config?: MutationConfig<typeof resendEmail>;
};

export const useResendEmail = ({ config }: UseResendEmailOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: resendEmail,
  });
};
