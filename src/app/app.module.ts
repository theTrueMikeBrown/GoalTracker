import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { GoalsComponent } from './goals.component';
import { GoalDetailComponent } from './goal-detail.component';
import { GoalService } from './goal.service';
import { TeamComponent } from './team.component';
import { PersonService } from './person.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        GoalsComponent,
        GoalDetailComponent,
        TeamComponent        
    ],
    providers: [GoalService, PersonService],
    bootstrap: [AppComponent]
})
export class AppModule { }
