import { useForm } from 'react-hook-form';
import { Input, Button, FormControl } from '@chakra-ui/react';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import FormRadio from 'components/FormRadio';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
}

export default function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div>
      <h1>Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="nome"
          label="Nome completo"
          register={register}
          errors={errors}
        />
        <FormRadio
          id="myRadio"
          label="Select an option"
          options={options}
          register={register}
          errors={errors}
        />
        <FormInput
          id="email"
          label="Email"
          register={register}
          errors={errors}
        />
        {/* <FormControl>
          <Input type="tel" placeholder="Telefone" {...register('telefone')} />
        </FormControl> */}
        <FormInput
          id="telefone"
          label="Telefone"
          register={register}
          errors={errors}
        />
        <FormSelect
          id="mySelect"
          label="Select an option"
          options={options}
          register={register}
          errors={errors}
        />
        <Button type="submit" colorScheme="blue">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
