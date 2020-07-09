import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { BugOperationsService } from './bugTracker/services/bugOperations.services';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugServerService } from './bugTracker/services/bugServer.service';

import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';
import { BugDetailsComponent } from './bugTracker/views/bugDetails.component';
import { ProjectListComponent } from "./bugTracker/views/projectList.components";
import { LoginComponent } from './bugTracker/auth/Login.component';

import {RouterModule, Routes} from '@angular/router';

import { LoggedInGuard } from './bugTracker/auth/LoggedInGuard';
import { ProjectOperationsService } from "./bugTracker/services/projectOperations.services";
import { ProjectServerService } from './bugTracker/services/projectServer.services';
import { ProjectComponent } from './bugTracker/project.component';

//Routing
let routes : Routes = [
    {path : '', redirectTo : '/bugs', pathMatch : 'full'},
    {path : 'login', component : LoginComponent},
    {path : 'project',component:ProjectListComponent},
    {path : 'add', component : BugEditComponent},
    {path : 'details/:id', component : BugDetailsComponent},
    {path : 'bugs', component : BugTrackerComponent, 
    
      canActivate : [LoggedInGuard] },
    {path : 'listOfProjects', component : ProjectComponent},
  
      
]

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
    , BugStatsComponent
    , BugEditComponent
    , ProjectListComponent
    , BugDetailsComponent
    , LoginComponent
    , ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  	BugOperationsService
    , BugStorageService
    , BugServerService
    , ProjectServerService
    ,ProjectOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
