import {
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
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

interface RadioOption {
  value: string;
  label: string;
}

interface FormRadioProps<T> {
  id: keyof T;
  label: string;
  options: RadioOption[];
  register: UseFormRegister<T>;
  errors: DeepMap<DeepPartial<T>, FieldError>;
}

export default function FormRadio<T extends FieldValues>({
  id,
  label,
  options,
  register,
  errors,
}: FormRadioProps<T>) {
  const error = errors[id as Path<T>] as FieldError | undefined;

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id as string}>{label}</FormLabel>
      <RadioGroup defaultValue="" id={id as string}>
        <Stack direction="row">
          {options.map((option) => (
            <Radio key={option.value} value={option.value} {...register(id)}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
}
