import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Clients';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };
  disableBalanceOnEdit: boolean = true;

  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessageService: FlashMessagesService
  ) {}

  ngOnInit() {
    //Get ID
    this.id = this.route.snapshot.params['id'];
    //Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
  }

  onSubmit(valid) {
    if (valid.form.status === 'INVALID') {
      this.flashMessageService.show('Please fill the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      this.router.navigate(['/edit-clients/' + this.id]);
      console.log(valid.form.status);
    } else {
      console.log(valid.form.status);
      this.clientService.updateClient(this.id, this.client);
      this.flashMessageService.show('Successfully Updated', {
        cssClass: 'alert-success',
        timeout: 4000
      });
      this.router.navigate(['/client/' + this.id]);
    }
  }
}
