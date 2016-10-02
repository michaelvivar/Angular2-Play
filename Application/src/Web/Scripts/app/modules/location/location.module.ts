import { NgModule, ModuleWithProviders, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { FilterPipe } from '../../pipes/pipe.module';
import { City } from './city.component';
import { Country } from './country.component';
import { Province } from './province.component';
import * as Service from './location.service';
import { ModalModule } from '../ng2-bootstrap';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ModalModule],
    providers: [Service.CountryService, Service.ProvinceService, Service.CityService],
    declarations: [FilterPipe, Country.MainComponent, Country.FormComponent, Province.MainComponent, City.MainComponent]
})
export class LocationModule {
    constructor() { }

    public static routeConfig(): Routes {
        return [
            {
                path: 'country', children: [
                    { path: '', component: Country.MainComponent }
                ]
            }, {
                path: 'province', children: [
                    { path: '', component: Province.MainComponent }
                ]
            }, {
                path: 'city', children: [
                    { path: '', component: City.MainComponent }
                ]
            }
        ];
    }
}