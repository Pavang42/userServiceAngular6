import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
	constructor(private httpClient : HttpClient) { }
    fetchData(){
        return this.httpClient.get('https://api.github.com/users');
    }
}