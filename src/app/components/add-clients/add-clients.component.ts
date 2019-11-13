import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Clients';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {
  client = new Client();
  disableBalanceOnAdd: boolean = true;

  constructor(
    public flashMessageService: FlashMessagesService,
    public route: Router,
    private clientService: ClientService
  ) {}

  ngOnInit() {}

  onSubmit(valid) {
    if (this.disableBalanceOnAdd) {
      this.client.balance = 0;
    }
    if (valid.form.status === 'INVALID') {
      this.flashMessageService.show('Please fill the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      this.route.navigate(['add-clients']);
      console.log(valid.form.status);
    } else {
      console.log(valid.form.status);
      this.clientService.addClient(this.client);
      this.route.navigate(['/']);
    }
  }
}
