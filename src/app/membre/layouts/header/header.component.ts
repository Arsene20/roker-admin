import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // new PerfectScrollbar(".header-message-list"), new PerfectScrollbar(".header-notifications-list")
  }


}
