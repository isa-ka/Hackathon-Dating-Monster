import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  questions: Question []= this.response_service.questions
  currentIndex: number = 0;
  currentQuestion: Question;
  constructor(public response_service: ResponseService) { }

  ngOnInit() {
    this.currentQuestion = this.questions[this.currentIndex];
  }

}
