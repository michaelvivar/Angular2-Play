import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home.component';

@NgModule({
    declarations: [Home.MainComponent]
})
export class HomeModule {
    public static routeConfig(): Routes {
        return [{ path: '', component: Home.MainComponent }]
    }
}