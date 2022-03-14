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
  serverCreated = false;
  serversList = ['TestServer', 'TestServer2'];



  buttonClicks: string[] = [];
  showDetails = false; 
  username = "";
  constructor() {}

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created with name " + this.serverName;
    this.serversList.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername(){
    this.username = "";
  }

  toggleDetails(){
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(Date.now().toString());
  }

}
