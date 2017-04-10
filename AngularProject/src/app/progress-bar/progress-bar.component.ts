import { Component, OnInit, Input } from '@angular/core';
import { IntiatedTravelSummaryComponent } from "app/intiated-travel-summary/intiated-travel-summary.component";
import { NeuTravelService } from  "app/services/neu-travel.service";
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(private neuTravelService: NeuTravelService) { }
   @Input() status: string;
  CheckStatus: IntiatedTravelSummaryComponent;
  check: boolean = false;
  ngOnInit() { 
   if (this.status == "In Progress") {
      this.check = true;
    }   
    else if(this.status =="Cancelled"){
      this.check = true;
    }
    else if(this.status =="Completed"){
      this.check = true;
    }
    else
    this.check = false;
  }
}

