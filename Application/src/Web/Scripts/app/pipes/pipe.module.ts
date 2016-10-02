import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [FilterPipe]
})
export class PipeModule {
    public static foorRoot() {
        return [FilterPipe];
    }
}

export * from './filter.pipe';