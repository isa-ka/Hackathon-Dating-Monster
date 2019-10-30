import { Component, OnInit } from '@angular/core';
import { Response } from '../response';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  responses: Response[];
  seductionPoints: number = 0;

  constructor(public response_service: ResponseService) { 
  }

  ngOnInit() {
    this.responses = this.response_service.showResponses(0);
    console.log(this.responses);
    console.log(this.seductionPoints)
  }

  sendResponse(response: Response)
  {
    
    this.seductionPoints = this.seductionPoints + response.seduction;
    
  }


  
  


}
