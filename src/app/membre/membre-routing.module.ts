import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutsRouters} from "./layouts/layouts.route";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./page/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: 'commande',
    loadChildren: () => import("./page/commande/commande.module").then(m => m.CommandeModule)
  },
  ...LayoutsRouters,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreRoutingModule { }
