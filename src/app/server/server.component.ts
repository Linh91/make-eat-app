import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    userAge = '';
    username = '';
    nameIsPresent = false;

    getServerStatus() {
        return this.serverStatus;
    }

    inputAge(event: any) {
        this.userAge = (<HTMLInputElement>event.target).value;
    }
    clearName() {
        this.nameIsPresent = true;
        this.username = '';
    }
}
