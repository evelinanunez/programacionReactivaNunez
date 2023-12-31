import { Injectable } from '@angular/core';
import { Curso } from './models';
import { Observable, of, interval ,map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): Observable<Curso[]>{
    return of([
      {
        id: 1,
        titulo: "Introducción a TypeScript",
        descripcion: "Aprende los conceptos básicos de TypeScript.",
        duracionHoras: 10,
        instructor: "Juan Pérez"
      },
      {
        id: 2,
        titulo: "Desarrollo Web con React",
        descripcion: "Aprende a crear aplicaciones web con React.",
        duracionHoras: 20,
        instructor: "María López"
      },
      {
        id: 3,
        titulo: "Programación en Python",
        descripcion: "Domina el lenguaje de programación Python.",
        duracionHoras: 15,
        instructor: "Luis García"
      },
      {
        id: 4,
        titulo: "Diseño Gráfico con Photoshop",
        descripcion: "Crea diseños impresionantes con Photoshop.",
        duracionHoras: 12,
        instructor: "Ana Martínez"
      },
      {
        id: 5,
        titulo: "Machine Learning con Python",
        descripcion: "Aprende a construir modelos de Machine Learning en Python.",
        duracionHoras: 25,
        instructor: "Carlos Rodríguez"
      }
    ]);
  }

  getCounter(): Observable<number> {
    return interval(1000);
  }

  getHora(): Observable<string> {
    return interval(1000).pipe(
      map(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      }))
  }

}
