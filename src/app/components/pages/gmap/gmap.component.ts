import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrl: './gmap.component.css'
})
export class GmapComponent implements OnInit{
  constructor() {}
    ngOnInit(): void {}
    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
    };
    zoom = 4;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
}
