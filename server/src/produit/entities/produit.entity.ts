import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nom: string;

  @Column()
  prix: number;

  @Column()
  quantite: number;
}
