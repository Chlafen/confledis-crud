import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produit } from './entities/produit.entity';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>,
  ) {}
  create(createProduitDto: CreateProduitDto) {
    return this.produitRepository.save(createProduitDto);
  }

  findAll() {
    return this.produitRepository.find();
  }

  findOne(id: string) {
    return this.produitRepository.findOne({ where: { id } });
  }

  update(id: string, updateProduitDto: UpdateProduitDto) {
    return this.produitRepository.update(id, updateProduitDto);
  }

  remove(id: string) {
    return this.produitRepository.delete(id);
  }
}
