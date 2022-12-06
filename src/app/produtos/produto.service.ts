import { Injectable } from '@angular/core';
import { Produto } from '../model/model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
  })

export class ProdutoService {

    constructor(private storage :Storage){}

    inserir(argumento: Produto){
         argumento.id = Guid.create()
         this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
    }

    async listarTodos() {
        let arrayProduto: Produto [] = [];
    
        await this.storage.forEach((value: string) => 
            {const produto: Produto = JSON.parse(value); arrayProduto.push(produto)})
    
        return arrayProduto;
      } 


}