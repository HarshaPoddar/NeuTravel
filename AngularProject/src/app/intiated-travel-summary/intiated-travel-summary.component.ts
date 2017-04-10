import { Component, OnInit, Input } from '@angular/core';
import { NeuTravelService } from "app/services/neu-travel.service";
import { TravelRequestDetails } from "app/ClassFiles/travel-request-details";
import { LoggedInUserDetails } from "app/ClassFiles/logged-in-user-details";
import { TravelReqForm } from "app/ClassFiles/travel-req-form";
import { ActivatedRoute } from "@angular/router";
import { ProgressBarComponent } from "app/progress-bar/progress-bar.component";

@Component({
  selector: 'app-intiated-travel-summary',
  templateUrl: './intiated-travel-summary.component.html',
  styleUrls: ['./intiated-travel-summary.component.css'],
  providers: [NeuTravelService],

})

export class IntiatedTravelSummaryComponent implements OnInit {
  //Model To get the logged in user Details
  public loggedInUser: LoggedInUserDetails;
  //Id of the selected travelDetail
  public id: number;
  status: string;
  check: boolean = false;  //Objects to store the form details
  intiatedTravelRequestDetail: TravelReqForm;
  ListOfTravelRequests: TravelReqForm[];

  constructor(private neuTravelService: NeuTravelService, private route: ActivatedRoute) {
    //Get the id of the selected travelrequest from route
    this.id = route.snapshot.params['TravellerId'];
  }

  ngOnInit() {
    //Service calls to get the loggedin user,TravelRequests
    //And selected travel request
    this.neuTravelService.GetUserRoles().subscribe(data => {
      this.loggedInUser = data;
      this.neuTravelService.GetIntiatedTravelDetails(this.loggedInUser).subscribe(data => {
        this.ListOfTravelRequests = data;
        this.intiatedTravelRequestDetail = this.neuTravelService.getTravelSummaryDetails(this.id, this.ListOfTravelRequests);
        console.log(this.ListOfTravelRequests);
        this.status = this.neuTravelService.getIntiatedTravelStatus(this.intiatedTravelRequestDetail.Status);
        console.log(this.status);
      
      });
    });
  }
  
}



