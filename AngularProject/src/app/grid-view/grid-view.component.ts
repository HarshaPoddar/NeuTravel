import { Component, Input, OnInit,Pipe } from '@angular/core';
import { TravelRequestDetails } from "app/ClassFiles/travel-request-details";
import { NeuTravelService } from "app/services/neu-travel.service";
import { LoggedInUserDetails } from "app/ClassFiles/logged-in-user-details";
import { TravelReqForm } from "app/ClassFiles/travel-req-form";
@Component({
  selector: 'app-gridView',
  templateUrl: './grid-View.component.html',
  styleUrls: ['./grid-View.component.css'],
  providers: [NeuTravelService],
})

export class GridViewComponent implements OnInit 
{
  selectedRow : Number;
    setClickedRow : Function;
  constructor(private neuTravelService: NeuTravelService, private loggedInUser: LoggedInUserDetails) {
    this.setClickedRow = function(index){
            this.selectedRow = index;
            this.rowIndex = index;
      }
      
   }

  //Object to strore the intiatedTravelRequestDetails
  intiatedTravelRequestDetails: TravelReqForm[];

  ngOnInit(): void {
    //Service calls to get the loggedinuser and list of travel requests
    this.neuTravelService.GetUserRoles().subscribe(data => {
      this.loggedInUser = data;
      this.neuTravelService.GetIntiatedTravelDetails(this.loggedInUser).subscribe(data => { this.intiatedTravelRequestDetails = data.slice().reverse();
  });  
  });
  }
}
