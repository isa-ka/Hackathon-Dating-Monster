import { Injectable } from '@angular/core';
import { Response } from './response';
import { QUESTIONS } from './Questions-Mock'
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  questions: Question[] = QUESTIONS;
  index: number = 0;
  currentQuestion: Question = this.questions[this.index];
  seductionPoints: number = 0;
  audio;


  constructor() { }

  sendResponse(response: Response)
  {
    this.seductionPoints = this.seductionPoints + response.seduction;
    this.index++;
    this.currentQuestion = this.questions[this.index];
    return this.currentQuestion;
  };
}