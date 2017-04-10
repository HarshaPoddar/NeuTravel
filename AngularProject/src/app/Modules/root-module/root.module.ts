import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "app/app.component";
import { GridViewComponent } from "app/grid-view/grid-view.component";
import { RoutingModule, routingComponents } from '../routing.module'
import { BrowserModule } from "@angular/platform-browser";
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { LoggedInUserDetails } from "app/ClassFiles/logged-in-user-details";
import { ListOfProjects } from "app/ClassFiles/projects";
import { ListOfEmployees } from "app/ClassFiles/list-of-employees";
import { TravelRequestDetails } from "app/ClassFiles/travel-request-details";
import { NeuTravelService } from "app/services/neu-travel.service";
import { ServicesURL } from "app/ClassFiles/service-url";
import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {Ng2PaginationModule} from 'ng2-pagination';
import { ProgressBarComponent } from 'app/progress-bar/progress-bar.component';

const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];


@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    routingComponents,
    ProgressBarComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule,
    Ng2AutoCompleteModule,
     ModalModule,
    BootstrapModalModule,
    Ng2PaginationModule
  ],
  providers: [NeuTravelService, LoggedInUserDetails, ListOfProjects, ListOfEmployees, TravelRequestDetails,ServicesURL,MODAL_PROVIDERS],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class RootModule { }
