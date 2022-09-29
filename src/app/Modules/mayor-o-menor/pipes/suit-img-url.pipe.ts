import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suitImgUrl'
})
export class SuitImgUrlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    switch (value) {
      
      case 'hearts':
        return 'assets/heart.png';

      case 'clubs':
        return 'assets/clover.png';

      case 'spades':
        return 'assets/spade.png';

      case 'diamonds':
        return 'assets/diamond.png';

      default:
        return 'assets/heart.png'

    }

  }

}
