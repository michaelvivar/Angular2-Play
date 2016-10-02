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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var pipe_module_1 = require('../../pipes/pipe.module');
var city_component_1 = require('./city.component');
var country_component_1 = require('./country.component');
var province_component_1 = require('./province.component');
var Service = require('./location.service');
var ng2_bootstrap_1 = require('../ng2-bootstrap');
var LocationModule = (function () {
    function LocationModule() {
    }
    LocationModule.routeConfig = function () {
        return [
            {
                path: 'country', children: [
                    { path: '', component: country_component_1.Country.MainComponent }
                ]
            }, {
                path: 'province', children: [
                    { path: '', component: province_component_1.Province.MainComponent }
                ]
            }, {
                path: 'city', children: [
                    { path: '', component: city_component_1.City.MainComponent }
                ]
            }
        ];
    };
    LocationModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bootstrap_1.ModalModule],
            providers: [Service.CountryService, Service.ProvinceService, Service.CityService],
            declarations: [pipe_module_1.FilterPipe, country_component_1.Country.MainComponent, country_component_1.Country.FormComponent, province_component_1.Province.MainComponent, city_component_1.City.MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LocationModule);
    return LocationModule;
}());
exports.LocationModule = LocationModule;
//# sourceMappingURL=location.module.js.map