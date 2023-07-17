import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './pages/Home/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditProduit from './pages/EditProduit/EditProduit';
import AddProduit from './pages/AddProduit/AddProduit';
import NavBar from './components/NavBar/NavBar';
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          {/* navbar */}
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddProduit/>} />
          <Route path="/produits/:id" element={<EditProduit/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
