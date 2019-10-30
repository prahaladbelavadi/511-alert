import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  tokenForm: FormGroup;

  constructor(private storage: Storage) { }

  ngOnInit() {

  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.storage.set('token', f.value.token);
  }

}
