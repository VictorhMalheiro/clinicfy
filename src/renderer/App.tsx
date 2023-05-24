import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from 'views/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';
import FormServiceOrder from 'views/FormServiceOrder';

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" index element={<Dashboard />} />
          <Route path="form-service-order" element={<FormServiceOrder />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
