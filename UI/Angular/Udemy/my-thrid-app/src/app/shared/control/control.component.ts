import {Component, HostBinding, HostListener, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host : {
    "(click)" : "onCLick()"
  }
})
export class ControlComponent {
  @HostListener('click', ['$event'])
  onCLick(){
    console.log("CLick");
  }
  label = input.required<string>();
}
