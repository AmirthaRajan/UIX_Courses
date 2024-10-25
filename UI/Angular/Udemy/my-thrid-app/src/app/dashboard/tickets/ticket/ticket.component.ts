import {Component, EventEmitter, input, Output, signal} from '@angular/core';
import {Ticket} from "../tickets.component";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  @Output() complete = new EventEmitter();
  detailsVisible = signal(false);

  onComplete() {
    this.complete.emit()
  }

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
}
