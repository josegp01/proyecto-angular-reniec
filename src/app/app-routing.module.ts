import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaDniComponent } from './consulta-dni/consulta-dni.component';

const routes: Routes = [
  { path: '', component: ConsultaDniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
