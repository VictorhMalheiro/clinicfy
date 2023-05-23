import {
  FormControl,
  FormLabel,
  Select,
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

interface SelectOptions {
  value: string;
  label: string;
}

interface FormSelectProps<T> {
  id: keyof T;
  label: string;
  options: SelectOptions[];
  register: UseFormRegister<T>;
  errors: DeepMap<DeepPartial<T>, FieldError>;
}

export default function FormSelect<T extends FieldValues>({
  id,
  label,
  options,
  register,
  errors,
}: FormSelectProps<T>) {
  const error = errors[id as Path<T>] as FieldError | undefined;

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id as string}>{label}</FormLabel>
      <Select id={id as string} placeholder={label} {...register(id)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
}
