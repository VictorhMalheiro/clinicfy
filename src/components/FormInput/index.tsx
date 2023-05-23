import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import {
  FieldError,
  FieldValues,
  UseFormRegister,
  DeepMap,
  DeepPartial,
  Path,
} from 'react-hook-form';

interface FormInputProps<T> {
  id: keyof T;
  label: string;
  register: UseFormRegister<T>;
  errors: DeepMap<DeepPartial<T>, FieldError>;
}

export default function FormInput<T extends FieldValues>({
  id,
  label,
  register,
  errors,
}: FormInputProps<T>) {
  const error = errors[id as Path<T>] as FieldError | undefined;

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id as string}>{label}</FormLabel>
      <Input id={id as string} placeholder={label} {...register(id)} />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
}
