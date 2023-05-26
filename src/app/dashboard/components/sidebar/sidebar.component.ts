import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isDashboard: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  changeValue(val: boolean) {
    this.isDashboard = val;
  }
}
