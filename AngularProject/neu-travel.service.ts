import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { DatePipe } from '@angular/common';
import { LoggedInUserDetails } from "app/ClassFiles/logged-in-user-details";
import { ListOfProjects } from "app/ClassFiles/projects";
import { ListOfEmployees } from "app/ClassFiles/list-of-employees";
import { TravelRequestDetails } from "app/ClassFiles/travel-request-details";
import { BaseUrl, GetUserRole, GetProjectList, GetUserList, CreateRequest, GetTravelListingByInitiatorId, GetListOfCities, DeleteRequest } from "app/ClassFiles/service-url";
import { ListOfCities } from "app/ClassFiles/list-of-cities";
import { TravelReqForm } from "app/ClassFiles/travel-req-form";

@Injectable()
export class NeuTravelService {


  constructor(private http: Http)
  { }

  //Models to represent the retrieved data from services 
  public travelRequestDetails: TravelReqForm[];
  public loggedInUser: LoggedInUserDetails;
  public travelSumary: TravelReqForm;
  public travelDetails: TravelReqForm;
  public traveStatus:string;
  //Service Call to get the loggedInuserDetails
  GetUserRoles(): Observable<LoggedInUserDetails> {
    return this.http.get(BaseUrl + GetUserRole).map((res: Response) => {
      var data = res.json();
      this.loggedInUser = data;
      return this.loggedInUser;
    })

  }
  getUserDetails() {
    return this.loggedInUser;
  }
  //Service Call to get the project list
  GetProjectList(): Observable<ListOfProjects[]> {
    return this.http.get(BaseUrl + GetProjectList).map((res: Response) => res.json())
  }

  //Service call to get the Employee list
  GetEmploYeeList(): Observable<ListOfEmployees[]> {
    return this.http.get(BaseUrl + GetUserList).map((res: Response) => res.json())
  }

  //Service Call to post the form details
  SubmitFormDetails(travelDetails: TravelReqForm, userRoles: LoggedInUserDetails) {
    var firstName = userRoles.FirstName;
    var lastName = userRoles.LastName;
    var InitiatorName = firstName + '.' + lastName;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(BaseUrl + CreateRequest + InitiatorName + '/' + travelDetails.EmployeeName + '/' + travelDetails.ProjectName + '/' + travelDetails.TravelFrom + '/' + travelDetails.TravelTo + '/' + travelDetails.StartDate + '/' + travelDetails.EndDate + '/' + travelDetails.PurposeOfTravel, { headers: headers }, options)
      .subscribe((res: Response) => { res.json(); console.log(res); });
  }

  //Service Call to get a list of cities
  GetListOfCities(): Observable<ListOfCities[]> {
    return this.http
      .get(BaseUrl + GetListOfCities)
      .map((res: Response) => res.json()
      );
  }

  //Service Call to get the intiated travel details
  GetIntiatedTravelDetails(loggednUserDetails: LoggedInUserDetails): Observable<TravelReqForm[]> {
    return this.http
      .get(BaseUrl + GetTravelListingByInitiatorId + loggednUserDetails.UserId)
      .map((res: Response) => {
        let a = res.json();
        return res.json()
      })
      .do((data) => {
        this.travelRequestDetails = data;
      });
  }

  //Service call to get the traveldetails of selected one
  getTravelSummaryDetails(id: number, travels: TravelReqForm[]) {
    for (let travel of travels) {
      if (travel.TravelId == id)
        return travel;
    }
    return null;
  }
  DeleteTravel(travelId: number, ListOfTravelRequests: TravelReqForm[], loggedInUser: LoggedInUserDetails) {
    this.travelDetails = this.getTravelSummaryDetails(travelId, ListOfTravelRequests);
    var firstName = loggedInUser.FirstName;
    var lastName = loggedInUser.LastName;
    var InitiatorName = firstName + '.' + lastName;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(BaseUrl + DeleteRequest+travelId, { headers: headers }, options)
      .subscribe((res: Response) => { res.json(); });

  }
  getIntiatedTravelStatus(status:string)
  {
    this.traveStatus=status;
  }
  sendIntiatedTravelStatus()
  {
    return this.traveStatus;
  }
}





