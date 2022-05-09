import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Elemento } from './elemento-model';

@Injectable({
  providedIn: 'root',
})
export class ElementoService implements OnInit {
  private elementos: Elemento[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.traer_todos_los_elementos();
  }

  traer_todos_los_elementos() {
    return [...this.elementos];
  }

  traer_todos_los_elementos_api() {
    this.httpClient
      .get('http://localhost:3000/elementos')
      .subscribe((elementos) => {
        Object.values(elementos).map(
          (elemento) =>
            (this.elementos = this.anadir_elemento(
              elemento.nombre,
              elemento.descripcion,
              elemento.estado
            ))
        );
      });
    return this.elementos;
  }

  mostrar_datos(nombre: string) {
    console.log(nombre);
  }

  anadir_elemento(nombre: string, descripcion: string, estado: string) {
    this.elementos.push({
      id: this.elementos.length + 1,
      nombre,
      descripcion,
      estado,
    });
    return this.elementos;
  }

  eliminar_elemento(id: number) {
    this.elementos = this.elementos.filter((elemento) => elemento.id !== id);
  }

  modificar_elemento(
    id: number,
    nombre: string,
    descripcion: string,
    estado: string
  ) {
    this.elementos = this.elementos.map((elemento) =>
      elemento.id === id - 1
        ? { ...elemento, nombre, descripcion, estado }
        : elemento
    );
    console.log(this.elementos);
  }
}
