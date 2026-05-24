import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fiters-bar',
  imports: [],
  templateUrl: './fiters-bar.html',
  styleUrl: './fiters-bar.css',
})
export class FitersBar {
@Input('All_issue') all:any
@Input('open_issue') open:any
@Input('close_issue') close:any
@Output() type =new EventEmitter<any>

typeofIssue(type:string){
  this.type.emit(type)
}

}
