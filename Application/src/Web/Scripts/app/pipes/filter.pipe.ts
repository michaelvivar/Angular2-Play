import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(data: any[], term: string) {
        if (term === undefined) {
            return data;
        }
        return data.filter(o => (<string>o.name).toLowerCase().includes(term.toLowerCase()));
    }
}