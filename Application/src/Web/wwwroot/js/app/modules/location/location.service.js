"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.Countries = function () {
        return this.http.get('/api/location/country');
    };
    LocationService.prototype.Provinces = function () {
        return this.http.get('/api/location/province');
    };
    LocationService.prototype.Cities = function () {
        return this.http.get('/api/location/city');
    };
    LocationService.prototype.add = function (location) {
        return this.http.post('/api/location', location);
    };
    LocationService.prototype.update = function (location) {
        return this.http.put('/api/location/' + location.id, location);
    };
    LocationService.prototype.delete = function (id) {
        return this.http.delete('/api/location/' + id);
    };
    LocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LocationService);
    return LocationService;
}());
var CountryService = (function (_super) {
    __extends(CountryService, _super);
    function CountryService() {
        _super.apply(this, arguments);
    }
    CountryService.prototype.getCountries = function () {
        return this.Countries();
    };
    CountryService.prototype.addCountry = function (country) {
        return this.add(country);
    };
    CountryService.prototype.updateCountry = function (country) {
        return this.update(country);
    };
    CountryService.prototype.deleteCountry = function (id) {
        return this.delete(id);
    };
    return CountryService;
}(LocationService));
exports.CountryService = CountryService;
var ProvinceService = (function (_super) {
    __extends(ProvinceService, _super);
    function ProvinceService() {
        _super.apply(this, arguments);
    }
    ProvinceService.prototype.getProvinces = function () {
        this.Provinces();
    };
    ProvinceService.prototype.addProvince = function (province) {
        return this.add(province);
    };
    ProvinceService.prototype.updateProvince = function (province) {
        return this.update(province);
    };
    ProvinceService.prototype.deleteProvince = function (id) {
        return this.delete(id);
    };
    return ProvinceService;
}(LocationService));
exports.ProvinceService = ProvinceService;
var CityService = (function (_super) {
    __extends(CityService, _super);
    function CityService() {
        _super.apply(this, arguments);
    }
    CityService.prototype.getCities = function () {
        return this.Cities();
    };
    CityService.prototype.addCity = function (city) {
        return this.add(city);
    };
    CityService.prototype.updateCity = function (city) {
        return this.update(city);
    };
    CityService.prototype.deleteCity = function (id) {
        return this.delete(id);
    };
    return CityService;
}(LocationService));
exports.CityService = CityService;
//# sourceMappingURL=location.service.js.map