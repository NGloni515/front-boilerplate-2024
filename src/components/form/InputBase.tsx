import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  IconButton,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { ReactNode } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { getDescendantProp } from '@/utils/getDescendantProp';

export type InputBaseProps = {
  label: string;
  id: string;
  requiredSign?: boolean;
  isPassword?: boolean;
  showPassword?: boolean;
  setPassword?: () => void;
  name?: string;
  helperText?: string;
  leftAddon?: JSX.Element;
  rightAddon?: JSX.Element;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  formLabelProps?: FormLabelProps;
};

type Props = { children: ReactNode } & InputBaseProps;

export function InputBase({
  children,
  label,
  id,
  requiredSign,
  isPassword,
  setPassword,
  showPassword,
  helperText,
  name,
  leftAddon,
  leftElement,
  rightAddon,
  rightElement,
  formLabelProps,
}: Props) {
  const { errors, touched } = useFormikContext();
  const fieldHasErrors =
    getDescendantProp(errors, name) && getDescendantProp(touched, name);

  return (
    <FormControl id={id} isInvalid={fieldHasErrors}>
      <FormLabel
        display="flex"
        fontSize="xs"
        color="secondaryGray.900"
        fontWeight="bold"
        _hover={{ cursor: 'pointer' }}
        {...formLabelProps}
      >
        {label}
        {requiredSign && <Text color="indigo.600">*</Text>}
      </FormLabel>
      <InputGroup>
        {leftAddon}
        {leftElement}
        {children}
        {isPassword && (
          <InputRightElement width="3rem" borderRadius="16px">
            <IconButton
              size="xs"
              _hover={{ bgColor: 'gray.400' }}
              _active={{ bgColor: 'gray.500' }}
              onClick={setPassword}
              aria-label="show password"
              variant={'ghost'}
              icon={
                showPassword ? (
                  <MdVisibilityOff size={16} />
                ) : (
                  <MdVisibility size={16} />
                )
              }
            />
          </InputRightElement>
        )}
        {rightAddon}
        {rightElement}
      </InputGroup>
      <FormHelperText style={{ fontSize: 11, letterSpacing: '0.11px' }}>
        {helperText}
      </FormHelperText>
      <FormErrorMessage>{getDescendantProp(errors, name)}</FormErrorMessage>
    </FormControl>
  );
}
