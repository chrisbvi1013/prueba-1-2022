import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
 nombre: string = "iron man";
 edad  : number = 39;

 get capitalizar() {
    return this.nombre.toUpperCase();
 }

 obtener(): string {
    return `${ this.nombre} - ${ this.edad }`;
 }

 cambiarNombre(): void {
    this.nombre = "spiderman";
 }

 cambiarEdad(): void {
    this.edad = 93;
 }
}
