import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '../response';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {
  @Input() response: Response;
  @Output() sendResponse = new EventEmitter<Response>();

  constructor(public response_service: ResponseService) { 
  }

  ngOnInit() {

  }


  
  


}
