import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  avatarUrl: string;

  @Input()
  id: number;

  @Input()
  siteAdmin: boolean;

  @Input()
  reposUrl: string;
  constructor() { }

  ngOnInit() {
  }

  getReposUrl(url : string) : void {
  	window.location.href = url;
  }
}
