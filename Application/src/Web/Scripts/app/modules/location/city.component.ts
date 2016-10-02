import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';

export module City {
    @Component({
        template: '<h2>City</h2>'
    })
    export class MainComponent {
        message = 'Hi there!';
    }
}