import { Component, Input } from '@angular/core';
import { SearchBar } from '../components/search-bar/search-bar';
import { FitersBar } from '../components/fiters-bar/fiters-bar';
import { IssueCards } from '../components/issue-cards/issue-cards';
import { IssueDetailCard } from '../components/issue-detail-card/issue-detail-card';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home-page',
  imports: [SearchBar, FitersBar, IssueCards, IssueDetailCard, NgIf],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  data_transer: any;
  totalCount: any;
  open: any;
  close: any;
  type: any;
  name: string = '';
  component: boolean = false;
  isdataLoaded:boolean=false;
  parent_function(event: any) {
    this.data_transer = event;
    this.isdataLoaded=true;
  }
  total_issue(event: any) {
    this.totalCount = event;
  }
  open_issue(event: any) {
    this.open = event;
  }
  close_issue(event: any) {
    this.close = event;
  }
  typeOfIssue(event: any) {
    this.type = event;
  }
  repoData(event: string) {
    this.name = event;
    this.component = true;
    
  }
}
