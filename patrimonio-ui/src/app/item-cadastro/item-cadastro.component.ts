import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemService } from './item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private service: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  private consultar() {
    this.service.listar().subscribe( i => this.itens = i);
  }

  public adicionar(formulario: FormControl) {
    // console.log(formulario.value);
    this.service.adicionar(formulario.value).subscribe(
      () => {
        formulario.reset();
        this.consultar();
      }
    );

  }

}
