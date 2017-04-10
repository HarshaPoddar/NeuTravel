import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { LoggedInUserDetails } from "app/ClassFiles/logged-in-user-details";
import { ListOfProjects } from "app/ClassFiles/projects";
import { ListOfEmployees } from "app/ClassFiles/list-of-employees";
import { TravelRequestDetails } from "app/ClassFiles/travel-request-details";
import { NeuTravelService } from "app/services/neu-travel.service";
import { ListOfCities } from "app/ClassFiles/list-of-cities";
import { TravelReqForm } from "app/ClassFiles/travel-req-form";
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from "angular2-modal/esm";
import { Router } from '@angular/router'

@Component({
  selector: 'app-travel-reqform',
  templateUrl: './travel-reqform.component.html',
  styleUrls: ['./travel-reqform.component.css'],
  providers: [NeuTravelService, Modal, Overlay]
})

export class TravelReqformComponent implements OnInit {
  constructor(private neuTravelService: NeuTravelService, private modal: Modal, overlay: Overlay, vcRef: ViewContainerRef, private router: Router) {
    overlay.defaultViewContainer = vcRef;
  }

  //Variables to store the data retrieved from the service 
  travelRequestFormGroup: FormGroup;
  listOfProjects: ListOfProjects[];
  listOfEmployees: ListOfEmployees[];
  travelRequestDetails: TravelReqForm;
  formBuilder: FormBuilder;
  loggedInUser: LoggedInUserDetails;
  cities: ListOfCities[];
  travelreqfrom: FormControl;



  //Intialising Form Controls
  ngOnInit() {
    this.travelRequestFormGroup = new FormGroup({
      EmployeeName: new FormControl(),
      ProjectName: new FormControl('', Validators.required),
      PurposeOfTravel: new FormControl('', Validators.required),
      TravelFrom: new FormControl('', Validators.required),
      TravelTo: new FormControl('', Validators.required),
      StartDate: new FormControl('', Validators.required),
      EndDate: new FormControl('', Validators.required)
    });


    //Service calls to get the LoggedInUserRole,ListOfEmployees and ListofProjects.
    this.neuTravelService.GetProjectList().subscribe(data => this.listOfProjects = data);
    this.neuTravelService.GetEmploYeeList().subscribe(data => this.listOfEmployees = data);
    this.neuTravelService.GetUserRoles().subscribe(data => this.loggedInUser = data);
    this.neuTravelService.GetListOfCities().subscribe(data => this.cities = data);
  }

  //PostData To the service on the click of submitbutton
  onSubmit() {
    if (this.travelRequestFormGroup.status != "INVALID") {
      this.loggedInUser = this.neuTravelService.getUserDetails();
      this.travelRequestDetails = this.travelRequestFormGroup.value;
      this.neuTravelService.SubmitFormDetails(this.travelRequestDetails, this.loggedInUser);
      this.travelRequestFormGroup.reset();

      //Inform the user if travel is intiated and route back to main page
      this.modal.alert()
        .open()
        .then(result => {
          alert("TravelIntiated");
          close();
        })
        .then(onkeypress=>
          this.router.navigate(['Welcome']));
    }
  }

  //Clear the input fields on cancel
  onCancel() {
    this.travelRequestFormGroup.reset();
  }
}


