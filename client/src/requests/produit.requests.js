import axios from 'axios';


export async function getProduits() {
  const response = await axios.get('/api/produit');
  return response.data;
} 

export async function getProduit(id) {
  const response = await axios.get(`/api/produit/${id}`);
  return response.data;
}

export async function createProduit({
  nom,
  prix,
  quantite
}) {
  const payload = {
    nom,
    prix: Number(prix),
    quantite: Number(quantite)
  };
  const response = await axios.post('/api/produit', payload);
  
  if(response.status !== 201) {
    throw new Error('Echec de création du produit');
  }
  return response.data;
}

export async function updateProduit(
  id,
  {
    nom,
    prix,
    quantite
  }) { 
  const payload = {
    nom,
    prix: Number(prix),
    quantite: Number(quantite)
  };
  
  const response = await axios.put(`/api/produit/${id}`, payload);
  console.log(response.status);
  if(response.status !== 200 ) {
    throw new Error('Echec de modification du produit');
  }
}

export async function deleteProduit(id) {
  const response = await axios.delete(`/api/produit/${id}`);
  if(response.status !== 200) {
    throw new Error('Echec de suppression du produit');
  }
  return response.data;
}