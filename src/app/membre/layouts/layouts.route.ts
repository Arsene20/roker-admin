import { Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import {SwitcherComponent} from "./switcher/switcher.component";
import {BackToTopButtonComponent} from "./back-to-top-button/back-to-top-button.component";

export const LayoutsRouters: Routes=[
    {
        path: '',
        component:HeaderComponent,
        outlet:'header'
    },
    {
        path:'',
        component:SidebarComponent,
        outlet:'sidebar'
    },
    {
      path:'',
      component:BackToTopButtonComponent,
      outlet:'backtopbutton'
    },
    {
        path:'',
        component:SwitcherComponent,
        outlet:'switcher'
    },
    {
        path:'',
        component:FooterComponent,
        outlet:'footer'
    }
];
