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
   this.audio = new Audio('../../assets/shub4.mp3');
   this.audio.play();
   console.log(this.numberBackground1);
  }

  nextQuestion(response: Response)
  {
    this.currentQuestion = this.responseService.sendResponse(response);
    this.audio = new Audio('../../assets/shub4.mp3');
    this.audio.play();
    this.numberBackground1 = this.responseService.index;
    this.changeBackground();
  }

  changeBackground(){
    if (this.numberBackground1 < 5){
      this.backgroundImage = "url(/assets/Img/backgroundBar.jpg)";
      console.log(this.numberBackground1);
    }
    if (this.numberBackground1 >= 5 && this.numberBackground1 < 9 ){
      this.backgroundImage = "url(/assets/Img/clublucifer.jpg)";
      console.log(this.numberBackground1);
      if ( this.responseService.seductionPoints <=30){
        this.redirectgameOver();
      }
    }
    if (this.numberBackground1 >= 9 && this.numberBackground1 < 11 ){
      this.backgroundImage = "url(/assets/Img/cimetiere.jpg)";
      console.log(this.numberBackground1);
    }
    if (this.numberBackground1  >= 11  ){
      this.backgroundImage = "url(/assets/Img/eglise.jpg)";
      console.log(this.numberBackground1);
      if ( this.responseService.seductionPoints >= 200 )
        this.redirectVictory();
      else if (this.responseService.seductionPoints <= 0){
        this.redirectgameOver();
      }
    }
  }
 
  redirectgameOver(){
    window.location.pathname = "/gameover"
  }

  redirectVictory(){
    window.location.pathname = "/victory"
  }

  

}
