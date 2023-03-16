import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit{

  ngOnInit(): void {
    document.body.className = "pace-done"
  }

}
