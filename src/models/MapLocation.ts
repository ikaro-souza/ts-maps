import faker from "faker";

export class MapLocation {
  latitude: number;
  longitude: number;

  constructor() {
    this.latitude = Number.parseFloat(faker.address.latitude());
    this.longitude = Number.parseFloat(faker.address.longitude());
  }
}
