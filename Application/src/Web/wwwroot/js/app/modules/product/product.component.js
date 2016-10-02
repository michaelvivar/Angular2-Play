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
var Product;
(function (Product) {
    var MainComponent = (function () {
        function MainComponent() {
        }
        MainComponent = __decorate([
            core_1.Component({
                template: "<h2>Product page</h2><a [routerLink]=\"['/products/1']\">Click</a>"
            }), 
            __metadata('design:paramtypes', [])
        ], MainComponent);
        return MainComponent;
    }());
    Product.MainComponent = MainComponent;
    var DetailComponent = (function () {
        function DetailComponent() {
        }
        DetailComponent = __decorate([
            core_1.Component({
                template: "<h2>Details</h2><a [routerLink]=\"['/products/edit/1']\">Edit</a>"
            }), 
            __metadata('design:paramtypes', [])
        ], DetailComponent);
        return DetailComponent;
    }());
    Product.DetailComponent = DetailComponent;
    var EditComponent = (function () {
        function EditComponent() {
        }
        EditComponent = __decorate([
            core_1.Component({
                template: '<h2>Edit Product</h2>'
            }), 
            __metadata('design:paramtypes', [])
        ], EditComponent);
        return EditComponent;
    }());
    Product.EditComponent = EditComponent;
})(Product = exports.Product || (exports.Product = {}));
//# sourceMappingURL=product.component.js.map