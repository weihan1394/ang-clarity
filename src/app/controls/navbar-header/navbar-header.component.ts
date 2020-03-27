import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {

  title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = "app-clarity"
  }
}
