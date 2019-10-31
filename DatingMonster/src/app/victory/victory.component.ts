import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-victory',
  templateUrl: './victory.component.html',
  styleUrls: ['./victory.component.css']
})
export class VictoryComponent implements OnInit {

   audio;

  constructor() { }

  ngOnInit() {
    this.audio = new Audio('../../assets/mariage.mp3');
    this.audio.play();
  }

}
