import { Goal } from './goal';

// Keep the Input import for now, you'll remove it later:
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { GoalService } from './goal.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'goal-detail',
    templateUrl: './goal-detail.component.html',
    styleUrls: ['./goal-detail.component.css']
})

export class GoalDetailComponent implements OnInit {
    goal: Goal;

    constructor(
        private goalService: GoalService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.goalService.getGoal(+params['id']))
            .subscribe(goal => this.goal = goal);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.goalService.update(this.goal)
            .then(() => this.goBack());
    }
}
