import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
    selector: 'my-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})

export class TeamComponent {
    constructor(private personService: PersonService, private router: Router) { }
    title = 'My Team';
    people: Person[];
    getPeople(): void {
        this.personService.getPeople().then(people => this.people = people);
    }
    ngOnInit(): void {
        this.getPeople();
    }
    gotoDetail(person: Person): void {
        this.router.navigate(['/person', person.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.personService.create(name)
            .then(person => {
                this.people.push(person);
            });
    }

    delete(person: Person): void {
        this.personService
            .delete(person.id)
            .then(() => {
                this.people = this.people.filter(h => h !== person);
            });
    }

}
