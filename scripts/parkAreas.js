import { getParkAreas, getGuests, getServices } from "./database.js"

const areas = getParkAreas()
const guests = getGuests()
const services = getServices()

document.addEventListener(
    "click",
    (clickEvent) => {
        const areaTarget = clickEvent.target
        if (areaTarget.classList.contains("parkArea")) {
            const areaId = parseInt(areaTarget.dataset.id)
            const numberOfGuests = guests.filter(guest => guest.parkAreasId === areaId).length
            window.alert(`There are currently ${numberOfGuests} guests in the ${areaTarget.textContent} area.`)
        }
    }
)

export const ParkAreasList = () => {
    let areasHTML = "<ul>";

    for (const area of areas) {
        const areaServices = services.filter(service => {
            const serviceIdsArray = area.service_id.split(",").map(id => parseInt(id.trim()));
            return serviceIdsArray.includes(service.id);
        });

        const servicesListHTML = areaServices.map(service => `<li>${service.name}</li>`).join("");

        areasHTML += `
        <article class="area-card">
            <h2 class="area-name">${area.title}</h2>
            <ul class="area-info">
                ${servicesListHTML}
            </ul>
        </article>
        `;
    }

    areasHTML += "</ul>";
    return areasHTML;
};