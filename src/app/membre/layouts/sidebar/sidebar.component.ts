import {Component, ElementRef, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {

    $(".toggle-icon").click(function() {
      $(".wrapper").hasClass("toggled") ? ($(".wrapper").removeClass("toggled"), $(".sidebar-wrapper").unbind("hover")) : ($(".wrapper").addClass("toggled"), $(".sidebar-wrapper").hover(function() {
        $(".wrapper").addClass("sidebar-hovered")
      }, function() {
        $(".wrapper").removeClass("sidebar-hovered")
      }))
    });

    // Ajoute la classe "active" à l'élément du menu correspondant à la page courante
    const location = window.location;
    const menu = $(this.elementRef.nativeElement).find('.metismenu');
    let activeItem = menu.find('a[href="' + location + '"]').addClass('').parent().addClass('mm-active');
    while (activeItem.is('li')) {
      activeItem = activeItem.parent('').addClass('mm-show').parent('').addClass('mm-active');
    }

    // Initialise le menu avec MetisMenu
    $(this.elementRef.nativeElement).find('#menu').metisMenu();
  }

}
