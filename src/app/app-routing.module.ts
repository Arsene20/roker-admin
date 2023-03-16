import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembreComponent } from './membre/membre.component';

const routes: Routes = [
  {
    path:'',
    component: MembreComponent,
    loadChildren: () => import('./membre/membre.module').then(m => m.MembreModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
