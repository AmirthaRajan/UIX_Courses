import {Component, ElementRef, output, viewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  title: string = "";
  request: string = "";
  add = output<{title :string,request: string}>();

  //@ViewChild('ticketForm') private form? : ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit() {
    this.add.emit({
      title :this.title,
      request: this.request
    });
    this.form().nativeElement.reset();
  }
}
