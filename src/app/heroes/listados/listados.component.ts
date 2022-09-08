import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html'
})
export class ListadosComponent {

  heroe: string[] = ['1', "2", "3", "4"];
  hb = "";

  borrarH(): void{
    this.hb = this.heroe.splice(0, 1).toString();
  }

}
