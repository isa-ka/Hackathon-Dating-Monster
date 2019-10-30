import { Component, OnInit, Input } from '@angular/core';
import { ResponseService } from '../response.service';
import { Question } from '../question';

 
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question ;
  

  constructor(public response_service: ResponseService) { }

  ngOnInit() {
    
  }
  

}
