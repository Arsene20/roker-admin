import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit{

  ngOnInit(): void {
    console.log("Commande");
  }

}
