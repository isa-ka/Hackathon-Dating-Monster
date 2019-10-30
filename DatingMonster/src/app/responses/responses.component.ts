import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '../response';
import { ResponseService } from '../response.service';
import { Question } from '../question';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  @Input() responses: Response[];
  @Output() responseClick = new EventEmitter<Response>();

  constructor() {}

  ngOnInit() {

  }

  sendResponse(response: Response)
  {
    this.responseClick.emit(response);
  }
  


  
  


}
