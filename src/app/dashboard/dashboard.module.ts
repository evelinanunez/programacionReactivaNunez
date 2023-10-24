import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CursosComponent } from './cursos/cursos.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DashboardComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
