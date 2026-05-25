import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  imports: [],
  templateUrl: './calcula-media.html',
  styleUrls: ['./calcula-media.scss'],
})
export class CalculaMedia {

  protected mediaParcial: number | undefined;
  protected mediaFinal: number | undefined;
  protected situacao: string = '';

  calcularMediaParcial(
    b1: number,
    b2: number,
    b3: number,
    b4: number
  ) {

    this.mediaParcial =
      (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10;

    
    if (this.mediaParcial >= 60) {

      
      this.mediaFinal = this.mediaParcial;

      this.situacao = 'Aprovado';
    }
    else {

      
      this.mediaFinal = undefined;

      this.situacao = 'Avaliação Final';
    }
  }

  calcularMediaFinal(fn: number) {

    if (this.mediaParcial !== undefined) {

      this.mediaFinal =
        (this.mediaParcial + fn) / 2;

      if (this.mediaFinal >= 60) {
        this.situacao = 'Aprovado';
      }
      else {
        this.situacao = 'Reprovado';
      }
    }
  }
}