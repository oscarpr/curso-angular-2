import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nombrecompeticion'
})

export class PipeNombreCompeticion implements PipeTransform {
    transform(value: string): any {
        if (value.includes('.')) {
            return value.split('.')[1].trim().replace('2016/17', '');
        }
        return value.replace('2016/17', '');
    }
}