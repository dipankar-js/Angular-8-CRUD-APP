import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AuthService } from '../../services/auth.service';
import { Client } from '../../models/Clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalBalance: number;
  user: any;
  uid: any;

  constructor(
    private clientService: ClientService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    //Get the Clients
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;

      //Get Total Balance Owed
      this.getTotal();

      //Get User Login Status
      this.authService.getAuth().subscribe(user => {
        this.user = user;
        this.uid = user.uid;
      });

      // console.log(this.uid);
      // console.log(this.user.email);
    });
  }
  getTotal() {
    let total: number = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total = total + +this.clients[i].balance;
    }
    this.totalBalance = total;
  }
}
