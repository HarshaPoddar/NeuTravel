import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-intiate-travel-req',
  templateUrl: './intiate-travel-req.component.html',
  styleUrls: ['./intiate-travel-req.component.css'],

})
export class IntiateTravelReqComponent implements OnInit {
  //Data to be populated in the grid.
  travelIntiatedDetails: string[];

  constructor() {
    this.travelIntiatedDetails = [];
  }
  ngOnInit() {
  }
}




