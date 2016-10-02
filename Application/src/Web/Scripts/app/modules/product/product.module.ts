import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Product } from './product.component';
import { ProductService } from './product.service';

@NgModule({
    imports: [RouterModule],
    declarations: [Product.MainComponent, Product.DetailComponent, Product.EditComponent],
    providers: [ProductService]
})
export class ProductModule {
    public static routeConfig(): Routes {
        return [{
            path: 'products', children: [
                { path: '', component: Product.MainComponent },
                { path: ':id', component: Product.DetailComponent },
                { path: 'edit/:id', component: Product.EditComponent }
            ]
        }];
    }
}