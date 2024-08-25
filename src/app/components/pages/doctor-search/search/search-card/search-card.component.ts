import { Component,Input } from '@angular/core';
import { Doctors } from '../../../../../interfaces/doctors';


@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {
  @Input() doctor!: Doctors;
}
