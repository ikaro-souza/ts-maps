import { IMappable } from "./CustomMap";
import faker from "faker";
import { MapLocation } from "./MapLocation";

export class User implements IMappable {
  name: string;
  location: MapLocation;

  constructor() {
    this.name = faker.name.firstName();
    this.location = new MapLocation();
  }

  infoWindowContent(): string {
    return `<h3>${this.name}</h3>`;
  }
}
