import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from './goal';
import { GoalService } from './goal.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'my-goals',
    templateUrl: './goals.component.html',
    styleUrls: ['./goals.component.css']
})
    
export class GoalsComponent  {
    constructor(private goalService: GoalService, private router: Router) { }
    title = 'Goals';
    goals: Goal[];
    getGoals(): void {
        this.goalService.getGoals().then(goals => this.goals = goals);
    }
    ngOnInit(): void {
        this.getGoals();
    }
    gotoDetail(goal: Goal): void {
        this.router.navigate(['/detail', goal.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.goalService.create(name)
            .then(goal => {
                this.goals.push(goal);
            });
    }

    delete(goal: Goal): void {
        this.goalService
            .delete(goal.id)
            .then(() => {
                this.goals = this.goals.filter(h => h !== goal);
            });
    }

}
