import { Component, Directive } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedInUserDetails } from "app/ClassFiles/logged-in-user-details";
import { NeuTravelService } from "app/services/neu-travel.service";
import { BaseUrl, CreateRequest } from "app/ClassFiles/service-url";
import { TravelReqForm } from "app/ClassFiles/travel-req-form";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NeuTravelService]
})


export class AppComponent {
  ListOfTravelRequests: TravelReqForm[];
  constructor(private neuTravelService: NeuTravelService, private loggedInUser: LoggedInUserDetails, private router: Router, public activeRoute: ActivatedRoute) {
}

  //Variable to check if the loggedinuser is DCS
  CheckDcs: boolean = false;
  //Variable to get the id of the cancelledTravelRequest
  TravelID: number;
  public ngOnInit(): void {

    //Get the loggedinUserDetails        
    this.neuTravelService.GetUserRoles().subscribe(data => {
      this.loggedInUser = data;
      if ((this.loggedInUser.Role = "DCS") && (location.pathname != (BaseUrl + CreateRequest))) {
        this.CheckDcs = true;
      }
    });
    
  }
  OnCancel() {
   this.TravelID= parseInt(this.router.url.substring(21));
    this.loggedInUser = this.neuTravelService.getUserDetails();
    this.neuTravelService.GetIntiatedTravelDetails(this.loggedInUser).subscribe(data => {
      this.ListOfTravelRequests = data;
      this.neuTravelService.CancelTravel(this.TravelID);
      alert("Contents will be deleted");
    this.router.navigate(['Welcome']);

    });
  }
}