import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descarte',
  templateUrl: './descarte.component.html',
  styleUrls: ['./descarte.component.css']
})
export class DescarteComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

}
