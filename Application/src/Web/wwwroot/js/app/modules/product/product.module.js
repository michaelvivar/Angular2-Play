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
var router_1 = require('@angular/router');
var product_component_1 = require('./product.component');
var product_service_1 = require('./product.service');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule.routeConfig = function () {
        return [{
                path: 'products', children: [
                    { path: '', component: product_component_1.Product.MainComponent },
                    { path: ':id', component: product_component_1.Product.DetailComponent },
                    { path: 'edit/:id', component: product_component_1.Product.EditComponent }
                ]
            }];
    };
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule],
            declarations: [product_component_1.Product.MainComponent, product_component_1.Product.DetailComponent, product_component_1.Product.EditComponent],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map