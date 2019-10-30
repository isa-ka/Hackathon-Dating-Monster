import { Injectable } from '@angular/core';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {


  responsesIndexQuestion: Response[] = [];

  constructor() { }

  showResponses(index: number)
  {
    for(let i = 0; i < this.responses.length; i++)
    {
      if(this.responses[i].idQuestion == index)
      {
        this.responsesIndexQuestion.push(this.responses[i]);
      }
    }
    return this.responsesIndexQuestion;
  }
}