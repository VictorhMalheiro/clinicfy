import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Cadastro de Clientes</h1>
      <Box>
        <p>Abrir ordem de Serviço</p>
        <Button colorScheme="teal" size="lg">
          <Link to="/form-service-order">Ir para o formulário</Link>
        </Button>
      </Box>
    </div>
  );
}
