import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';

 
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  

  constructor(public response_service: ResponseService) { }

  ngOnInit() {
    
  }
  

}
