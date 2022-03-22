import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService, 
    private route: ActivatedRoute,
    private router: Router) { }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>
  {
    if(this.allowEdit){
      if (this.serverName !== this.server.name || this.serverStatus !== this.server.status
        && !this.changesSaved){
          return confirm('Changes will be discarded')
        }
        else return true;
    }
    return true;
  };

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      }
    )
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id']);
    })

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
