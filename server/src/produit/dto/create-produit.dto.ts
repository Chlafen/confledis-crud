import { IsNumber, IsString } from 'class-validator';

export class CreateProduitDto {
  @IsString()
  nom: string;

  @IsNumber()
  prix: number;

  @IsNumber()
  quantite: number;
}
