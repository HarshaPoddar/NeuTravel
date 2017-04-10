import { NgModule, DirectiveDecorator } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelReqformComponent } from "app/travel-reqform/travel-reqform.component";
import { IntiateTravelReqComponent } from "app/intiate-travel-req/intiate-travel-req.component";
import { GridViewComponent } from "app/grid-view/grid-view.component";
import { IntiatedTravelSummaryComponent } from "app/intiated-travel-summary/intiated-travel-summary.component";


const routes: Routes = [
  { path: 'CreateRequest', component: TravelReqformComponent },
  {path:'Welcome/ViewDetails/:TravellerId',component:IntiatedTravelSummaryComponent},
  { path: 'Welcome', component: GridViewComponent },
  { path: '', redirectTo: 'Welcome', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class RoutingModule { }
export const routingComponents = [TravelReqformComponent, IntiateTravelReqComponent, GridViewComponent,IntiatedTravelSummaryComponent]
