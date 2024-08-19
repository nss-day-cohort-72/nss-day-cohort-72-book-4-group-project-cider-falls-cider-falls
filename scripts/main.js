import { serviceList } from "./services.js";
import { guestList } from "./guests.js";
import { ParkAreasList } from "./parkAreas.js";


const areaListElement = document.querySelector('.area_container');
areaListElement.innerHTML = ParkAreasList();

const guestListElement = document.querySelector('.guest_list');
guestListElement.innerHTML = guestList();

const serviceListElement = document.querySelector('.service_bar');
serviceListElement.innerHTML = serviceList();





