import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule as Home } from './modules/home/home.module';
import { ProductModule as Product } from './modules/product/product.module';
import { LocationModule as Location } from './modules/location/location.module';

const ROUTE_CONFIG: Routes = [
    ...Home.routeConfig(),
    ...Product.routeConfig(),
    ...Location.routeConfig()
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTE_CONFIG), Home, Product, Location],
    exports: [RouterModule]
})
export class RouteModule {

}
