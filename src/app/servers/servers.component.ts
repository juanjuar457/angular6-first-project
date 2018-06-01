import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit  {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver, Testserver2 '];
  serverCount = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(evevnt: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickCounter() {
    this.serverCount = this.serverCount + 1;
    console.log('counterhere!');
  }
}


// pick up from counter, look up ngIF to make the if /else statement for adding background
// to everything after 5th, also add para ele to display counter
