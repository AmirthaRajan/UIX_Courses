import {Component, EventEmitter} from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {TicketComponent} from "./ticket/ticket.component";

export type Ticket = {
  id: string;
  title: string;
  description: string;
  complete : boolean;
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets : Ticket[] = [];

  onAdd( ticketData : {title : string, request: string} ) {
    this.tickets.push({
      id: Math.random().toString(),
      title : ticketData.title,
      description : ticketData.request,
      complete : false
    })
  }

  onComplete(id: string) {
   this.tickets = this.tickets.map((ticket: Ticket) => {
      if(ticket.id === id) {
        return {...ticket, complete: true}
      }
      return ticket;
    })
  }
}
