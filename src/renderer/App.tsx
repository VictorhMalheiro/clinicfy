import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from 'views/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
