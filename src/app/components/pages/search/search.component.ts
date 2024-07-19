import { Component , Input} from '@angular/core';
import { Doctors } from '../../../interfaces/doctors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() doctor!: Doctors;
}
