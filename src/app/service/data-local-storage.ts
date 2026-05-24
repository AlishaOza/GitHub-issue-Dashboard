import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataLocalStorage {
  key:string='issuedata'
  setData(data:any){
   localStorage.setItem(this.key,JSON.stringify(data))
  }
  getData(){
 const data= localStorage.getItem(this.key)
 return data ? JSON.parse(data) : []
  }
}
