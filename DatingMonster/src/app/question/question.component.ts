import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResponseService } from '../response.service';
import { Question } from '../question';

 
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Output() responseClick = new EventEmitter<Response>();

  constructor() { }
 

  ngOnInit() {}
  

  updateQuestion(response: Response)
  {
    this.responseClick.emit(response);
  }

}
