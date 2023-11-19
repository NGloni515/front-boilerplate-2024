import { Input as ChakraInput, InputProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';

import { InputBase, InputBaseProps } from './InputBase';

type Props = InputProps & InputBaseProps & { isStringValue?: boolean };

export function Input({
  name,
  id,
  isStringValue,
  leftAddon,
  leftElement,
  rightAddon,
  rightElement,
  requiredSign,
  setPassword,
  isPassword,
  ...props
}: Props) {
  const [field] = useField(name ?? id);
  const { setFieldValue } = useFormikContext();

  return (
    <InputBase
      id={id}
      name={name ?? id}
      leftAddon={leftAddon}
      leftElement={leftElement}
      rightAddon={rightAddon}
      rightElement={rightElement}
      requiredSign={requiredSign}
      setPassword={setPassword}
      isPassword={isPassword}
      {...props}
    >
      <ChakraInput
        {...field}
        onChange={
          isStringValue
            ? (event: any) => setFieldValue(field.name, event.target.value)
            : field.onChange
        }
        {...props}
      />
    </InputBase>
  );
}
