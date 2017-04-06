import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { TeamComponent } from './team.component';
import { GoalDetailComponent } from './goal-detail.component';
const routes: Routes = [
    { path: '', redirectTo: '/team', pathMatch: 'full' },
    { path: 'detail/:id', component: GoalDetailComponent },
    { path: 'person/:id', component: GoalsComponent },
    { path: 'team', component: TeamComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
