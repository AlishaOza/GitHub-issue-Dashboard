import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; 
import{CountDaysPipe} from '../../pips/count-days-pipe'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issue-detail-card',
  imports: [CountDaysPipe,DatePipe,CommonModule],
  templateUrl: './issue-detail-card.html',
  styleUrl: './issue-detail-card.css',
})
export class IssueDetailCard implements OnInit {
  @Input('issue_parent_tochile') variable :any ;
  selecetedItem:any
  
  ngOnInit(): void {
   this.selecetedItem=this.variable[0]
  }
  cleanDescription(text:string){

  if(!text) return 'No description available'

  return text
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_>`-]/g, '')
    .slice(0, 300)

}
  
}
