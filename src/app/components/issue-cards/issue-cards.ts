import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { IssueApi } from '../../service/issue-api';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDaysPipe } from '../../pips/count-days-pipe';
import { DataLocalStorage } from '../../service/data-local-storage';
import { ScrollingModule } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-issue-cards',
  imports: [CommonModule, CountDaysPipe,ScrollingModule],
  templateUrl: './issue-cards.html',
  styleUrl: './issue-cards.css',
})
export class IssueCards {
  private title = inject(IssueApi);
  public issueTitle: any[] = [];
  issue_title: string = '';
  selecteddCard: any;
  isloading: boolean = false;
  isEmpty: boolean = false;
  count: any;
  iserror: boolean = false;
  isValiad: boolean = false;
  @Output() titel_issueToparent = new EventEmitter<any>();
  @Output() total = new EventEmitter<any>();
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  @Input('typeOfIssue') type: any;
  @Input('nameOfRepo') repo: string = '';
  @Input('isopen') isOpen: any;
  isdataLoaded: boolean = false;
  private _localStorage = inject(DataLocalStorage);

  ngOnInit() {
    const savedData = this._localStorage.getData();
    if (savedData.length > 0) {
      this.issueTitle = savedData;

      this.titel_issueToparent.emit(this.issueTitle[0]);

      this.total.emit(this.issueTitle.length);

      this.open.emit(this.countOpenissue(this.issueTitle));

      this.close.emit(this.countCloseissue(this.issueTitle));
    }
  }
  ngOnChanges(change: any) {
    
    if (change.repo && this.repo?.trim()) {
       this.isloading = true
      this.getIssue();
    }
  }
  getIssue() {
    this.isValiad = false;
    const repoParts = this.repo.split('/');

    if (repoParts.length !== 2 || !repoParts[0] || !repoParts[1]) {
      this.isValiad = true;
      return;
    }
    this.title.getTitle(this.repo).subscribe({
      next: (respose: any) => {
        this.issueTitle = respose;
        this._localStorage.setData(this.issueTitle);
        if (respose.length === 0) {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
          this.titel_issueToparent.emit(this.issueTitle[0]);
          this.isdataLoaded = true;
        }

        
        this.open.emit(this.countOpenissue(this.issueTitle));
        this.close.emit(this.countCloseissue(this.issueTitle));

        this.isloading = false;
      },
      error: (err: any) => {
        this.iserror = true;
        console.log('Request error', err);
        this.isloading = false;
      },
    });
    this.title.getTotalData(this.repo).subscribe((respose:any)=>{
this.total.emit(respose.open_issues_count);
    })
  }
  get filterData() {
    if (this.type === 'open') {
      return this.issueTitle.filter((item: any) => item.state === 'open');
    }
    if (this.type === 'closed') {
      return this.issueTitle.filter((item: any) => item.state === 'closed');
    }

    return this.issueTitle;
  }
  countCloseissue(issue: any) {
    return issue.filter((item: any) => item.state === 'closed').length;
  }
  countOpenissue(issue: any) {
    return issue.filter((item: any) => item.state === 'open').length;
  }

  Opencard(item: any) {
    this.titel_issueToparent.emit(item);
  }
}
