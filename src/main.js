//import the HTML display functions to plug into the template literals
import { displayAreas } from "./areas.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <section class="services-container">
        <h2>Services</h2>
    </section>
    <section class="areas-container">
        <h2>Areas</h2>
        ${displayAreas()}
    </section>
    <section class="guest-container">
        <h2>Guest List</h2>
    </section>
`

mainContainer.innerHTML = applicationHTML