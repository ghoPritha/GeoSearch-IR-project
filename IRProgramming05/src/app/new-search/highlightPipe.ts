import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlightSearch',
})
export class HighlightSearchPipe implements PipeTransform {
    transform(value: any, args: any): any {
        /* if (!args) {
          return value;
        }
    
        const regex = new RegExp(args, 'gi');
        const match = value.match(regex);
     
        if (!match) {
          return value;
        } */
        console.log('zrgs', args)

        if (!args) { return value; }
        for (const text of args) {
            var reText = new RegExp(text, 'gi');
            console.log('text', text, reText)
            value = value.replace(reText, "<mark>" + text + "</mark>");
            console.log('value', value)
        }
        return value;
    }
}