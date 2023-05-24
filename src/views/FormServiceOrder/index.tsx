import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@chakra-ui/react';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import FormRadio from 'components/FormRadio';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
}

export default function FormServiceOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [data, setData] = useState<FormData>();

  const onSubmit = (dataForm: FormData) => {
    alert(JSON.stringify(dataForm));
    setData(dataForm);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  // Função auxiliar para converter uma string em um ArrayBuffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  const generateExcelFile = () => {
    // Obtém os dados do formulário
    const formData = data;
    // Aqui você deve acessar os valores dos campos do formulário
    // e estruturá-los em um objeto conforme necessário para gerar o arquivo Excel
    // };

    // Cria um novo workbook
    const workbook = XLSX.utils.book_new();

    // Cria uma nova planilha com os dados do formulário
    const worksheet = XLSX.utils.json_to_sheet([formData]);

    // Adiciona a planilha ao workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados do Formulário');

    // Converte o workbook para um arquivo Excel
    const excelFile = XLSX.write(workbook, {
      type: 'binary',
      bookType: 'xlsx',
    });

    // Converte o arquivo Excel para um Blob
    const excelBlob = new Blob([s2ab(excelFile)], {
      type: 'application/octet-stream',
    });

    // Salva o arquivo Blob como um arquivo Excel
    saveAs(excelBlob, 'dados_formulario.xlsx');
  };

  return (
    <Box display="flex" flex={1} flexDir="column" maxW="100vw">
      <Box p={6}>
        <Link to="/">
          <Button
            colorScheme="teal"
            size="sm"
            leftIcon={<ArrowLeft size={32} />}
          />
        </Link>
      </Box>
      <Box display="flex" flex={1} flexDir="column" maxW="100vw">
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
          {!!data && <Button onClick={generateExcelFile}>Gerar arquivo</Button>}
          <Button type="submit" colorScheme="blue">
            Cadastrar
          </Button>
        </form>
      </Box>
    </Box>
  );
}
