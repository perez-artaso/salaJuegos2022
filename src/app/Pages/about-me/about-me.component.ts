import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  reveal: boolean[] = [false, false];

  constructor() { }

  ngOnInit(): void {
    
  }

  private revealElements (index: number): void {
    
  }

}
