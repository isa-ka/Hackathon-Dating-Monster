import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ResponseService } from '../response.service';
import { Response } from '../response';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  questions: Question[];
  currentQuestion: Question;

  constructor(public responseService: ResponseService) { }

  ngOnInit() {
   this.questions = this.responseService.questions;
   this.currentQuestion = this.responseService.currentQuestion;
  }

  nextQuestion(response: Response)
  {
    this.currentQuestion = this.responseService.sendResponse(response);
  }
 


  

}
