import React from 'react';
import './index.css';
import * as produitController from '../../requests/produit.requests';
import { useNavigate } from 'react-router-dom';

const AddProduit = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nom = formData.get('nom');
    const quantite = formData.get('quantite');
    const prix = formData.get('prix');
    await produitController.createProduit({ nom, quantite, prix });
    navigate('/');
  };

  return (
    <div className='add-produit'>
      <h1 className='page-title'>Ajouter un produit</h1>
      <form onSubmit={handleSubmit}>
        <div className='add-produit-form'>
          <label htmlFor='nom'>Nom</label>
          <input type='text' name='nom'/>

          <label htmlFor='quantite'>Quantité</label>
          <input type='number' name='quantite'/>

          <label htmlFor='prix'>Prix</label>
          <input type='number' name='prix'/>

          <button type='submit'>Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduit;
