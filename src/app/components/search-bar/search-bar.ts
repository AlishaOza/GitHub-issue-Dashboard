import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  reponame:string=''
  @Output() repo_Name= new EventEmitter<string>
  @Output() render:any
  open_component:boolean=false

 repoName(){
  
  this.repo_Name.emit(this.reponame)
    this.render=true
 }

}
