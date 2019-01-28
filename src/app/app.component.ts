import {Component} from '@angular/core';
import {DataService} from './dataService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers : [DataService]
})

export class AppComponent {
  user : string = '';
  users : any = [];
  userData: any;
  private heroesUrl = 'https://api.github.com/users';
  constructor(private httpClient : HttpClient, private dataService : DataService) {
  	this.getHeroes();
  }
  getHeroes(): void {
  	this.users = this.dataService.fetchData().subscribe(
      (data : any[]) => {
        this.users = data;
      }
  	);
  }

  userDetails(userData : any){
    this.userData = userData;
  }
}