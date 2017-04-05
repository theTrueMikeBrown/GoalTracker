import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Goal } from './goal';

@Injectable()
export class GoalService {
    private goalsUrl = 'api/goals';  // URL to web api

    constructor(private http: Http) { }

    getGoals(): Promise<Goal[]> {
        return this.http.get(this.goalsUrl)
            .toPromise()
            .then(response => response.json().data as Goal[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getGoal(id: number): Promise<Goal> {
        const url = `${this.goalsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Goal)
            .catch(this.handleError);
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });

    update(goal: Goal): Promise<Goal> {
        const url = `${this.goalsUrl}/${goal.id}`;
        return this.http
            .put(url, JSON.stringify(goal), { headers: this.headers })
            .toPromise()
            .then(() => goal)
            .catch(this.handleError);
    }

    create(name: string): Promise<Goal> {
        return this.http
            .post(this.goalsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Goal)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.goalsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
