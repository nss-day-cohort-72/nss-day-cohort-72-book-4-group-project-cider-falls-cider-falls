import { getServices, getParkAreas } from "./database.js";

const services = getServices();
const parkAreas = getParkAreas();

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if (itemClicked.dataset.type === 'service') {
            const serviceId = parseInt(itemClicked.dataset.id);
            const matchingAreas = parkAreas.filter(area => area.service_id.includes(serviceId));

            if (matchingAreas.length > 0) {
                const areaNames = matchingAreas.map(area => area.title).join(', ');
                window.alert(`${itemClicked.textContent} is available in the following areas: ${areaNames}.`);
            } else {
                window.alert(`${itemClicked.textContent} is not available in any park area.`);
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
