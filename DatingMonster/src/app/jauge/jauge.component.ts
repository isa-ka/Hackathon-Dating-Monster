import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-jauge',
  templateUrl: './jauge.component.html',
  styleUrls: ['./jauge.component.css']
})
export class JaugeComponent implements OnInit {
  value:number = 0;

  constructor(public responseService: ResponseService) { }

  ngOnInit() {
    setInterval(()=>{
      this.setValue()
    }, 1000)
  };
  

  setValue(){
  this.value = this.responseService.seductionPoints;
  console.log(this.value)
  }

}
