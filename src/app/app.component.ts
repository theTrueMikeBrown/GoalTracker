import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
  selector: 'my-app',
    template: `
<h1>{{title}}</h1>
<h2>My Heroes</h2>
<ul class="heroes">
    <li *ngFor="let hero of heroes">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
</ul>
<h2>{{hero.name}} details!</h2>
<div><label>id: </label>{{hero.id}}</div>
<div>
  <label>name: </label>
  <input [(ngModel)]="hero.name" placeholder="name" >
</div>
`,
styles: [`
.selected {
    background-color: #CFD8DC !important;
    color: white;
}
.heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
}
.heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
}
.heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
}
.heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
}
.heroes .text {
    position: relative;
    top: -3px;
}
.heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
}
`]
})

export class AppComponent  {
    title = 'Tour of Heroes';
    hero: Hero={
        id:1,
        name:'windstorm'
    };
    heroes = HEROES;
}

const HEROES: Hero[] = [
    {id:11, name:"Joe Mamma 1"},
    {id:12, name:"Joe Mamma 2"},
    {id:13, name:"Joe Mamma 3"},
    {id:14, name:"Joe Mamma 4"},
    {id:15, name:"Joe Mamma 5"},
    {id:16, name:"Joe Mamma 6"},
    {id:17, name:"Joe Mamma 7"},
    {id:18, name:"Joe Mamma 8"},
    {id:19, name:"Joe Mamma 9"},
    {id:20, name:"Joe Mamma 10"}
];
