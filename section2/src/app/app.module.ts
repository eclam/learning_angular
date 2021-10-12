import { SuccessBoxComponent } from './successbox/successbox.component';
import { WarningBoxComponent } from './warningbox/warningbox.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { A3Component } from './a3/a3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningBoxComponent,
    SuccessBoxComponent,
    A3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
