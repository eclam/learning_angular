import { StatusService } from './status.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private statusService: StatusService){}

  ngOnInit(){
    this.activeUsers = this.statusService.activeUsers;
    this.inactiveUsers = this.statusService.inactiveUsers;
  }
}
