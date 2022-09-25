import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableDateFromTimestamp'
})
export class ReadableDateFromTimestampPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string | undefined {
    
    if (value != undefined) {

      const date = new Date(Number(value));

      return (date.getDay().toString() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + " hs");
    }

    return undefined;

  }

}
