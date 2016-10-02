import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { RouteModule } from './route.config';

import { AppComponent } from './components/app.component';
import { NavigationComponent } from './components/navigation.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouteModule],
    declarations: [AppComponent, NavigationComponent],
    bootstrap: [AppComponent]
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);