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
var goal_service_1 = require("./goal.service");
var GoalsComponent = (function () {
    function GoalsComponent(goalService, router) {
        this.goalService = goalService;
        this.router = router;
        this.title = 'Tour of Goals';
    }
    GoalsComponent.prototype.onSelect = function (goal) {
        this.selectedGoal = goal;
    };
    GoalsComponent.prototype.getGoals = function () {
        var _this = this;
        this.goalService.getGoals().then(function (goals) { return _this.goals = goals; });
    };
    GoalsComponent.prototype.ngOnInit = function () {
        this.getGoals();
    };
    GoalsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedGoal.id]);
    };
    GoalsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.goalService.create(name)
            .then(function (goal) {
            _this.goals.push(goal);
            _this.selectedGoal = null;
        });
    };
    GoalsComponent.prototype.delete = function (goal) {
        var _this = this;
        this.goalService
            .delete(goal.id)
            .then(function () {
            _this.goals = _this.goals.filter(function (h) { return h !== goal; });
            if (_this.selectedGoal === goal) {
                _this.selectedGoal = null;
            }
        });
    };
    return GoalsComponent;
}());
GoalsComponent = __decorate([
    core_1.Component({
        selector: 'my-goals',
        templateUrl: './goals.component.html',
        styleUrls: ['./goals.component.css']
    }),
    __metadata("design:paramtypes", [goal_service_1.GoalService, router_1.Router])
], GoalsComponent);
exports.GoalsComponent = GoalsComponent;
//# sourceMappingURL=goals.component.js.map