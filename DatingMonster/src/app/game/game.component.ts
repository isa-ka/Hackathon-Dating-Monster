import { Component, OnInit, Input } from '@angular/core';
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
  audio;
  numberBackground1 : number;
  backgroundImage: string ;

  constructor(public responseService: ResponseService) { }

  ngOnInit() {
   this.questions = this.responseService.questions;
   this.currentQuestion = this.responseService.currentQuestion;
  }

  nextQuestion(response: Response)
  {
    this.currentQuestion = this.responseService.sendResponse(response);
    this.audio = new Audio('../../assets/shub4.mp3');
    this.audio.play();
    this.numberBackground1 = this.responseService.index;
    this.changeBackground();
    console.log(this.numberBackground1);
  }

  changeBackground(){
    if (this.numberBackground1 < 5){
      this.backgroundImage = "url(/assets/Img/backgroundBar.jpg)";
    }
    if (this.numberBackground1 >= 5 && this.numberBackground1 < 9 ){
      this.backgroundImage = "url(/assets/Img/clublucifer.jpg)";
    }
    if (this.numberBackground1 >= 9 && this.numberBackground1 < 11 ){
      this.backgroundImage = "url(/assets/Img/cimetiere.jpg)";
    }
    if (this.numberBackground1 >=11  ){
      this.backgroundImage = "url(/assets/Img/eglise.jpg)";
    }
  }
 


  

}
