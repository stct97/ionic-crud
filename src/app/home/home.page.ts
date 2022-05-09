import { Component, OnInit } from '@angular/core';

import { ElementoService } from './elemento.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  elementos = [];
  constructor(
    private elementoService: ElementoService,
    private httpClient: HttpClient
  ) {}

  console_log(params: any) {
    console.log(params);
  }

  anadir_elemento_home(
    nombre: HTMLInputElement,
    descripcion: HTMLInputElement,
    estado: HTMLInputElement
  ) {
    this.elementoService.anadir_elemento(
      nombre.value,
      descripcion.value,
      estado.value
    );
    return (this.elementos = this.elementoService.traer_todos_los_elementos());
  }

  eliminar_elemento_home(id: number) {
    this.elementoService.eliminar_elemento(id);
    return (this.elementos = this.elementoService.traer_todos_los_elementos());
  }

  modificar_elemento_home(
    id: number,
    nombre: string,
    descripcion: string,
    estado: string
  ) {
    console.log(id, nombre, descripcion, estado);
    this.elementoService.modificar_elemento(id, nombre, descripcion, estado);
    return (this.elementos = this.elementoService.traer_todos_los_elementos());
  }

  ngOnInit() {
    this.elementos = this.elementoService.traer_todos_los_elementos_api();
    return this.elementos;
  }
}
