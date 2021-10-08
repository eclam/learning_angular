import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', // <app-servers></app-servers>
  // selector: '[app-servers]', // <div app-servers></div>
  selector: '.app-servers', // <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: Boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    // this.serverCreationStatus = 'Server was created! Name is : ' + this.serverName;
  }

  onRemoveServer(){
    this.servers.pop();
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
