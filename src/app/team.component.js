"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var person_service_1 = require("./person.service");
var TeamComponent = (function () {
    function TeamComponent(personService, router) {
        this.personService = personService;
        this.router = router;
        this.title = 'My Team';
    }
    TeamComponent.prototype.getPeople = function () {
        var _this = this;
        this.personService.getPeople().then(function (people) { return _this.people = people; });
    };
    TeamComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    TeamComponent.prototype.gotoDetail = function (person) {
        this.router.navigate(['/person', person.id]);
    };
    TeamComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.personService.create(name)
            .then(function (person) {
            _this.people.push(person);
        });
    };
    TeamComponent.prototype.delete = function (person) {
        var _this = this;
        this.personService
            .delete(person.id)
            .then(function () {
            _this.people = _this.people.filter(function (h) { return h !== person; });
        });
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    core_1.Component({
        selector: 'my-team',
        templateUrl: './team.component.html',
        styleUrls: ['./team.component.css']
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService, router_1.Router])
], TeamComponent);
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map