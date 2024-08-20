import { getParkAreas, getGuests, getServices } from "./database.js"

const areas = getParkAreas()
const guests = getGuests()
const services = getServices()


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "parkAreaTitle") {
        const areaId = parseInt(itemClicked.dataset.id);
        let numberOfGuests = 0;

        for (const guest of guests) {
            if (guest.parkAreasId === areaId) {
                numberOfGuests++;
            }
        }
        window.alert(`There are ${numberOfGuests} guests in the ${itemClicked.textContent} area.`);
    }
});

export const ParkAreasList = () => {
    let areasHTML = "";

    for (const area of areas) {
        const areaServices = services.filter(service => {
            const serviceIdsArray = area.service_id.split(",").map(id => parseInt(id.trim()));
            return serviceIdsArray.includes(service.id);
        });

        const servicesListHTML = areaServices.map(service => `<li>${service.name}</li>`).join("");

        areasHTML += `
        <article class="area-card">
            <h2 class="area-name" data-type="parkAreaTitle" 
                data-id="${area.id}">${area.title}</h2>
            <ul class="area-info">
                ${servicesListHTML}
            </ul>
        </article>
        `;
    }

    return areasHTML;
};
