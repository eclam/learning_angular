import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', // <app-servers></app-servers>
  // selector: '[app-servers]', // <div app-servers></div>
  selector: '.app-servers', // <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
