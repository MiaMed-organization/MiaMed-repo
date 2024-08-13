import { Component, Input } from '@angular/core';
import { Doctors } from '../../../../../interfaces/doctors';


@Component({
  selector: 'app-extended-card',
  templateUrl: './extended-card.component.html',
  styleUrl: './extended-card.component.css'
})
export class ExtendedCardComponent {
  @Input() doctor!: Doctors;
}
