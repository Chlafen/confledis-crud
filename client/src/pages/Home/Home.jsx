import React, { useEffect, useState } from 'react';
import * as produitController from '../../requests/produit.requests';
import { useQuery } from "react-query";
import SearchBar from '../../components/SearchBar/SearchBar';
import ProduitTable from '../../components/ProduitTable/ProduitTable';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { data: produits, isLoading, error } = useQuery("produits", produitController.getProduits);
  const [filteredProduits, setFilteredProduits] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    setFilteredProduits(
      produits
    );
  }, [produits]);
  
  const callback = (search) => {
    setFilteredProduits(
      produits.filter(
        produit => produit.nom.toLowerCase().includes(search.toLowerCase())
        )
    );
  };



  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(error){
    return <div>Erreur lors du chargement des produits</div>
  }
  console.log(filteredProduits);

  return (
    <div className='home'>
      <h1 className='page-title'>Catalogue Produits</h1>
      <div className='home-search'>
        <SearchBar callback={callback} />
        <button className='add-produit-btn' onClick={()=>navigate('/add')}>+</button>
      </div>
      <div className="produits">
        <ProduitTable produits={filteredProduits} />
      </div>
    </div>
  );
}

export default Home;
