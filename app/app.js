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
require('script!primeui/primeui-ng-all.min.js');
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var primeng_1 = require('primeng/primeng');
var carservice_1 = require('../app/cars/carservice');
var AppComponent = (function () {
    function AppComponent(carService) {
        this.carService = carService;
        this.car = new PrimeCar();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    AppComponent.prototype.showDialogToAdd = function () {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    };
    AppComponent.prototype.save = function () {
        if (this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;
        this.car = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.delete = function () {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    AppComponent.prototype.cloneCar = function (c) {
        var car = new PrimeCar();
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    AppComponent.prototype.findSelectedCarIndex = function () {
        return this.cars.indexOf(this.selectedCar);
    };
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: '../app/app.html',
            selector: 'my-app',
            directives: [primeng_1.InputText, primeng_1.DataTable, primeng_1.Button, primeng_1.Dialog, primeng_1.CodeHighlighter, primeng_1.TabView, primeng_1.TabPanel, primeng_1.Column, primeng_1.Header, primeng_1.Footer],
            providers: [http_1.HTTP_PROVIDERS, carservice_1.CarService]
        }), 
        __metadata('design:paramtypes', [carservice_1.CarService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PrimeCar = (function () {
    function PrimeCar(vin, year, brand, color) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
    return PrimeCar;
}());
browser_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map