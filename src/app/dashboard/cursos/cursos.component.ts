import { Component, OnDestroy } from '@angular/core';
import { Curso } from './models';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnDestroy{

  cursos$ : Observable<Curso[]>;

  cursos : Curso[]= [];
  cursosSubscription: Subscription;

  constructor(private cursosService : CursosService){
    this.cursos$ = this.cursosService.getCursos();

    this.cursosService.getCursos()
/*     .subscribe({
      next: (curso)=> {
        this.cursos =curso;
      }
    }) */;

    this.cursosSubscription = this.cursosService.getCursos()
      .subscribe({
        next :(cursos) =>{
          this.cursos= cursos;
        },
        error:(err) =>{

        }
      });
  }
  ngOnDestroy(): void {
    this.cursosSubscription.unsubscribe();
  }



}
