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
// Keep the Input import for now, you'll remove it later:
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var goal_service_1 = require("./goal.service");
require("rxjs/add/operator/switchMap");
var GoalDetailComponent = (function () {
    function GoalDetailComponent(goalService, route, location) {
        this.goalService = goalService;
        this.route = route;
        this.location = location;
    }
    GoalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.goalService.getGoal(+params['id']); })
            .subscribe(function (goal) { return _this.goal = goal; });
    };
    GoalDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    GoalDetailComponent.prototype.save = function () {
        var _this = this;
        this.goalService.update(this.goal)
            .then(function () { return _this.goBack(); });
    };
    return GoalDetailComponent;
}());
GoalDetailComponent = __decorate([
    core_1.Component({
        selector: 'goal-detail',
        templateUrl: './goal-detail.component.html',
        styleUrls: ['./goal-detail.component.css']
    }),
    __metadata("design:paramtypes", [goal_service_1.GoalService,
        router_1.ActivatedRoute,
        common_1.Location])
], GoalDetailComponent);
exports.GoalDetailComponent = GoalDetailComponent;
//# sourceMappingURL=goal-detail.component.js.map