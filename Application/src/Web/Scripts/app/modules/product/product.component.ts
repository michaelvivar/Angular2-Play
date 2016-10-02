import { Component } from '@angular/core';

export module Product {
    @Component({
        template: `<h2>Product page</h2><a [routerLink]="['/products/1']">Click</a>`
    })
    export class MainComponent {

    }

    @Component({
        template: `<h2>Details</h2><a [routerLink]="['/products/edit/1']">Edit</a>`
    })
    export class DetailComponent {

    }

    @Component({
        template: '<h2>Edit Product</h2>'
    })
    export class EditComponent {

    }
}