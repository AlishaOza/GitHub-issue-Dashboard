import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDays',
})
export class CountDaysPipe implements PipeTransform {

  transform(value: string): string {
    
    const currentDate = new Date()

    const issueDate = new Date(value)

    const diffInMs = currentDate.getTime() - issueDate.getTime()

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if(days === 0){
      return 'Today'
    }

    if(days === 1){
      return '1 day ago'
    }

    return `${days} days ago`
  }

  }


