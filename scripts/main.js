import { serviceList } from "./services.js";
import { guestList } from "./guests.js";
import { ParkAreasList } from "./parkAreas.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Cider Falls</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Services we offer</h2>
            ${serviceList()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Guests</h2>
            ${guestList()}
        </section>
    </article>

    <article class="assignments">
        <h2>Park Areas</h2>
        ${ParkAreasList()}
    </article>
`

mainContainer.innerHTML = applicationHTML
