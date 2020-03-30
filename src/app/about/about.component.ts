import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Form } from '../models/form';
import { User } from '../models/user'
import { DialogFormComponent } from '../controls/dialog-form/dialog-form.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  forms = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let index = 0; index < 8; index++) {
      let form = new Form;
      form.name = "name " + index;

      form.description = "description " + index;

      this.forms.push(form)
    }

    console.log(this.forms.length);
  }

  // render modal 
  @ViewChild(DialogFormComponent) modal: DialogFormComponent;
  user: User = { firstName: "Joe", lastName: "Smith" };

  ngAfterViewInit(): void {
      this.modal.onOK.subscribe(user => {
        this.user = user;
        this.modal.close();
    });
  }
}
