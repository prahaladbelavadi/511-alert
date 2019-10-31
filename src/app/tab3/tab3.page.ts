import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  baseUrl = 'http://api.511.org/Traffic/Events';
  events: any;

  constructor(private http: HttpClient, private storage: Storage) { }

  ngOnInit() {
    const token = this.storage.get('token');

    const URL = this.baseUrl + '?api_key=' + token;

    this.events = this.http.get(URL);
  }

}
