import { Company } from "./models/Company";
import { User } from "./models/User";
import { CustomMap } from "./models/CustomMap";

const user = new User();
const company = new Company();

const map = new CustomMap("map");
map.addMarker(user);
map.addMarker(company);
