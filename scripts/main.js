import { Guests } from "./guests.js";
import { Areas } from "./areas.js";
import { Services } from "./services.js";

console.log("main.js loaded");

// Select the main container where content will be dynamically inserted
const mainContainer = document.getElementById("container");

console.log(mainContainer);

// Generate the HTML content for the services, areas, and guest list sections
const applicationHTML = `
<section class="services">
    <h5 class="service--header">Come experience all we have to offer:</h5>
      ${Services()}
</section>
<div class="areas_and_guests">
    <section class="areas">
        ${Areas()}
    </section>
    <aside class="guestList">
          ${Guests()}
    </aside>
</div>
`;

console.log("applicationHTML:", applicationHTML);

// Inject the generated HTML into the main container
// Inject the generated HTML into the main container
if (mainContainer) {
    mainContainer.innerHTML = applicationHTML;
} else {
    console.error("Container element not found.");
}