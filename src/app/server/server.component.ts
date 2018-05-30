import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  public serverId: number = 10;
  public serverStatus: string = 'OFF';

  getServerStatus() {
    console.log('this is before the end!');
    return this.serverStatus;
  }

}

// no log on line 13
// correct syntax with access modifiers
