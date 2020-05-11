export interface IMappable {
  location: {
    latitude: number;
    longitude: number;
  };
  infoWindowContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapElementId: string) {
    const mapDiv: Element = document.getElementById(mapElementId);
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    };
    this.googleMap = new google.maps.Map(mapDiv, mapOptions);
  }

  addMarker(mappable: IMappable): void {
    const position = {
      lat: mappable.location.latitude,
      lng: mappable.location.longitude,
    };
    const markerOptions: google.maps.MarkerOptions = {
      map: this.googleMap,
      position: position,
    };

    const marker = new google.maps.Marker(markerOptions);
    marker.addListener("click", () => {
      const infoWindowOptions: google.maps.InfoWindowOptions = {
        content: mappable.infoWindowContent(),
      };
      const infoWindow = new google.maps.InfoWindow(infoWindowOptions);
      infoWindow.open(this.googleMap, marker);
    });
  }
}
