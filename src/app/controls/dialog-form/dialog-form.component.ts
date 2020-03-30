import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // set modal default visible to be false
  isModalVisible = false;
  deleteOrder() {
    console.log("test")
  }

}
