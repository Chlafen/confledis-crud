import React, {useEffect, useState} from 'react';
import * as produitController from '../../requests/produit.requests';
import { useNavigate } from "react-router-dom";
import Button from '../Button/Button';
import './index.css';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';


const ProduitTable = ({
  produits
}) => {
  const [myProduits, setMyProduits] = useState([]);
  const navigate = useNavigate();

  const onDelete = async (id) => {
    await produitController.deleteProduit(id);
    window.location.reload();
  };

  const onUpdate = async (id) => {
    navigate(`/produits/${id}`);
  };

  useEffect(() => {
    setMyProduits(produits);
  }, [produits]);

  if (!myProduits || myProduits.length === 0) {
    return <p>Aucun produit</p>;
  }

  return (
    <table className='produits-table'>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Supprimer</th>
          <th>Modifier</th>
        </tr>
      </thead>
      <tbody>
        {myProduits.map((produit, key) => (
          <tr key={key}>
            <td>{produit.nom}</td>
            <td>{produit.quantite}</td>
            <td>{produit.prix}</td>
            <td>
              <Button callback={()=>onDelete(produit.id)} >
                <AiFillDelete color="white" />
              </Button>
            </td>
            <td>
              <Button callback={()=>onUpdate(produit.id)} >
                <AiFillEdit color="white" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProduitTable;
