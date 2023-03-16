import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreRoutingModule } from './membre-routing.module';
import { MembreComponent } from './membre.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MembreComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    SharedModule,
    MembreRoutingModule
  ]
})
export class MembreModule { }
