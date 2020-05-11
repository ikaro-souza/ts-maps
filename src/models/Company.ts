import { IMappable } from "./CustomMap";
import faker from "faker";
import { MapLocation } from "./MapLocation";

export class Company implements IMappable {
  name: string;
  catchPhrase: string;
  location: MapLocation;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = new MapLocation();
  }

  infoWindowContent(): string {
    return `
      <div>
        <p><strong>Company</strong></p>
        <h3>${this.name}</h3>
        <p><em>${this.catchPhrase}</em></p>
      </div>
    `;
  }
}
