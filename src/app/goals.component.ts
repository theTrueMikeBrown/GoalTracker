import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from './goal';
import { GoalService } from './goal.service';

@Component({
    selector: 'my-goals',
    templateUrl: './goals.component.html',
    styleUrls: ['./goals.component.css']
})
    
export class GoalsComponent  {
    constructor(private goalService: GoalService, private router: Router) { }
    title = 'Tour of Goals';
    selectedGoal: Goal;    
    goals: Goal[];
    onSelect(goal: Goal): void {
        this.selectedGoal = goal;
    }
    getGoals(): void {
        this.goalService.getGoals().then(goals => this.goals = goals);
    }
    ngOnInit(): void {
        this.getGoals();
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedGoal.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.goalService.create(name)
            .then(goal => {
                this.goals.push(goal);
                this.selectedGoal = null;
            });
    }

    delete(goal: Goal): void {
        this.goalService
            .delete(goal.id)
            .then(() => {
                this.goals = this.goals.filter(h => h !== goal);
                if (this.selectedGoal === goal) { this.selectedGoal = null; }
            });
    }

}
