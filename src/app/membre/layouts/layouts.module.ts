import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedMembreModule } from '../shared-membre/shared-membre.module';
import { SwitcherComponent } from './switcher/switcher.component';
import { BackToTopButtonComponent } from './back-to-top-button/back-to-top-button.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SwitcherComponent,
    BackToTopButtonComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SwitcherComponent,
    BackToTopButtonComponent
  ],
  imports: [
    CommonModule,
    SharedMembreModule,
    RouterModule
  ]
})
export class LayoutsModule { }
