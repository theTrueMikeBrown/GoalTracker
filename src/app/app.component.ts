import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import * as _ from "lodash";
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Goal Tracker';

    angularFire: AngularFire;

    users: FirebaseListObservable<any>;
    loggedIn: any;
    user: any;
    
    goals: FirebaseListObservable<any>;
    newGoal: string = '';

    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => {
            if (auth) {
                this.loggedIn = auth;
            }
        });

        this.users = af.database.list('/users', {
            query: {
                limitToLast: 50
            }
        });

        this.angularFire = af;
        this.login();
    }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Anonymous,
            method: AuthMethods.Anonymous
        });
    }

    SetName(name: string) {
        this.angularFire.database.list('/users', {
            query: {
                orderByChild: 'name',
                equalTo: name
            }
        }).subscribe((users) => {
            if (!users[0]) {
                this.users.push({ name: name });
            }
            this.angularFire.database.list('/users', {
                query: {
                    orderByChild: 'name',
                    equalTo: name
                }
            }).subscribe((innerUsers) => {
                this.user = innerUsers[0];
                this.goals = this.angularFire.database.list('/goals', {
                    query: {
                        orderByChild: 'owner',
                        equalTo: this.user.name
                    }
                });

            });
        });
    }

    SetNewGoal(text: string) {
        this.goals.push({ text: text, owner: this.user.name });
        this.newGoal = '';
    }

    KillGoal(key: any) {
        this.goals.remove(key);
        //debugger;
    }
}
