import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    template: `
        <nav class="navbar-default navbar-inverse">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['']">Home</a></li>
                    <li><a [routerLink]="['products']">Products</a></li>
                    <li><a [routerLink]="['country']">Country</a></li>
                    <li><a [routerLink]="['province']">Province</a></li>
                    <li><a [routerLink]="['city']">City</a></li>
                </ul>
            </div>
        </nav>
    `
})
export class NavigationComponent {

}