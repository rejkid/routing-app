import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'fromNow',
  pure: false
})
export class FromNowPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    return moment(value).fromNow();
  }

}
