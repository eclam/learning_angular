import { StatusService } from './../status.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  constructor(private statusService: StatusService){}

  ngOnInit(){
    this.users = this.statusService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.statusService.onSetToInactive(id);
    this.users = this.statusService.activeUsers;
  }
}
