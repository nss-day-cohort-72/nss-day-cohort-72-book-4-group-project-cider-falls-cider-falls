import { getServices, getParkAreas } from "./database.js";

const services = getServices();
const parkAreas = getParkAreas();

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;
        const serviceId = parseInt(itemClicked.dataset.id); // Convert serviceId to a number

        if (itemClicked.dataset.type === 'service') {
            // Collect all matching areas
            const matchingAreas = [];

            for (const area of parkAreas) {
                // Split the service_id string into an array of numbers
                const serviceIdsArray = area.service_id.split(",").map(id => parseInt(id.trim()));
                
                // Check if serviceId is in the array
                if (serviceIdsArray.includes(serviceId)) {
                    matchingAreas.push(area.title);
                }
            }

            // Display all matching areas in one alert
            if (matchingAreas.length > 0) {
                const areaList = matchingAreas.join(" and ");
                window.alert(`${itemClicked.textContent} is available in ${areaList}.`);
            } else {
                window.alert(`${itemClicked.textContent} is not available in any park areas.`);
            }
        }
    }
);



export const serviceList = () => {
    let servicesHTML = "<ul>";

    for (const service of services) {
        servicesHTML += `<li data-type="service" data-id="${service.id}">
                            ${service.name}</li>`;
    }

    servicesHTML += "</ul>";

    return servicesHTML;
};
