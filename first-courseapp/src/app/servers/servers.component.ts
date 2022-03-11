import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreationStatus = "Server not created";
  serverName = "test";

  username = "";
  constructor() {}

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created"
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername(){
    this.username = "";
  }

}
