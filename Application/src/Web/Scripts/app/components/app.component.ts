import { Component, ViewContainerRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <nav-menu></nav-menu>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        `,
})
export class AppComponent {
    constructor(private viewContainerRef: ViewContainerRef) { }
}
