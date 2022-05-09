import { Injectable } from '@angular/core';
import { Elemento } from './elemento-model';

@Injectable({
  providedIn: 'root',
})
export class ElementoService {
  private elementos: Elemento[] = [];
  constructor() {}

  traer_todos_los_elementos() {
    return [...this.elementos];
  }

  mostrar_datos(nombre:string){
    console.log(nombre);
  }

  anadir_elemento(nombre: string, descripcion: string, estado: string) {
    this.elementos.push({
      id: this.elementos.length + 1,
      nombre,
      descripcion,
      estado,
    });

    console.log(this.elementos)
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
      elemento.id === id
        ? { ...elemento, nombre, descripcion, estado }
        : elemento
    );
    console.log(this.elementos);
  }
}
