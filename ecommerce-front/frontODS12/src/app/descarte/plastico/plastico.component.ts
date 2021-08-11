import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plastico',
  templateUrl: './plastico.component.html',
  styleUrls: ['./plastico.component.css']
})
export class PlasticoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

}
