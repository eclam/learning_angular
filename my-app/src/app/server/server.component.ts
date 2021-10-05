import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    numberVar: number = 10;
    stringStatus: string = 'offline';
    message: string = "Derp!";
    getMsg(){
      return this.message;
    }
}
