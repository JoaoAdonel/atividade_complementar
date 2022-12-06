import { Component, OnInit} from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Produto } from '../model/model'; 
import { ProdutoService } from '../produtos/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private pessoa: Produto
  public pessoaForm: FormGroup
  public arrayProduto: any

  constructor(private formBuilder: FormBuilder, private produtoService :ProdutoService) {}



  enviar(){
    if (this.pessoaForm.valid){
      this.produtoService.inserir(this.pessoaForm.value)
    }
  }

  ngOnInit(){
    this.pessoa = {id: Guid.createEmpty(), nome:""}
    this.pessoaForm = this.formBuilder.group
    ({
      id : [this.pessoa.id],
      nome : [this.pessoa.nome, Validators.required]
    })
  
  
  this.produtoService.listarTodos().then(this.arrayProduto => {this.arrayProduto = this.arrayProduto})
  }


}
