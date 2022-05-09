import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Elemento } from './elemento-model';
import { ElementoService } from './elemento.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  elementos = [];
  constructor(
    private elementoService: ElementoService,
    private router: Router
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

  ngOnInit() {
    return (this.elementos = this.elementoService.traer_todos_los_elementos());
  }
}
