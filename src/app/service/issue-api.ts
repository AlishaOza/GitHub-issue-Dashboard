import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueApi {
   private http = inject(HttpClient);
   

   getTitle(repo:string):Observable<any[]>{
    return this.http.get<any[]>(`https://api.github.com/repos/${repo}/issues?per_page=100`)
   }
   getTotalData(repo:string):Observable<any[]>{
    return this.http.get<any[]>(`https://api.github.com/repos/${repo}`)
   }
}
