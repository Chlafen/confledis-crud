import React from 'react';
import './index.css';
import { useQuery } from 'react-query';
import * as produitController from '../../requests/produit.requests';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduit = () => {
  // get the produit id from the url
  // fetch the produit from the backend
  // display the produit in a form
  // update the produit in the backend
  // redirect to the home page

  const { id } = useParams();
  const { data, isLoading, error } = useQuery(['produit', id], () => produitController.getProduit(id));
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nom = formData.get('nom');
    const quantite = formData.get('quantite');
    const prix = formData.get('prix');
    await produitController.updateProduit(id, { nom, quantite, prix });
    navigate('/');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Erreur lors du chargement du produit</div>;
  }

  return (
    <div className='edit-produit'>
      <h1 className='page-title'>Modifier un produit</h1>
      <form onSubmit={handleSubmit}>
        <div className='edit-produit-form'>
          <label htmlFor='nom'>Nom</label>
          <input type='text' name='nom' defaultValue={data.nom} />

          <label htmlFor='quantite'>Quantité</label>
          <input type='number' name='quantite' defaultValue={data.quantite} />

          <label htmlFor='prix'>Prix</label>
          <input type='number' name='prix' defaultValue={data.prix} />

          <button type='submit'>Modifier</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduit;
