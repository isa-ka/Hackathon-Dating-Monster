import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  questions: Question[];
  currentQuestion: Question;
  numberBackground = 0;

  constructor(public responseService: ResponseService) { }

  ngOnInit() {
   this.questions = this.responseService.questions;
   this.currentQuestion = this.responseService.currentQuestion;
  }

}
